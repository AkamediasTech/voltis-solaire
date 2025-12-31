// Icon registry for dynamic icon loading
// Supports both .astro and .tsx icon components

import ShieldCheckIconV2 from "./ShieldCheckIconV2.astro";
import PercentageIcon from "./PercentageIcon.astro";
import PiggyBankIcon from "./PiggyBankIcon.astro";
import HouseValueIcon from "./HouseValueIcon.astro";
import TrendingUpIcon from "./TrendingUpIcon.astro";
import SPBatteryChargeColorIcon from "./SPBatteryChargeColorIcon.astro";
import GreenTrendDown from "./GreenTrendDown";
import LossesColorIcon from "./LossesColorIcon";
import GreenEnergyColorIcon from "./GreenEnergyColorIcon";
import { RoomKeyColorIcon } from "./RoomKeyColorIcon";
import CourthouseColorIcon from "./CourthouseColorIcon.astro";
import MaintenanceColorIcon from "./MaintenanceColorIcon";
import VerifiedColorIcon from "./VerifiedColorIcon";
import HousePriceUpColorIcon from "./HousePriceUpColorIcon";

export const iconRegistry = {
  "shield-check": ShieldCheckIconV2,
  percentage: PercentageIcon,
  "piggy-bank": PiggyBankIcon,
  "house-value": HouseValueIcon,
  "trending-up": TrendingUpIcon,
  "sp-battery-charge": SPBatteryChargeColorIcon,
  "green-trend-down": GreenTrendDown,
  "losses-color": LossesColorIcon,
  "green-energy-color": GreenEnergyColorIcon,
  "room-key-color": RoomKeyColorIcon,
  "courthouse-color": CourthouseColorIcon,
  "maintenance-color": MaintenanceColorIcon,
  "verified-blue": VerifiedColorIcon,
  "house-price-up-color": HousePriceUpColorIcon,
} as const;

export type IconName = keyof typeof iconRegistry;
