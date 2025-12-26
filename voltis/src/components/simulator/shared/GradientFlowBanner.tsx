import React from "react";

interface GradientFlowBannerProps {
  text?: string;
}

export const GradientFlowBanner: React.FC<GradientFlowBannerProps> = ({
  text = "⚡ Recevoir mon Étude Gratuite!",
}) => {
  return (
    <div className="relative mb-3 -mx-6 md:-mx-8 rounded-lg overflow-hidden">
      <div className="relative bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-[length:200%_100%] animate-gradient-flow py-3 px-6">
        <p className="text-white font-bold text-center text-sm md:text-base tracking-wide">
          {text}
        </p>
      </div>
      <div className="absolute -bottom-4 left-4 text-[10px] text-gray-400 italic">
        Animation: Gradient Flow
      </div>
    </div>
  );
};
