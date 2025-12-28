/**
 * Centralized tracking module for multi-site analytics
 * Sends events to n8n webhooks, bypassing adblockers
 */

import type { SiteConfig } from "@config/types";

// Shared state
let config: SiteConfig | null = null;
let sessionId: string | null = null;

/**
 * Initialize tracking system with site configuration
 * Call once at app initialization
 */
export function initTracking(siteConfig: SiteConfig): void {
  config = siteConfig;
  sessionId = crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
  logDebug("Tracking initialized", { siteId: siteConfig.siteId, sessionId });
}

/**
 * Generic event sender with sendBeacon + fetch fallback
 */
async function sendEvent(
  endpoint: string,
  payload: Record<string, any>
): Promise<void> {
  if (!config?.analytics.tracking?.enabled) {
    logDebug("Tracking disabled, skipping event", payload);
    return;
  }

  // Skip in dev unless debug mode is enabled
  if (isDev() && !config.analytics.tracking.debug) {
    logDebug("Dev mode + debug disabled, skipping event", payload);
    return;
  }

  // Enrich payload with common metadata
  const enrichedPayload = {
    ...payload,
    site_id: config.siteId,
    session_id: sessionId,
    ts: Date.now(),
    url: location.href,
    path: location.pathname,
    ref: document.referrer || "",
    ua: navigator.userAgent || "",
    lang: navigator.language || "",
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    screen: `${screen.width}x${screen.height}`,
    ...extractUTMs(),
  };

  const body = JSON.stringify(enrichedPayload);

  // Try sendBeacon first (best for page unload)
  try {
    if (navigator.sendBeacon) {
      const ok = navigator.sendBeacon(
        endpoint,
        new Blob([body], { type: "text/plain" })
      );
      if (ok) {
        logDebug("✅ sendBeacon success", enrichedPayload);
        return;
      }
    }
  } catch (err) {
    logDebug("sendBeacon failed, falling back to fetch", err);
  }

  // Fallback to fetch with keepalive
  fetch(endpoint, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "text/plain" },
    body,
    keepalive: true,
  })
    .then(() => logDebug("✅ fetch success", enrichedPayload))
    .catch((err) =>
      logDebug("❌ fetch failed", {
        error: err.message,
        payload: enrichedPayload,
      })
    );
}

/**
 * Track page view (called on page load)
 * Uses sessionStorage to prevent duplicate sends on reload
 */
export function trackPageView(): void {
  // Anti-duplicate key based on pathname (not full URL to ignore query params changes)
  const key = `pv:${location.pathname}`;
  if (sessionStorage.getItem(key)) {
    logDebug("Page view already tracked for this session", {
      path: location.pathname,
    });
    return;
  }
  sessionStorage.setItem(key, "1");

  const endpoint = config?.analytics.tracking?.endpoints.pageView;
  if (!endpoint) {
    logDebug("No pageView endpoint configured");
    return;
  }

  sendEvent(endpoint, {
    event: "page_view",
    page_path: location.pathname,
    page_title: document.title,
  });
}

/**
 * Track lead submission (called after form success)
 */
export function trackLead(formData: Record<string, any>): void {
  const endpoint = config?.analytics.tracking?.endpoints.lead;
  if (!endpoint) {
    logDebug("No lead endpoint configured");
    return;
  }

  sendEvent(endpoint, {
    event: "lead",
    ...formData,
    lead_type: "simulator",
  });
}

/**
 * Track custom event
 */
export function trackEvent(
  eventName: string,
  data?: Record<string, any>
): void {
  const endpoint = config?.analytics.tracking?.endpoints.event;
  if (!endpoint) {
    logDebug("No event endpoint configured");
    return;
  }

  sendEvent(endpoint, {
    event: eventName,
    ...data,
  });
}

// ============================================================
// HELPERS
// ============================================================

/**
 * Extract UTM parameters from URL
 */
function extractUTMs(): Record<string, string> {
  const params = new URLSearchParams(location.search);
  const utms: Record<string, string> = {};

  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];
  utmKeys.forEach((key) => {
    const val = params.get(key);
    if (val) utms[key] = val;
  });

  return utms;
}

/**
 * Check if running in development mode
 */
function isDev(): boolean {
  return (
    location.hostname === "localhost" || location.hostname.includes("127.0.0.1")
  );
}

/**
 * Debug logger (only logs if debug mode enabled)
 */
function logDebug(msg: string, data?: any): void {
  if (config?.analytics.tracking?.debug) {
    console.log(`[Tracking] ${msg}`, data || "");
  }
}
