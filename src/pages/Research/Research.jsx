import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Clock, Presentation, Brain, ExternalLink, 
  Sparkles, Calendar, MapPin, X, CheckCircle2, Award 
} from "lucide-react";

// Banner Background Image
import bgBanner from "../../assets/HomeBG.png"; 

// Certificate Images
import cert1 from "../../assets/cert1.png"; 
import cert2 from "../../assets/cert2.png"; 
import cert3 from "../../assets/cert3.png"; 
import cert4 from "../../assets/cert4.png"; 
import cert5 from "../../assets/cert5.png"; 

const Research = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Research Data
  const publishedPapers = [
    {
      id: 1,
      title: "Apply Optimization Techniques in Machine Learning Model for Breast Cancer Detection",
      authors: "Ramen Kumar Das, Shatabdi Chatterjee, Sajnin Sampa",
      journal: "Journal Of Integrated Sciences",
      date: "February 2026",
      tag: "Special Issue",
      link: "https://journal.iou.edu.gm/jis/article/view/299", 
    },
  ];

  const papersUnderReview = [
    {
      id: 1,
      title: "A Revision and Presentation of ALEX Net and VGG Net Literature",
      authors: "Ramen Kumar Das, Shahriar Jahan Rafi",
      journal: "Daffodil International University Journal of Science and Technology",
      status: "Under Review",
    },
  ];

  const conferencePresentations = [
    {
      id: 1,
      authors: "Ramen Kumar Das, Sharier Jahan Rafi",
      title: "Data Analysis and Death Rate Prediction During Covid-19 in Bangladesh using ML",
      event: "INTERNATIONAL ANTALYA SCIENTIFIC RESEARCH AND INNOVATIVE STUDIES CONGRESS - X",
      date: "May 24-25, 2026",
      location: "Antalya, Türkiye",
      certificate: cert1,
    },
    {
      id: 2,
      authors: "Ramen Kumar Das, Nesheta Halder",
      title: "Integrating Hybrid Deep Learning for Real-Time Monitoring of Prohibited Fishing Gear and Juvenile (Jatka) Hilsa Protection",
      event: "6th Young Scientist Congress, Bangladesh Academy of Sciences",
      date: "April 4-5, 2026",
      location: "Dhaka, Bangladesh",
      type: "Oral Presentation",
      certificate: cert2,
    },
    {
      id: 3,
      authors: "Ramen Kumar Das",
      title: "A Defense-Oriented Robust LSTM Framework for Time Series Data Against Poisoning and Backdoor Threats",
      event: "3rd INTERNATIONAL CONGRESS ON ADVANCED RESEARCH AND APPLICATIONS",
      date: "November 27-29, 2025",
      location: "Sivas Cumhuriyet University, Sivas, Türkiye",
      certificate: cert3,
    },
    {
      id: 4,
      authors: "Ramen Kumar Das & Mizanur Rahman",
      title: "Comparative Study of Different Hashing Algorithms and Hashing Avalanche Effects on Image",
      event: "7th International Conference on Integrated Sciences",
      date: "October 25-26, 2025",
      location: "Eastern University, Dhaka, Bangladesh",
      certificate: cert4,
    },
    {
      id: 5,
      authors: "Ramen Kumar Das, Tanjila Chowdhury Orpe, & Shatabdi Chatterjee",
      title: "Adversarial Resilient LSTM Model for Secure Time-Series Forecasting and Classification",
      event: "International Conference on Applied Statistics and Data Science 2025 (ICASDS)",
      date: "December 28-29, 2025",
      location: "University of Dhaka, Dhaka, Bangladesh",
      certificate: cert5,
    },
  ];

  const researchInterests = [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Data Science",
    "Artificial Intelligence",
    "Information Security",
  ];

  return (
    <div className="w-full bg-[#F8FAFC] text-gray-800 rounded-xl lg:rounded-3xl overflow-hidden font-['Playfair_Display',serif] shadow-sm border border-emerald-100/60">
      
      {/* 1. HERO BANNER (Matching Tools.jsx) */}
      <section
        className="relative min-h-[360px] md:min-h-[420px] flex flex-col justify-center items-center text-center px-4 py-16 bg-cover bg-center bg-no-repeat rounded-xl lg:rounded-3xl overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${bgBanner})`,
        }}
      >
        {/* Soft Overlay for Light Theme Contrast */}
        <div className="absolute inset-0 bg-[#0C2219]/75 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-md text-xs sm:text-sm tracking-widest text-amber-300 uppercase mb-6 font-sans shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Academic Contributions & Publications</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-300 tracking-tight leading-tight mb-4 drop-shadow-sm">
            Research Paper & Experience
          </h1>

          <p className="text-sm sm:text-base text-gray-100 max-w-2xl font-sans font-light leading-relaxed">
            A comprehensive compilation of published journal articles, ongoing research reviews, international conference presentations, and core scientific interests.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-16">

        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-emerald-900/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-8 bg-[#163A2D] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-4xl font-bold text-[#163A2D]">
              Research Portfolio
            </h2>
          </div>
          <span className="text-xs tracking-widest text-emerald-800 uppercase font-sans font-semibold mt-3 sm:mt-0 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Scholarly Works
          </span>
        </div>

        {/* RESEARCH INTERESTS BADGES */}
        <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-emerald-100 shadow-sm font-sans">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-emerald-700" />
            <h3 className="text-lg font-bold text-[#163A2D] uppercase tracking-wider">
              Research Interests
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {researchInterests.map((interest, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs sm:text-sm font-semibold flex items-center gap-1.5 hover:bg-emerald-100/80 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* PUBLISHED JOURNAL PAPER */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-l-4 border-emerald-700 pl-3">
            <BookOpen className="w-6 h-6 text-emerald-700" />
            <h3 className="text-2xl sm:text-3xl font-bold text-[#163A2D]">
              Published Journal Paper
            </h3>
          </div>

          <div className="space-y-4">
            {publishedPapers.map((paper) => (
              <motion.div
                key={paper.id}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm hover:shadow-md transition-all font-sans relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                    {paper.tag}
                  </span>
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    {paper.date}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-[#163A2D] font-['Playfair_Display',serif] mb-2 leading-snug">
                  "{paper.title}"
                </h4>

                <p className="text-xs sm:text-sm text-amber-700 font-semibold mb-2">
                  Authors: <span className="text-gray-700 font-normal">{paper.authors}</span>
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 mt-4">
                  <span className="text-xs sm:text-sm text-emerald-800 font-medium">
                    {paper.journal}
                  </span>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-[#163A2D] transition-colors"
                  >
                    <span>View Paper</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PAPER UNDER REVIEW */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
            <Clock className="w-6 h-6 text-amber-600" />
            <h3 className="text-2xl sm:text-3xl font-bold text-[#163A2D]">
              Papers Under Review
            </h3>
          </div>

          <div className="space-y-4">
            {papersUnderReview.map((paper) => (
              <div
                key={paper.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-200/60 shadow-sm font-sans"
              >
                <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-3">
                  • {paper.status}
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-[#163A2D] font-['Playfair_Display',serif] mb-2 leading-snug">
                  "{paper.title}"
                </h4>

                <p className="text-xs sm:text-sm text-amber-700 font-semibold mb-2">
                  Authors: <span className="text-gray-700 font-normal">{paper.authors}</span>
                </p>

                <p className="text-xs sm:text-sm text-gray-500 font-medium pt-3 border-t border-gray-100 mt-3">
                  Submitted to: <span className="text-emerald-900 font-semibold">{paper.journal}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONFERENCE PRESENTATIONS / ABSTRACTS */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-l-4 border-emerald-700 pl-3">
            <Presentation className="w-6 h-6 text-emerald-700" />
            <h3 className="text-2xl sm:text-3xl font-bold text-[#163A2D]">
              Conference Presentations / Abstracts
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            {conferencePresentations.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Certificate Preview Thumbnail */}
                  <div
                    onClick={() => setSelectedCert(item.certificate)}
                    className="relative group mb-4 rounded-xl overflow-hidden border border-gray-200 cursor-pointer bg-gray-50 aspect-video flex items-center justify-center"
                  >
                    <img
                      src={item.certificate}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#163A2D]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-2">
                      <Award className="w-4 h-4 text-amber-400" />
                      Click to View Certificate
                    </div>
                  </div>

                  {item.type && (
                    <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-2">
                      {item.type}
                    </span>
                  )}

                  <h4 className="text-base font-bold text-[#163A2D] font-['Playfair_Display',serif] mb-2 leading-snug">
                    "{item.title}"
                  </h4>

                  <p className="text-xs text-amber-700 font-semibold mb-2">
                    Authors: <span className="text-gray-600 font-normal">{item.authors}</span>
                  </p>

                  <p className="text-xs text-gray-700 font-medium leading-relaxed mb-4">
                    {item.event}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs text-gray-500 gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-emerald-900">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    {item.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

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

export default Research;