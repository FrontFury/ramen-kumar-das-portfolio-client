import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, Calendar, Award, ExternalLink, 
  Sparkles, Clock, ShieldCheck, X, BookOpen 
} from "lucide-react";

// Banner Background Image
import bgBanner from "../../assets/HomeBG.png"; 

// Course Certificate Images (আপনার প্রোজেক্টের পাথ অনুযায়ী অ্যাডভাস্ট করে নিন)
import courseCert1 from "../../assets/courseCert1.png"; // Alison Certificate
import courseCert2 from "../../assets/courseCert2.png"; // AI-Quest Certificate
import courseCert3 from "../../assets/courseCert3.png"; // Research Help BD Certificate
import courseCert4 from "../../assets/courseCert4.png"; // 10 Minute School Certificate

const Courses = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Extracted Course Data from Image
  const coursesData = [
    {
      id: 1,
      title: "Certified Blockchain Security Examiner (CBSE) – Level 1",
      provider: "Alison.com",
      certNumber: "4618-53782785",
      type: "Online Course",
      duration: "Self-Paced",
      awardedDate: "8th November, 2025",
      certificate: courseCert1,
      link: "#", // প্রয়োজন হলে লিঙ্ক বসাতে পারেন
    },
    {
      id: 2,
      title: "Data Science & Machine Learning With Python",
      provider: "AI-Quest",
      certNumber: "ML00304",
      type: "Professional Certification",
      duration: "3 months",
      awardedDate: "1st November, 2021",
      certificate: courseCert2,
      link: "#",
    },
    {
      id: 3,
      title: "Research Course Basic to Advance",
      provider: "Research Help Bangladesh",
      certNumber: "N/A",
      type: "Research Training",
      duration: "3 months",
      awardedDate: "1st February, 2022",
      certificate: courseCert3,
      link: "#",
    },
    {
      id: 4,
      title: "Web Design",
      provider: "Robi 10 Minute School",
      certNumber: "N/A",
      type: "Online Course",
      duration: "Self-Paced",
      awardedDate: "3rd November, 2021",
      certificate: courseCert4,
      link: "#",
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

        {/* COURSE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {coursesData.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Certificate Thumbnail / Preview */}
                <div
                  onClick={() => setSelectedCert(course.certificate)}
                  className="relative group mb-5 rounded-xl overflow-hidden border border-gray-200 cursor-pointer bg-gray-50 aspect-[16/10] flex items-center justify-center"
                >
                  <img
                    src={course.certificate}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#163A2D]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    View Certificate
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    {course.provider}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-bold">
                    {course.type}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-[#163A2D] font-['Playfair_Display',serif] mb-3 leading-snug">
                  {course.title}
                </h3>

                {/* Details */}
                <div className="space-y-1.5 text-xs text-gray-600 mb-5">
                  {course.certNumber !== "N/A" && (
                    <p className="flex items-center gap-1.5 text-gray-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="font-semibold text-gray-800">Cert No:</span> {course.certNumber}
                    </p>
                  )}
                  <p className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-semibold text-gray-800">Duration:</span> {course.duration}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  Awarded: {course.awardedDate}
                </span>

                <button
                  onClick={() => setSelectedCert(course.certificate)}
                  className="inline-flex items-center gap-1 text-emerald-800 font-semibold hover:text-emerald-600 transition-colors"
                >
                  <span>Preview</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

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