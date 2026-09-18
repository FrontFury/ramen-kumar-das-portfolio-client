import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { 
  Eye, 
  CheckCircle2, 
  Award, 
  Loader2, 
  Calendar, 
  Building2, 
  X, 
  Maximize2,
  Sparkles,
  ShieldCheck
} from "lucide-react";

const AwardPage = () => {
  const axiosSecure = useAxiosSecure();
  const [activeImage, setActiveImage] = useState(null);

  // Fetch API Data for Awards using TanStack Query
  const { 
    data: awards = [], 
    isLoading, 
    isError, 
    error 
  } = useQuery({
    queryKey: ["awards"],
    queryFn: async () => {
      const response = await axiosSecure.get("/awards");
      return Array.isArray(response.data)
        ? response.data
        : response.data.data || [];
    },
  });

  if (isLoading) {
    return (
      <div className="w-full py-12 bg-[#F4F9F5] flex flex-col items-center justify-center gap-3 font-sans">
        <Loader2 className="w-10 h-10 animate-spin text-[#163A2D]" />
        <p className="text-sm font-semibold text-[#163A2D] animate-pulse">
          Loading Recognized Awards & Honors...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full bg-[#F4F9F5] flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 max-w-md text-center space-y-3">
          <Award className="w-12 h-12 text-rose-500 mx-auto opacity-80" />
          <h3 className="text-lg font-bold text-gray-800">Something went wrong</h3>
          <p className="text-xs text-gray-500">
            {error?.message || "Failed to load awards details. Please check back later."}
          </p>
        </div>
      </div>
    );
  }

  const featuredAward = awards[0];
  const secondaryAwards = awards.slice(1);

  return (
    <div className="w-full bg-[#F4F9F5] pt-12 pb-6 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-emerald-900/10 pb-4 gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-7 bg-[#163A2D] rounded-full inline-block" />
            <h1 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#163A2D]">
              Honors & Awards
            </h1>
          </div>
          <span className="text-xs tracking-widest text-emerald-800 uppercase font-semibold flex items-center gap-1.5 bg-emerald-100/60 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> International Recognition & Competitive Prizes
          </span>
        </div>

        {/* Empty State */}
        {awards.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-emerald-200 space-y-3">
            <Award className="w-12 h-12 text-emerald-600 mx-auto opacity-40" />
            <h3 className="text-base font-bold text-gray-700">No Awards Found</h3>
            <p className="text-xs text-gray-500">Check back later for updated honors and achievements.</p>
          </div>
        )}

        {/* Featured Award Hero Card */}
        {featuredAward && (
          <div className="bg-white rounded-3xl border border-emerald-100/80 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Certificate Image Preview */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                {featuredAward.image ? (
                  <div className="relative group/img overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm w-full h-full min-h-[260px] flex items-center justify-center">
                    <img
                      src={featuredAward.image}
                      alt={featuredAward.title}
                      className="w-full h-full object-contain transform group-hover/img:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div 
                      onClick={() => setActiveImage(featuredAward.image)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
                    >
                      <span className="px-3.5 py-2 bg-white/95 text-gray-900 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg">
                        <Maximize2 className="w-4 h-4 text-emerald-700" /> Preview Certificate
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-emerald-50 to-gray-50 rounded-2xl flex flex-col items-center justify-center gap-2 text-xs text-gray-400 border border-dashed border-gray-200">
                    <Award className="w-10 h-10 text-emerald-600/40" />
                    <span>No Certificate Preview Available</span>
                  </div>
                )}

                <div className="w-full flex items-center justify-between text-[11px] text-gray-500 font-mono mt-3 px-1">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Digitally Verified
                  </span>
                  <span className="text-gray-400">Awarded: {featuredAward.dateReceived}</span>
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200/60 text-xs font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-600" /> Featured Award
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#163A2D] border border-emerald-100 text-xs font-bold">
                      {featuredAward.organization}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Playfair_Display',serif] text-[#163A2D] leading-tight">
                    {featuredAward.title}
                  </h2>

                  <div className="bg-emerald-50/70 border-l-4 border-[#163A2D] p-4 rounded-r-2xl space-y-1">
                    <p className="text-xs font-bold text-[#163A2D] flex items-center gap-1.5 uppercase tracking-wider">
                      <Building2 className="w-3.5 h-3.5 text-emerald-700" /> Organization
                    </p>
                    <p className="text-sm font-semibold text-gray-800">{featuredAward.organization}</p>
                    <p className="text-xs text-emerald-800 font-semibold flex items-center gap-1 pt-1">
                      <Calendar className="w-3.5 h-3.5" /> Date Received: {featuredAward.dateReceived}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                    {featuredAward.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {featuredAward.image && (
                    <button
                      type="button"
                      onClick={() => setActiveImage(featuredAward.image)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0C2219] hover:bg-[#163A2D] text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      <Eye className="w-4 h-4" /> View Full Certificate
                    </button>
                  )}
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-emerald-200 hover:border-emerald-600 text-[#163A2D] text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verified Record
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Secondary Awards Section */}
        {secondaryAwards.length > 0 && (
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-[#163A2D] flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" /> More Honors & Recognition
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryAwards.map((item, idx) => (
                <div 
                  key={item._id || item.id || idx}
                  className="bg-white rounded-2xl border border-emerald-100/80 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#163A2D] text-[11px] font-bold border border-emerald-100">
                        {item.organization}
                      </span>
                      <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-emerald-600" /> {item.dateReceived}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-['Playfair_Display',serif] text-[#163A2D]">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.image && (
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => setActiveImage(item.image)}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" /> View Certificate
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Image Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage}
              alt="Award Certificate Preview"
              className="w-full h-full object-contain rounded-2xl shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardPage;