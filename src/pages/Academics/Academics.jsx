import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, Calendar, Sparkles, Building2, 
  Award, BookOpen, CheckCircle2 
} from "lucide-react";

// Banner Background Image
import bgBanner from "../../assets/HomeBG.png"; 

const Academics = () => {
  // Extracted Academic Degree Data
  const academicDegrees = [
    {
      id: 1,
      degree: "M.Sc. Eng. in Information Security",
      status: "Ongoing",
      institution: "Bangladesh University of Engineering & Technology (BUET)",
      department: "Institute of Information & Communication Technology (IICT)",
      timeline: "September 2024 - Present",
      grade: "More than 80% marks",
      highlights: [
        "Advanced Information Security Concepts",
        "Cryptography & Network Defense",
        "Cyber Threat Analysis & Resilient Systems",
      ],
    },
    {
      id: 2,
      degree: "B.Sc. in Information & Communication Engineering",
      status: "Completed",
      institution: "Pabna University of Science & Technology",
      department: "Department of Information & Communication Engineering",
      timeline: "2013 - 2018",
      grade: "CGPA 3.30 out of 4.00",
      highlights: [
        "Core Telecommunication & Networking",
        "Algorithms & Data Structures",
        "Signal Processing & System Architecture",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFC] text-gray-800 rounded-xl lg:rounded-3xl overflow-hidden font-['Playfair_Display',serif] shadow-sm border border-emerald-100/60">
      
      {/* 1. HERO BANNER */}
      <section
        className="relative min-h-[360px] md:min-h-[420px] flex flex-col justify-center items-center text-center px-4 py-16 bg-cover bg-center bg-no-repeat rounded-xl lg:rounded-3xl overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${bgBanner})`,
        }}
      >
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-[#0C2219]/75 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-md text-xs sm:text-sm tracking-widest text-amber-300 uppercase mb-6 font-sans shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Educational Background</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-300 tracking-tight leading-tight mb-4 drop-shadow-sm">
            Academic Qualifications
          </h1>

          <p className="text-sm sm:text-base text-gray-100 max-w-2xl font-sans font-light leading-relaxed">
            A chronological timeline of higher education degrees, academic achievements, and institutional affiliations.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto space-y-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-emerald-900/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-8 bg-[#163A2D] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-4xl font-bold text-[#163A2D]">
              Academic Degrees
            </h2>
          </div>
          <span className="text-xs tracking-widest text-emerald-800 uppercase font-sans font-semibold mt-3 sm:mt-0 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-amber-500" />
            Formal Education
          </span>
        </div>

        {/* DEGREE TIMELINE / CARDS */}
        <div className="space-y-8 font-sans">
          {academicDegrees.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col md:flex-row gap-6 justify-between"
            >
              <div className="space-y-4 flex-1">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.status === "Ongoing"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    • {item.status}
                  </span>
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    {item.timeline}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#163A2D] font-['Playfair_Display',serif] leading-snug">
                  {item.degree}
                </h3>

                {/* University Info */}
                <div className="space-y-1 text-sm text-gray-700">
                  <p className="font-semibold text-emerald-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    {item.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 pl-6">
                    {item.department}
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> Key Focus & Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded-md flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grade / CGPA Highlight Box */}
              <div className="md:w-56 shrink-0 flex flex-col justify-center items-center p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/60 text-center">
                <Award className="w-8 h-8 text-emerald-700 mb-2" />
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                  Performance
                </span>
                <span className="text-base sm:text-lg font-bold text-[#163A2D] font-['Playfair_Display',serif]">
                  {item.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Academics;