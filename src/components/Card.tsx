import React from "react";

type CardProps = {
  type: "featured" | "popular" | "new";
  title: string;
  description: React.ReactNode;
  className?: string;
};

export default function Card({ type, title, description, className ="" }: CardProps) {
  
  const tagStyles = {
    featured: "bg-purple-100 text-purple-600",
    popular: "bg-blue-100 text-blue-600",
    new: "bg-green-100 text-green-600",
  };

  const tagText = {
    featured: "Featured",
    popular: "Popular",
    new: "New",
  };

  return (
    <div className={`bg-white min-w-[180px] md:w-[220px] lg:w-[200.33px] h-auto md:h-[242px] rounded-[10px] pt-[24px] px-[12px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07),0px_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col justify-between flex-shrink-0 ${className}`}>
      <div className="flex flex-col gap-[12px]">
        {/* TAG */}
        <div className={`flex items-center justify-center w-[71px] h-[24px] px-[4px] py-[10px] rounded-[4px] font-[500] text-[14px] leading-[16px] ${tagStyles[type]}`}>
          {tagText[type]}
        </div>
        {/* TITLE */}
        <h3 className="font-[500] text-[20px] leading-[110%] text-[#0F172A]">
          {title}
        </h3>
        {/* DESCRIPTION */}
        <p className="font-[400] text-[14px] leading-[140%] text-[#475569]">
          {description}
        </p>
      </div>
      {/* BUTTON */}
      <div className="w-full h-[72px] p-[16px] flex items-center">
        <button className="w-full h-[40px] border-[2px] border-[#2563EB] rounded-[8px] px-[12px] py-[8px] text-[#2563EB] font-[500] text-[14px] leading-[24px] tracking-[0.5px]">
          Take Lesson
        </button>
      </div>
    </div>
  );
}