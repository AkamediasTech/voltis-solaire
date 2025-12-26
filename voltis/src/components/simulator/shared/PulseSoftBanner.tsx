import React from "react";

interface PulseSoftBannerProps {
  text?: string;
}

export const PulseSoftBanner: React.FC<PulseSoftBannerProps> = ({
  text = "⚡ Recevoir mon Étude Gratuite!",
}) => {
  return (
    <div className="relative mb-3 -mx-6 md:-mx-8 rounded-lg overflow-hidden">
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 py-3 px-6 animate-pulse-soft">
        <p className="text-white font-bold text-center text-sm md:text-base tracking-wide">
          {text}
        </p>
      </div>
      <div className="absolute -bottom-4 left-4 text-[10px] text-gray-400 italic">
        Animation: Pulse Soft
      </div>
    </div>
  );
};
