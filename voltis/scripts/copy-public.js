/**
 * Script to copy site-specific public assets before build/dev
 *
 * This script:
 * 1. Clears the /public/ directory (except .gitkeep)
 * 2. Copies all files from /public-shared/
 * 3. Copies all files from /public-<site-id>/
 *
 * Result: /public/ contains only shared + site-specific assets
 *
 * Usage: Automatically called via npm prebuild/predev scripts
 * Requires: SITE_ID environment variable
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteId = process.env.SITE_ID;

if (!siteId) {
  console.error("❌ Error: SITE_ID environment variable is required");
  process.exit(1);
}

const rootDir = path.join(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const sharedDir = path.join(rootDir, "public-shared");
const siteDir = path.join(rootDir, `public-${siteId}`);

console.log(`\n🔧 Preparing public assets for: ${siteId}`);

// Check if site-specific directory exists
if (!fs.existsSync(siteDir)) {
  console.error(`❌ Error: Site directory not found: public-${siteId}/`);
  const available = fs
    .readdirSync(rootDir)
    .filter(
      (f) =>
        f.startsWith("public-") &&
        f !== "public-shared" &&
        fs.statSync(path.join(rootDir, f)).isDirectory()
    );
  if (available.length > 0) {
    console.error(
      `   Available sites: ${available
        .map((f) => f.replace("public-", ""))
        .join(", ")}`
    );
  }
  process.exit(1);
}

/**
 * Recursively copy directory contents
 */
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) {
    return 0;
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  let count = 0;
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      count += copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      count++;
    }
  }

  return count;
}

/**
 * Clear directory contents (keep .gitkeep)
 */
function clearDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === ".gitkeep") continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(fullPath);
    }
  }
}

// Execute
try {
  // Step 1: Clear public directory
  console.log("   Clearing /public/...");
  clearDirSync(publicDir);

  // Step 2: Copy shared assets
  console.log("   Copying shared assets...");
  const sharedCount = copyDirSync(sharedDir, publicDir);

  // Step 3: Copy site-specific assets
  console.log(`   Copying ${siteId} assets...`);
  const siteCount = copyDirSync(siteDir, publicDir);

  // Create .gitkeep to preserve directory in git
  fs.writeFileSync(
    path.join(publicDir, ".gitkeep"),
    "# Generated folder - contents managed by scripts/copy-public.js\n"
  );

  console.log(
    `✅ Done! ${sharedCount} shared + ${siteCount} site files → /public/\n`
  );
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1);
}
