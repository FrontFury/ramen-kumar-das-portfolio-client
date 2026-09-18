import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { 
  GraduationCap, Calendar, Sparkles, Building2, 
  Award, Loader2, AlertCircle, ExternalLink, X, BookOpen 
} from "lucide-react";

// Banner Background Image
import bgBanner from "../../assets/AcademicBanner.jpg"; 

const Academics = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedCert, setSelectedCert] = useState(null);

  // Fetch API Data using TanStack Query & useAxiosSecure
  const { 
    data: academicDegrees = [], 
    isLoading, 
    isError, 
    error 
  } = useQuery({
    queryKey: ["academics"],
    queryFn: async () => {
      const response = await axiosSecure.get("/academics");
      return Array.isArray(response.data)
        ? response.data
        : response.data.data || [];
    },
  });

  return (
    <div className="w-full bg-[#F8FAFC] text-gray-800 rounded-t-xl lg:rounded-t-3xl overflow-hidden font-['Playfair_Display',serif] shadow-sm border border-emerald-100/60">
      
      {/* 1. HERO BANNER */}
      <section
        className="relative min-h-[360px] md:min-h-[580px] flex flex-col justify-center items-center text-center px-4 py-16 bg-cover bg-center bg-no-repeat rounded-t-xl lg:rounded-t-3xl overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${bgBanner})`,
        }}
      >
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-[#0C2219] opacity-50 backdrop-blur-[2px]" />

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

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center gap-3 py-16 font-sans">
            <Loader2 className="w-9 h-9 animate-spin text-emerald-700" />
            <p className="text-sm text-gray-600 font-medium animate-pulse">
              Fetching academic qualifications...
            </p>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-200 text-center space-y-2 font-sans">
            <AlertCircle className="w-8 h-8 text-rose-500 mx-auto" />
            <p className="text-xs sm:text-sm text-rose-700 font-medium">
              {error?.message || "Failed to load academic qualifications."}
            </p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !isError && academicDegrees.length === 0 && (
          <div className="bg-white/80 rounded-2xl p-8 text-center border border-dashed border-gray-300 font-sans">
            <GraduationCap className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">No academic qualifications found.</p>
          </div>
        )}

        {/* DEGREE TIMELINE / CARDS */}
        {!isLoading && !isError && academicDegrees.length > 0 && (
          <div className="space-y-8 font-sans">
            {academicDegrees.map((item) => {
              const isOngoing = item.degree?.toLowerCase().includes("ongoing");

              return (
                <motion.div
                  key={item._id || item.degree}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-emerald-100/80 shadow-sm hover:shadow-xl hover:border-emerald-300/80 transition-all relative overflow-hidden flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
                >
                  {/* Background Glow Effect */}
                  <div className="absolute -right-12 -top-12 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all duration-500 pointer-events-none" />

                  <div className="space-y-4 flex-1">
                    {/* Timeline & Status Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          isOngoing
                            ? "bg-amber-100 text-amber-800"
                            : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        • {isOngoing ? "Ongoing" : "Completed"}
                      </span>
                      {item.duration && (
                        <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                          {item.duration}
                        </span>
                      )}
                    </div>

                    {/* Degree Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#163A2D] font-['Playfair_Display',serif] leading-snug group-hover:text-emerald-800 transition-colors">
                      {item.degree}
                    </h3>

                    {/* University Info */}
                    <div className="space-y-1 text-sm text-gray-700">
                      <p className="font-semibold text-emerald-900 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        {item.institution}
                      </p>
                      {item.department && (
                        <p className="text-xs sm:text-sm text-gray-600 pl-6 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-emerald-600/70 shrink-0" />
                          {item.department}
                        </p>
                      )}
                    </div>

                    {/* Certificate Preview Link */}
                    {item.certificateUrl && (
                      <div className="pt-2">
                        <button
                          onClick={() => setSelectedCert(item.certificateUrl)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-600 transition-colors bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60"
                        >
                          <Award className="w-3.5 h-3.5 text-amber-600" />
                          <span>View Certificate / Document</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Grade / CGPA Highlight Box */}
                  {item.cgpa && item.cgpa !== "N/A" && (
                    <div className="w-full md:w-52 shrink-0 flex flex-col justify-center items-center p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/60 text-center shadow-inner">
                      <Award className="w-8 h-8 text-emerald-700 mb-2" />
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                        Result / CGPA
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#163A2D] font-['Playfair_Display',serif]">
                        {item.cgpa}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL FOR CERTIFICATE FULL VIEW */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden p-2 shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedCert}
                alt="Certificate / Document View"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Academics;