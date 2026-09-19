import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Sparkles, Loader2, AlertCircle, Terminal, Search } from "lucide-react";
import bgBanner from "../../assets/ToolsBanner.png"; 

// Categories mapping matched strictly to image sequence
const categories = [
  { id: "all", label: "All Arsenal" },
  { id: "research", label: "Research & Tools" },
  { id: "ml-ai", label: "ML & AI / Vision" },
  { id: "nlp-sec", label: "NLP & Security" },
  { id: "prog-web", label: "Languages & Web" },
  { id: "db-office", label: "DB & Office" },
  { id: "code-editor", label: "Code Editor" },
];

const Tools = () => {
  const axiosSecure = useAxiosSecure();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch tools data from Backend API using TanStack Query
  const {
    data: rawToolsList = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tools"],
    queryFn: async () => {
      const response = await axiosSecure.get("/tools");
      return Array.isArray(response.data)
        ? response.data
        : response.data.data || [];
    },
  });

  // Reversing the fetched tools list so newest/last API items show first
  const toolsList = [...rawToolsList].reverse();

  // Filter tools based on Category & Search query
  const filteredTools = toolsList.filter((tool) => {
    const matchesCategory = activeTab === "all" || tool.category === activeTab;
    const matchesSearch =
      tool.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.desc?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-slate-100 text-slate-900 rounded-xl lg:rounded-3xl overflow-hidden font-['Playfair_Display',serif]">
      {/* ==========================================
          1. HERO BANNER
      ========================================== */}
      <section
        className="relative min-h-[360px] md:min-h-[580px] flex flex-col justify-center items-center text-center px-4 py-16 bg-cover bg-center bg-no-repeat rounded-t-xl lg:rounded-t-3xl overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${bgBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-[#0C2219] opacity-50 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm tracking-widest text-amber-300 uppercase mb-6 font-sans">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Technical Ecosystem & Software Stack</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-400 tracking-tight leading-tight mb-4 drop-shadow-md">
            Research Tool / Software / Programming Languages
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-2xl font-sans font-light leading-relaxed">
            A comprehensive repository of programming languages, deep learning
            frameworks, cybersecurity tools, research utilities, and
            spatial/statistical computing software.
          </p>
        </div>
      </section>

      {/* ==========================================
          2. CORE TECHNOLOGIES & TABS SECTION
      ========================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center bg-slate-50/50 rounded-b-xl lg:rounded-b-3xl">
        {/* Header Tag & Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs tracking-widest font-sans font-bold uppercase mb-4 shadow-sm">
            <span>• MY ARSENAL •</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Core <span className="text-amber-500">Technologies</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl font-sans leading-relaxed">
            Technologies and specialized research tools utilized to transform
            experimental hypotheses into scalable and production-ready
            applications.
          </p>
        </div>

        {/* Search & Filtering Controls */}
        <div className="w-full max-w-4xl flex flex-col items-center gap-6 mb-14 font-sans">
          {/* Glassmorphic Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search tools or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/70 backdrop-blur-md border border-white/80 rounded-full py-2.5 pl-11 pr-10 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-sm focus:shadow-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-800 bg-slate-200/70 hover:bg-slate-200 px-2.5 py-0.5 rounded-full transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tab Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105"
                      : "bg-white/60 backdrop-blur-md border border-white/80 text-slate-600 hover:text-slate-900 hover:bg-white/90"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center gap-3 py-16 font-sans">
            <Loader2 className="w-10 h-10 animate-spin text-amber-500" />
            <p className="text-sm text-slate-600 font-medium animate-pulse">
              Loading Technical Arsenal...
            </p>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="bg-red-50/80 backdrop-blur-md p-6 rounded-2xl border border-red-200 max-w-md text-center space-y-2 font-sans my-8 shadow-sm">
            <AlertCircle className="w-10 h-10 text-rose-500 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">Fetch Failed</h3>
            <p className="text-xs text-slate-600">
              {error?.message || "Failed to load tools data. Please try again later."}
            </p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !isError && filteredTools.length === 0 && (
          <div className="text-center py-16 bg-white/60 backdrop-blur-md rounded-3xl border border-dashed border-slate-300 w-full max-w-md my-8 space-y-2 font-sans shadow-inner">
            <Terminal className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-700">
              No Tools Found
            </h3>
            <p className="text-xs text-slate-500">
              Try selecting another category or searching for another term.
            </p>
          </div>
        )}

        {/* Glassmorphic Tech Cards Grid */}
        {!isLoading && !isError && filteredTools.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 w-full place-items-center mb-20">
            {filteredTools.map((tool) => (
              <div
                key={tool._id || tool.name}
                className="group w-full flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 p-5 rounded-3xl bg-white/60 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-400/60 hover:bg-white/90"
              >
                {/* Circular Image Container Inside Glass Card */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-100/80 border border-slate-200/80 flex items-center justify-center p-3.5 mb-3 shadow-inner group-hover:scale-105 transition-all duration-300">
                  {tool.imageUrl ? (
                    <img
                      src={tool.imageUrl}
                      alt={tool.name}
                      className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <Terminal className="w-8 h-8 text-slate-600 group-hover:text-amber-500 transition-colors" />
                  )}
                </div>

                {/* Tool Name & Description */}
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-600 font-sans transition-colors line-clamp-1">
                  {tool.name}
                </h3>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-sans font-normal mt-0.5 line-clamp-1">
                  {tool.desc}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Footer Tagline */}
        <div className="w-full border-t border-slate-200/80 pt-8 text-center">
          <p className="text-xs sm:text-sm tracking-widest text-slate-500 uppercase font-sans font-bold">
            ALWAYS LEARNING • ALWAYS BUILDING • ALWAYS IMPROVING
          </p>
        </div>
      </section>
    </div>
  );
};

export default Tools;