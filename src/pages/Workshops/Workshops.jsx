import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { 
  Presentation, 
  Calendar, 
  Award, 
  ExternalLink, 
  Sparkles, 
  Building2, 
  X, 
  Trophy, 
  Loader2, 
  AlertCircle,
  Tag
} from "lucide-react";

// Banner Background Image
import bgBanner from "../../assets/WorkshopBanner.png"; 

const Workshops = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedCert, setSelectedCert] = useState(null);

  // Fetch API Data using TanStack Query
  const {
    data: workshopsData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["workshops"],
    queryFn: async () => {
      const response = await axiosSecure.get("/workshops");
      return Array.isArray(response.data)
        ? response.data
        : response.data.data || [];
    },
  });

  // Helper function to handle dates with ordinal suffixes (e.g., "15th August, 2026")
  const parseCustomDate = (dateString) => {
    if (!dateString) return 0;
    // Remove "st", "nd", "rd", "th" from the date string
    const cleanedDateStr = dateString.replace(/(\d+)(st|nd|rd|th)/i, "$1");
    const parsedDate = new Date(cleanedDateStr).getTime();
    return isNaN(parsedDate) ? 0 : parsedDate;
  };

  // Sort workshops by date (Newest first / Latest to Oldest)
  const workshops = useMemo(() => {
    return [...workshopsData].sort((a, b) => {
      const dateA = parseCustomDate(a.date);
      const dateB = parseCustomDate(b.date);

      return dateB - dateA; // Descending order
    });
  }, [workshopsData]);

  if (isLoading) {
    return (
      <div className="w-full py-20 bg-[#F4F9F5]/60 flex flex-col items-center justify-center gap-3 font-sans">
        <Loader2 className="w-10 h-10 animate-spin text-[#163A2D]" />
        <p className="text-sm font-semibold text-[#163A2D] animate-pulse">
          Loading Workshops & Seminars...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full bg-[#F4F9F5]/60 flex items-center justify-center p-8 font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 max-w-md text-center space-y-3">
          <AlertCircle className="w-12 h-12 text-rose-500 mx-auto opacity-80" />
          <h3 className="text-lg font-bold text-gray-800">Connection Error</h3>
          <p className="text-xs text-gray-500">
            {error?.message || "Failed to load workshops and seminars. Please try again later."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F4F9F5]/60 text-gray-800 rounded-t-xl lg:rounded-t-3xl overflow-hidden font-['Playfair_Display',serif] shadow-sm border border-emerald-100/60">
      
      {/* 1. HERO BANNER SECTION */}
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
            <span>Training & Extracurricular Activities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-300 tracking-tight leading-tight mb-4 drop-shadow-sm">
            Workshops & Seminars
          </h1>

          <p className="text-sm sm:text-base text-gray-100 max-w-2xl font-sans font-light leading-relaxed">
            Professional development, interactive training sessions, academic seminars, and co-curricular achievements.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-10 font-sans">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-emerald-900/10 pb-6 gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-8 bg-[#163A2D] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#163A2D]">
              Programs & Competitions
            </h2>
          </div>
        </div>

        {/* Empty State */}
        {workshops.length === 0 && (
          <div className="text-center py-16 bg-white/80 rounded-3xl border border-dashed border-emerald-200 space-y-3 font-sans">
            <Presentation className="w-12 h-12 text-emerald-600 mx-auto opacity-40" />
            <h3 className="text-base font-bold text-gray-700">No Records Found</h3>
            <p className="text-xs text-gray-500">Check back later for updated workshops and achievements.</p>
          </div>
        )}

        {/* WORKSHOPS GRID (Sorted by Date) */}
        {workshops.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {workshops.map((item, idx) => {
              const isCompetition = item.type?.toLowerCase().includes("sports") || 
                                    item.type?.toLowerCase().includes("competition") ||
                                    item.type?.toLowerCase().includes("award");

              return (
                <div
                  key={item._id || idx}
                  className="group relative bg-white rounded-2xl border border-emerald-100/80 shadow-2xs hover:shadow-xl hover:border-emerald-200 transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Glow Accent */}
                  <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent ${isCompetition ? 'via-amber-400' : 'via-emerald-400'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="space-y-4">
                    {/* Certificate Thumbnail Preview */}
                    {item.certificateUrl && (
                      <div
                        onClick={() => setSelectedCert(item.certificateUrl)}
                        className="relative group/img aspect-[16/10] w-full rounded-xl overflow-hidden border border-emerald-100/80 cursor-pointer bg-slate-50 flex items-center justify-center"
                      >
                        <img
                          src={item.certificateUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[#163A2D]/75 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold gap-2 backdrop-blur-[1px]">
                          {isCompetition ? (
                            <Trophy className="w-4 h-4 text-amber-300" />
                          ) : (
                            <Award className="w-4 h-4 text-amber-300" />
                          )}
                          <span>View Full Document</span>
                        </div>
                      </div>
                    )}

                    {/* Type Badge & Date */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 ${
                        isCompetition 
                          ? "bg-amber-100/80 text-amber-900" 
                          : "bg-emerald-100/80 text-emerald-900"
                      }`}>
                        <Tag className="w-3 h-3" />
                        {item.type || "Event"}
                      </span>

                      {item.date && (
                        <span className="text-[11px] text-emerald-900 font-mono font-medium flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-emerald-700" />
                          {item.date}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-base sm:text-lg font-bold font-['Playfair_Display',serif] text-[#163A2D] leading-snug group-hover:text-emerald-800 transition-colors">
                      {item.title}
                    </h2>

                    {/* Organizer Info */}
                    {item.organizer && (
                      <p className="text-xs font-medium text-gray-600 flex items-start gap-1.5 leading-relaxed pt-1 border-t border-emerald-50">
                        <Building2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item.organizer}</span>
                      </p>
                    )}
                  </div>

                  {/* Footer Action */}
                  {item.certificateUrl && (
                    <div className="pt-4 mt-3 border-t border-emerald-100/60 flex items-center justify-end">
                      <button
                        onClick={() => setSelectedCert(item.certificateUrl)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-600 transition-colors cursor-pointer"
                      >
                        <span>Preview Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL FOR FULL VIEW */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-sans"
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
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedCert}
                alt="Document View"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Workshops;