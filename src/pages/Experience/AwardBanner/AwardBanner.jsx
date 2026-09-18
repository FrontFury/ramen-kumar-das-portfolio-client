import React from "react";
import { Award } from "lucide-react";
import bgImage from "../../../assets/AwardsBanner.png"; 

const AwardBanner = () => {
  return (
    <section className="relative w-full rounded-t-xl lg:rounded-t-3xl overflow-hidden bg-slate-900 font-sans text-white py-20 md:py-28 lg:py-36">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Forest Overlay */}
      <div className="absolute inset-0 bg-[#0c2219]/75 backdrop-blur-[1px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center flex flex-col items-center justify-center">
        

        {/* Foreground Content Card with Border */}
        <div className="relative z-10 w-full border border-white/20 rounded-xl p-8 sm:p-12 md:p-16 flex flex-col items-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[10px] sm:text-xs tracking-widest text-emerald-200 uppercase mb-6">
            <Award className="w-3.5 h-3.5 text-emerald-300" />
            <span>Academic Honors & Professional Milestones</span>
          </div>

          {/* Main Serif Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display',serif] text-[#fef08a] tracking-tight mb-6">
            Award & Professional Experience
          </h1>

        </div>
      </div>
    </section>
  );
};

export default AwardBanner;