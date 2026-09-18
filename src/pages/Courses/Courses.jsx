import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { 
  GraduationCap, Calendar, Award, ExternalLink, 
  Sparkles, ShieldCheck, X, Loader2, AlertCircle 
} from "lucide-react";

// Banner Background Image
import bgBanner from "../../assets/CoursesBanner.png"; 

const Courses = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedCert, setSelectedCert] = useState(null);

  // Fetch API Data for Courses using TanStack Query
  const { 
    data: coursesData = [], 
    isLoading, 
    isError, 
    error 
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const response = await axiosSecure.get("/courses");
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
        <div className="absolute inset-0 bg-[#0C2219]/75 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-md text-xs sm:text-sm tracking-widest text-amber-300 uppercase mb-6 font-sans shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Continuous Learning & Skill Development</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-300 tracking-tight leading-tight mb-4 drop-shadow-sm">
            Completed Courses
          </h1>

          <p className="text-sm sm:text-base text-gray-100 max-w-2xl font-sans font-light leading-relaxed">
            A showcase of professional certifications, technical training programs, and specialized academic courses completed across various domains.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-emerald-900/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-8 bg-[#163A2D] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-4xl font-bold text-[#163A2D]">
              Certifications & Credentials
            </h2>
          </div>
          <span className="text-xs tracking-widest text-emerald-800 uppercase font-sans font-semibold mt-3 sm:mt-0 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-amber-500" />
            Verified Certificates
          </span>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center gap-3 py-16 font-sans">
            <Loader2 className="w-9 h-9 animate-spin text-emerald-700" />
            <p className="text-sm text-gray-600 font-medium animate-pulse">
              Fetching completed courses...
            </p>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-200 text-center space-y-2 font-sans">
            <AlertCircle className="w-8 h-8 text-rose-500 mx-auto" />
            <p className="text-xs sm:text-sm text-rose-700 font-medium">
              {error?.message || "Failed to load completed courses."}
            </p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !isError && coursesData.length === 0 && (
          <div className="bg-white/80 rounded-2xl p-8 text-center border border-dashed border-gray-300 font-sans">
            <GraduationCap className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">No courses available at the moment.</p>
          </div>
        )}

        {/* COURSE CARDS GRID */}
        {!isLoading && !isError && coursesData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            {coursesData.map((course) => (
              <motion.div
                key={course._id || course.title}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group bg-white/90 backdrop-blur-md rounded-2xl border border-emerald-100/80 p-6 shadow-sm hover:shadow-xl hover:border-emerald-300/80 transition-all flex flex-col justify-between relative overflow-hidden"
              >
                {/* Glowing hover effect background */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Certificate Thumbnail / Preview */}
                  {course.certificateUrl && (
                    <div
                      onClick={() => setSelectedCert(course.certificateUrl)}
                      className="relative group/img mb-5 rounded-xl overflow-hidden border border-emerald-100/80 cursor-pointer bg-slate-900 aspect-[16/10] flex items-center justify-center shadow-inner"
                    >
                      <img
                        src={course.certificateUrl}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 group-hover/img:opacity-80 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-[#0C2219]/70 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold gap-2 backdrop-blur-[1px]">
                        <Award className="w-4 h-4 text-amber-400" />
                        <span>View Certificate</span>
                      </div>
                    </div>
                  )}

                  {/* Organization Tag */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                      {course.organization}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg font-bold text-[#163A2D] font-['Playfair_Display',serif] mb-3 leading-snug group-hover:text-emerald-800 transition-colors">
                    {course.title}
                  </h3>

                  {/* Certificate Number */}
                  {course.certificateNumber && course.certificateNumber !== "N/A" && (
                    <div className="space-y-1.5 text-xs text-gray-600 mb-5">
                      <p className="flex items-center gap-1.5 text-gray-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="font-semibold text-gray-800">Cert No:</span> {course.certificateNumber}
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-emerald-100/60 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    Issued: {course.issueDate}
                  </span>

                  {course.certificateUrl && (
                    <button
                      onClick={() => setSelectedCert(course.certificateUrl)}
                      className="inline-flex items-center gap-1 text-emerald-800 font-semibold hover:text-emerald-600 transition-colors"
                    >
                      <span>Preview</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
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
                alt="Certificate Full View"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Courses;