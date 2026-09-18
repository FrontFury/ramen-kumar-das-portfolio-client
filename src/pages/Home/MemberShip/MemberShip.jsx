import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosSecure"; 
import {
  Award,
  Building2,
  Hash,
  ExternalLink,
  Loader2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  X,
} from "lucide-react";

const MemberShip = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch memberships (GET operation)
  const {
    data: memberships = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["memberships"],
    queryFn: async () => {
      const res = await axiosPublic.get("/memberships");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] p-12">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-emerald-200 border-t-[#163A2D] animate-spin" />
          <Loader2 className="w-5 h-5 text-[#163A2D] absolute animate-pulse" />
        </div>
        <p className="text-sm font-sans text-emerald-900/70 font-semibold tracking-wide mt-4">
          Loading professional affiliations...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="p-5 bg-rose-50/90 border-l-4 border-rose-500 text-rose-800 rounded-r-xl shadow-xs text-sm font-sans flex items-center justify-between">
          <span>Failed to load memberships: {error.message}</span>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* SECTION HEADER */}
      <div className="flex flex-col items-start gap-1 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/60 border border-emerald-200/80 text-[11px] font-sans font-bold tracking-widest text-emerald-900 uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Affiliations & Recognitions</span>
        </div>

        <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between border-b border-emerald-900/10 pb-4 mt-2 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#163A2D] tracking-tight">
            Professional Memberships
          </h2>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#163A2D] text-white rounded-lg text-xs font-sans font-medium shadow-sm shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified Records: {memberships.length}</span>
          </div>
        </div>
      </div>

      {/* MEMBERSHIPS LIST */}
      <div className="grid grid-cols-1 gap-6">
        {memberships.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-md p-12 text-center rounded-2xl border border-emerald-100/80 shadow-xs text-gray-500 font-sans">
            <Award className="w-10 h-10 mx-auto text-emerald-800/30 mb-3" />
            <p className="text-sm font-medium">No active memberships found at the moment.</p>
          </div>
        ) : (
          memberships.map((item, index) => (
            <div
              key={item._id || item.id || index}
              className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-emerald-100/80 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 overflow-hidden"
            >
              {/* Top/Left Interactive Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#163A2D] via-emerald-600 to-amber-500 opacity-80 group-hover:h-1.5 transition-all duration-300" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Information Area */}
                <div className="space-y-3.5 font-sans flex-1">
                  {/* Position Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/90 text-amber-900 rounded-full text-xs font-bold tracking-wide shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{item.position}</span>
                  </div>

                  {/* Organization Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#163A2D] font-['Playfair_Display',serif] group-hover:text-emerald-950 transition-colors flex items-start sm:items-center gap-3">
                    <span className="p-2 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-800 shrink-0 mt-1 sm:mt-0">
                      <Building2 className="w-5 h-5" />
                    </span>
                    <span>{item.organization}</span>
                  </h3>

                  {/* Membership Details */}
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 pt-1">
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60 font-mono">
                      <Hash className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span className="text-gray-500">ID / No:</span>
                      <span className="text-slate-900 font-bold tracking-wider">
                        {item.membershipNo}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card / Badge Preview Area */}
                {item.image && (
                  <div className="shrink-0 flex items-center">
                    <div
                      onClick={() => setSelectedImage(item.image)}
                      className="group/img relative cursor-pointer block w-full md:w-36 h-24 bg-slate-100 border border-emerald-200/80 rounded-xl overflow-hidden p-1 shadow-2xs hover:shadow-md transition-all duration-300"
                      title="Click to expand card image"
                    >
                      <img
                        src={item.image}
                        alt={item.position}
                        className="w-full h-full object-cover rounded-lg group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#163A2D]/80 via-[#163A2D]/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg gap-1.5 text-white text-xs font-semibold">
                        <ExternalLink className="w-4 h-4" />
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* IMAGE LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors z-10"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Membership Document Preview"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MemberShip;