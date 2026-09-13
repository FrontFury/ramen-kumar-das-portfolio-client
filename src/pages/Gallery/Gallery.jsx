import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, Calendar, Sparkles, MapPin, 
  X, Maximize2, Tag, Layers 
} from "lucide-react";

// Banner Background Image
import bgBanner from "../../assets/HomeBG.png"; 

// Gallery Images (আপনার প্রজেক্টের আসল ইমেজ পাথ অনুযায়ী অ্যাডজাস্ট করে নিন)
import gal1 from "../../assets/gal1.png"; // Receiving Award @ ISRT, DU
import gal2 from "../../assets/gal2.png"; // Presenting Research @ BAS
import gal3 from "../../assets/gal3.png"; // 7th International Conference on Integrated Sciences
import gal4 from "../../assets/gal4.png"; // Rajshahi University Int. Conference
import gal5 from "../../assets/gal5.png"; // During Presentation at Conference
import gal6 from "../../assets/gal6.png"; // With BUET Professor Kaykobad Sir
import gal7 from "../../assets/gal7.png"; // National University Workshop
import gal8 from "../../assets/gal8.png"; // AT SABRE Workshop
import gal9 from "../../assets/gal9.png"; // With Team mate
import gal10 from "../../assets/gal10.png"; // During Lecture
import gal11 from "../../assets/gal11.png"; // Movie TIME

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Extracted Data from Gallery Images
  const galleryItems = [
    {
      id: 1,
      title: "Receiving the Award for Poster Presentation @ ISRT, DU Conference",
      location: "ISRT, University of Dhaka",
      date: "December 2025",
      category: "Conferences",
      image: gal1,
      featured: true,
    },
    {
      id: 2,
      title: "Presenting my Research work @ Bangladesh Academy of Sciences",
      location: "Bangladesh Academy of Sciences (BAS)",
      date: "April 2026",
      category: "Conferences",
      image: gal2,
      featured: true,
    },
    {
      id: 3,
      title: "7th International Conference on Integrated Sciences",
      location: "Eastern University, Dhaka",
      date: "October 2025",
      category: "Conferences",
      image: gal3,
    },
    {
      id: 4,
      title: "Rajshahi University International Conference",
      location: "University of Rajshahi",
      date: "2025",
      category: "Conferences",
      image: gal4,
    },
    {
      id: 5,
      title: "During the Presentation at the Conference",
      location: "Academic Conference Venue",
      date: "2025",
      category: "Conferences",
      image: gal5,
    },
    {
      id: 6,
      title: "With BUET Professor Kaykobad Sir",
      location: "BUET Campus",
      date: "2025",
      category: "Moments",
      image: gal6,
    },
    {
      id: 7,
      title: "National University Workshop",
      location: "National University",
      date: "2024",
      category: "Workshops",
      image: gal7,
    },
    {
      id: 8,
      title: "AT SABRE Workshop",
      location: "Sabre Travel Network",
      date: "April 2025",
      category: "Workshops",
      image: gal8,
    },
    {
      id: 9,
      title: "With Team mate",
      location: "Sabre Office",
      date: "2025",
      category: "Moments",
      image: gal9,
    },
    {
      id: 10,
      title: "During Lecture",
      location: "University Classroom",
      date: "2024",
      category: "Workshops",
      image: gal10,
    },
    {
      id: 11,
      title: "Movie TIME",
      location: "Star Cineplex",
      date: "2024",
      category: "Moments",
      image: gal11,
    },
  ];

  const categories = ["All", "Conferences", "Workshops", "Moments"];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

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
            <span>Memories & Key Milestones</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-300 tracking-tight leading-tight mb-4 drop-shadow-sm">
            Event Gallery
          </h1>

          <p className="text-sm sm:text-base text-gray-100 max-w-2xl font-sans font-light leading-relaxed">
            A visual journey showcasing research presentations, academic awards, workshops, and memorable moments with mentors and colleagues.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-12">

        {/* SECTION HEADER & FILTER BUTTONS */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-emerald-900/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-8 bg-[#163A2D] rounded-full inline-block" />
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#163A2D]">
                Captured Moments
              </h2>
            </div>
          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="flex flex-wrap items-center gap-2 font-sans">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  activeCategory === cat
                    ? "bg-[#163A2D] text-amber-300 shadow-md"
                    : "bg-white text-gray-600 border border-emerald-100 hover:bg-emerald-50 hover:text-emerald-900"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* MASONRY / GRID LAYOUT */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl border border-emerald-100/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Zoom & Hover Overlay */}
                  <div 
                    onClick={() => setSelectedImage(item)}
                    className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-amber-300/30">
                        <Maximize2 className="w-3.5 h-3.5" /> View Full Image
                      </span>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#163A2D] text-[11px] font-bold rounded-full shadow-sm flex items-center gap-1">
                        <Tag className="w-3 h-3 text-amber-600" />
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Caption & Metadata */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#163A2D] font-['Playfair_Display',serif] leading-snug group-hover:text-emerald-800 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs text-gray-500 border-t border-gray-50">
                  <span className="flex items-center gap-1 text-gray-600">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate max-w-[180px]">{item.location}</span>
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    {item.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* LIGHTBOX MODAL FOR FULL VIEW */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden p-2 shadow-2xl font-sans"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="max-h-[75vh] overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>

              {/* Modal Image Details */}
              <div className="p-4 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-1">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#163A2D] font-['Playfair_Display',serif]">
                    {selectedImage.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-600 shrink-0">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    {selectedImage.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    {selectedImage.date}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;