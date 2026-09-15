import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { 
  Calendar, 
  MapPin, 
  X, 
  Maximize2, 
  Tag, 
  Layers,
  Loader2,
  AlertCircle,
  Image as ImageIcon
} from "lucide-react";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetch API Data
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get("http://localhost:3000/gallery");
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.data || [];
        setGalleryItems(data);
      } catch (err) {
        console.error("Error fetching gallery data:", err);
        setError("Failed to load gallery items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Extract Unique Categories Dynamically
  const dynamicCategories = [
    "All",
    ...Array.from(new Set(galleryItems.map((item) => item.category).filter(Boolean))),
  ];

  // Filter Items Based on Active Category
  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  if (loading) {
    return (
      <div className="w-full py-12 bg-[#F4F9F5]/60 flex flex-col items-center justify-center gap-3 font-sans">
        <Loader2 className="w-10 h-10 animate-spin text-[#163A2D]" />
        <p className="text-sm font-semibold text-[#163A2D] animate-pulse">
          Loading Event Gallery...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-[#F4F9F5]/60 flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 max-w-md text-center space-y-3">
          <AlertCircle className="w-12 h-12 text-rose-500 mx-auto opacity-80" />
          <h3 className="text-lg font-bold text-gray-800">Connection Error</h3>
          <p className="text-xs text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-[#F4F9F5]/60 pt-6 pb-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* SECTION HEADER & FILTER TABS */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-emerald-900/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-7 bg-[#163A2D] rounded-full inline-block" />
            <h1 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#163A2D]">
              Event Gallery
            </h1>
          </div>

          {/* CATEGORY FILTER BUTTONS */}
          {dynamicCategories.length > 1 && (
            <div className="flex flex-wrap items-center gap-2">
              {dynamicCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? "bg-[#163A2D] text-amber-300 shadow-xs"
                      : "bg-white/80 text-gray-600 border border-emerald-100 hover:bg-emerald-50 hover:text-emerald-900"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Empty State */}
        {galleryItems.length === 0 && (
          <div className="text-center py-16 bg-white/80 rounded-3xl border border-dashed border-emerald-200 space-y-3">
            <ImageIcon className="w-12 h-12 text-emerald-600 mx-auto opacity-40" />
            <h3 className="text-base font-bold text-gray-700">No Gallery Items Found</h3>
            <p className="text-xs text-gray-500">Check back later for updated memories and photos.</p>
          </div>
        )}

        {/* GALLERY GRID LAYOUT */}
        {filteredItems.length > 0 && (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item._id || idx}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group relative bg-white/80 backdrop-blur-md rounded-2xl border border-emerald-100/80 shadow-2xs hover:shadow-md hover:border-emerald-200 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  <div>
                    {/* Image Container */}
                    <div 
                      onClick={() => setSelectedImage(item)}
                      className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
                    >
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <ImageIcon className="w-8 h-8 opacity-40" />
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#163A2D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-[1px]">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-black/40 px-3 py-1.5 rounded-lg border border-amber-300/30">
                          <Maximize2 className="w-3.5 h-3.5" /> View Full Image
                        </span>
                      </div>

                      {/* Category Tag Badge */}
                      {item.category && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#163A2D] text-[11px] font-bold rounded-full shadow-xs flex items-center gap-1">
                            <Tag className="w-3 h-3 text-amber-600" />
                            {item.category}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <div className="p-4 space-y-2">
                      <h3 className="text-base font-bold font-['Playfair_Display',serif] text-[#163A2D] leading-snug group-hover:text-emerald-800 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Metadata Footer */}
                  <div className="px-4 pb-4 pt-2 flex items-center justify-between text-xs text-gray-500 border-t border-emerald-50">
                    {item.location ? (
                      <span className="flex items-center gap-1 text-gray-600 truncate max-w-[170px]">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </span>
                    ) : <span />}

                    {item.date && (
                      <span className="flex items-center gap-1 text-emerald-900 font-mono font-medium shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                        {item.date}
                      </span>
                    )}
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>

      {/* COMPACT LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-white rounded-2xl overflow-hidden p-2 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Compact Modal Image */}
              <div className="max-h-[50vh] overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[50vh] object-contain"
                />
              </div>

              {/* Modal Details */}
              <div className="p-3 sm:p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  {selectedImage.category && (
                    <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      {selectedImage.category}
                    </span>
                  )}
                  <h3 className="text-sm sm:text-base font-bold text-[#163A2D] font-['Playfair_Display',serif]">
                    {selectedImage.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-gray-600 shrink-0">
                  {selectedImage.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      {selectedImage.location}
                    </span>
                  )}
                  {selectedImage.date && (
                    <span className="flex items-center gap-1 font-mono font-medium">
                      <Calendar className="w-3 h-3 text-emerald-700" />
                      {selectedImage.date}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;