import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building2, Sparkles } from "lucide-react";

const ProfessionalExperience = () => {
  const experiences = [
    {
      id: 1,
      role: "Research Assistant",
      institution: "University Lab / ISRT",
      location: "University of Dhaka",
      period: "Jan 2022 — Present",
      type: "Current Role",
      description:
        "Leading data analysis pipeline development and deep learning model architecture for time-series forecasting. Collaborating on interdisciplinary environmental data research projects.",
      highlights: [
        "Architected LSTM models for time-series anomaly detection",
        "Co-authored research publications in high-impact statistical journals",
        "Managed data preprocessing & feature extraction arrays"
      ]
    },
    {
      id: 2,
      role: "Teaching Assistant",
      institution: "Department of Statistics",
      location: "University of Dhaka",
      period: "Sep 2020 — Dec 2021",
      type: "Academic",
      description:
        "Assisted undergraduate students with practical coursework, statistical software labs (R/Python), and fundamental statistical theory problem sets.",
      highlights: [
        "Conducted weekly lab sessions for Intro to Statistics",
        "Evaluated assignments and provided methodological guidance",
        "Mentored 50+ students in exploratory data analysis (EDA)"
      ]
    }
  ];

  return (
    <section className="w-full min-h-screen bg-[#F4F9F5]/60 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* ==========================================
            SECTION HEADER (Matching AwardPage Style)
        ========================================== */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-emerald-900/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-6 bg-[#163A2D] rounded-full inline-block" />
            <h1 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#163A2D]">
              Professional Experience
            </h1>
          </div>
          <span className="text-xs tracking-widest text-emerald-800 uppercase font-semibold mt-2 sm:mt-0 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Academic & Research Appointments
          </span>
        </div>

        {/* ==========================================
            EXPERIENCE LIST (Glassmorphism Cards)
        ========================================== */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100/80 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 p-6 sm:p-8"
            >
              {/* Subtle Ambient Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                
                {/* Role & Organization Info */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {exp.type}
                    </span>
                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      {exp.location}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#163A2D]">
                    {exp.role}
                  </h2>

                  <p className="text-sm font-semibold text-emerald-800/90 flex items-center gap-1.5 mt-1">
                    <Building2 className="w-4 h-4 text-emerald-700" />
                    {exp.institution}
                  </p>
                </div>

                {/* Duration Badge */}
                <div className="self-start lg:self-auto">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-100 text-xs font-medium text-emerald-900 font-mono shadow-2xs">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {exp.description}
              </p>

              {/* Key Contributions / Highlights Box (Matching Award Quote Box Style) */}
              <div className="bg-emerald-50/40 border border-emerald-100/80 p-4 rounded-xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#163A2D] mb-2.5 flex items-center gap-1">
                  Key Responsibilities & Achievements
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProfessionalExperience;