import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Presentation, Calendar, Award, ExternalLink, 
  Sparkles, Building2, X, Trophy, Users 
} from "lucide-react";

// Banner Background Image
import bgBanner from "../../assets/HomeBG.png"; 

// Workshop & Seminar Certificate/Award Images
import wsCert1 from "../../assets/wsCert1.png"; // Workshop on 3D Printing Technology
import wsCert2 from "../../assets/wsCert2.png"; // Training on Reservation and Ticketing on SABRE
import wsCert3 from "../../assets/wsCert3.png"; // Workshop on Automation
import wsCert4 from "../../assets/wsCert4.png"; // Workshop on Be Communicative
import wsCert5 from "../../assets/wsCert5.png"; // Seminar on Transition from University to Corporate Life
import wsCert6 from "../../assets/wsCert6.png"; // Carrom Runner Up Prize @ DIIT

const Workshops = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Extracted Data from Images
  const workshopsData = [
    {
      id: 1,
      title: "Workshop on 3D Printing Technology",
      organizer: "Department of Information & Communication Engineering, University of Rajshahi",
      date: "October 5, 2017",
      type: "Workshop",
      certificate: wsCert1,
      recipient: "Ramen Kumar Das",
    },
    {
      id: 2,
      title: "Training on Reservation and Ticketing on SABRE",
      organizer: "Sabre Travel Network (Bangladesh) Limited",
      date: "April 12, 2025",
      type: "Professional Training",
      certificate: wsCert2,
      recipient: "Ramen Kumar Das",
    },
    {
      id: 3,
      title: "Workshop on Automation",
      organizer: "IEEE PUST Student Branch & Dept. of EEE, Pabna University of Science & Technology",
      date: "September 21-22, 2017",
      type: "Technical Workshop",
      certificate: wsCert3,
      recipient: "Ramen Kumar Das",
    },
    {
      id: 4,
      title: "Workshop on Be Communicative",
      organizer: "BDYOUNGSTARZ at Pabna University of Science and Technology",
      date: "January 14, 2017",
      type: "Soft Skills Workshop",
      certificate: wsCert4,
      recipient: "Ramen Kumar Das",
    },
    {
      id: 5,
      title: "Seminar on Transition from University to Corporate Life",
      organizer: "IEEE PUST Student Branch & Dept. of EEE, Pabna University of Science & Technology",
      date: "March 1, 2018",
      type: "Career Seminar",
      certificate: wsCert5,
      recipient: "Ramen Kumar Das",
    },
    {
      id: 6,
      title: "Carrom Runner Up Prize @ Daffodil Institute of IT",
      organizer: "Annual Wonder Last Indoor Championship-2021, DIIT",
      date: "2021",
      type: "Extracurricular Award",
      certificate: wsCert6,
      recipient: "Ramen Kumar Das",
      isAward: true,
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
            <span>Professional & Extracurricular Engagements</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-300 tracking-tight leading-tight mb-4 drop-shadow-sm">
            Workshops & Seminars
          </h1>

          <p className="text-sm sm:text-base text-gray-100 max-w-2xl font-sans font-light leading-relaxed">
            A highlight of active participation in hands-on technical workshops, corporate skill seminars, and competitive achievements.
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
              Certificates & Participation
            </h2>
          </div>
          <span className="text-xs tracking-widest text-emerald-800 uppercase font-sans font-semibold mt-3 sm:mt-0 flex items-center gap-1.5">
            <Presentation className="w-4 h-4 text-amber-500" />
            Training & Activities
          </span>
        </div>

        {/* WORKSHOPS & SEMINARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
          {workshopsData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Thumbnail */}
                <div
                  onClick={() => setSelectedCert(item.certificate)}
                  className="relative group mb-5 rounded-xl overflow-hidden border border-gray-200 cursor-pointer bg-gray-50 aspect-[4/3] flex items-center justify-center"
                >
                  <img
                    src={item.certificate}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#163A2D]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-2">
                    {item.isAward ? (
                      <Trophy className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Award className="w-4 h-4 text-amber-400" />
                    )}
                    View Full Image
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                    item.isAward 
                      ? "bg-amber-100 text-amber-800" 
                      : "bg-emerald-100 text-emerald-800"
                  }`}>
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#163A2D] font-['Playfair_Display',serif] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Organizer Info */}
                <p className="flex items-start gap-1.5 text-xs text-gray-600 mb-4 leading-relaxed">
                  <Building2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item.organizer}</span>
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  {item.date}
                </span>

                <button
                  onClick={() => setSelectedCert(item.certificate)}
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

      {/* LIGHTBOX MODAL FOR FULL VIEW */}
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
                alt="Full View"
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