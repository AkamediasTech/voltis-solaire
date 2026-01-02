import { Zap } from "lucide-react";
import React from "react";

interface ShimmerBannerProps {
  text?: string;
  variant?: "orange" | "blue";
}

// export const ShimmerBanner: React.FC<ShimmerBannerProps> = ({
//   text = "Recevoir mon Étude Gratuite!",
// }) => {
//   return (
//     <div className="relative mb-3 -mx-6 md:-mx-8 rounded-lg  overflow-hidden bg-edf-orange">
//       <div className="relative overflow-hidden bg-gradient-to-r from-orange-500/80 to-orange-400/90 py-3 px-6 h-16 flex items-center justify-center">
//         {/* <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-400 py-3 px-6 h-16 flex items-center justify-center"> */}
//         <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//         {/* Overlay pour améliorer la lisibilité du texte */}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-600/40 to-orange-500/40" /> */}
//         <Zap className="w-5 h-5 mx-2 text-yellow-300 fill-current relative z-10" />

//         <p className="relative text-white font-bold text-center text-sm md:text-lg tracking-wide drop-shadow-lg z-10">
//           {text}
//         </p>
//       </div>
//       <div className="absolute -bottom-4 left-4 text-[10px] text-gray-400 italic">
//         Animation: Shimmer Effect
//       </div>
//     </div>
//   );
// };

export const ShimmerBanner: React.FC<ShimmerBannerProps> = ({
  text = "Recevoir mon Étude Gratuite!",
  variant = "blue",
}) => {
  const isBlue = variant === "blue";

  return (
    <div
      className={`relative mb-3 -mx-6 md:-mx-8 rounded-lg overflow-hidden ${
        isBlue ? "bg-edf-blue" : "bg-edf-orange"
      }`}
    >
      <div
        className={`relative overflow-hidden py-3 px-3 sm:px-6 h-16 flex items-center gap-1 justify-center ${
          isBlue
            ? "bg-gradient-to-r from-blue-900/80 to-blue-800/90"
            : "bg-gradient-to-r from-orange-500/80 to-orange-400/90"
        }`}
      >
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <Zap className="w-5 h-5 mx-2 text-yellow-300 fill-current relative z-10" />
        <p className="relative text-white font-bold text-center text-sm md:text-lg tracking-wide drop-shadow-lg z-10">
          {text}
        </p>
      </div>
    </div>
  );
};
