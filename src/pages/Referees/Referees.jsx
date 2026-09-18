import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { 
  UserCheck, Mail, Phone, Building2, 
  GraduationCap, Copy, Check, Sparkles, ExternalLink,
  Loader2, AlertCircle
} from "lucide-react";

// Banner Background Image
import bgBanner from "../../assets/RefereesBanner.jpg"; 

const Referees = () => {
  const axiosSecure = useAxiosSecure();
  const [copiedText, setCopiedText] = useState("");

  // Fetch API Data using TanStack Query
  const { 
    data: refereesData = [], 
    isLoading, 
    isError, 
    error 
  } = useQuery({
    queryKey: ["referees"],
    queryFn: async () => {
      const response = await axiosSecure.get("/referees");
      return Array.isArray(response.data)
        ? response.data
        : response.data.data || [];
    },
  });

  // Helper function to handle Copying to Clipboard
  const handleCopy = (text, key) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(""), 2000);
  };

  if (isLoading) {
    return (
      <div className="w-full py-20 bg-[#F8FAFC] flex flex-col items-center justify-center gap-3 font-sans">
        <Loader2 className="w-10 h-10 animate-spin text-[#163A2D]" />
        <p className="text-sm font-semibold text-[#163A2D] animate-pulse">
          Loading Academic Referees...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full bg-[#F8FAFC] flex items-center justify-center p-8 font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 max-w-md text-center space-y-3">
          <AlertCircle className="w-12 h-12 text-rose-500 mx-auto opacity-80" />
          <h3 className="text-lg font-bold text-gray-800">Connection Error</h3>
          <p className="text-xs text-gray-500">
            {error?.message || "Failed to load referee details. Please try again later."}
          </p>
        </div>
      </div>
    );
  }

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
        <div className="absolute inset-0 bg-[#0C2219] opacity-50 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-md text-xs sm:text-sm tracking-widest text-amber-300 uppercase mb-6 font-sans shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Academic Recommendation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-300 tracking-tight leading-tight mb-4 drop-shadow-sm">
            Academic Referees
          </h1>

          <p className="text-sm sm:text-base text-gray-100 max-w-2xl font-sans font-light leading-relaxed">
            Distinguished professors and mentors who can vouch for my academic performance, research abilities, and professional integrity.
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
              Reference Contacts
            </h2>
          </div>
          <span className="text-xs tracking-widest text-emerald-800 uppercase font-sans font-semibold mt-3 sm:mt-0 flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-amber-500" />
            Endorsements
          </span>
        </div>

        {/* Empty State */}
        {refereesData.length === 0 && (
          <div className="text-center py-16 bg-white/80 rounded-3xl border border-dashed border-emerald-200 space-y-3 font-sans">
            <GraduationCap className="w-12 h-12 text-emerald-600 mx-auto opacity-40" />
            <h3 className="text-base font-bold text-gray-700">No Referee Details Found</h3>
            <p className="text-xs text-gray-500">Contact information will be updated soon.</p>
          </div>
        )}

        {/* REFEREES GRID */}
        {refereesData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
            <AnimatePresence>
              {refereesData.map((ref, idx) => {
                const itemKey = ref._id || ref.id || idx;
                
                return (
                  <motion.div
                    key={itemKey}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group relative bg-white rounded-2xl border border-emerald-100/80 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden"
                  >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-4">
                      {/* Header Tag */}
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-100/80 shadow-2xs">
                          {ref.tag || "Academic Reference"}
                        </span>
                        <div className="p-2 rounded-full bg-amber-50 text-amber-600 group-hover:bg-amber-100 transition-colors">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Name & Title */}
                      <div>
                        <h3 className="text-xl font-bold text-[#163A2D] font-['Playfair_Display',serif] leading-tight mb-1 group-hover:text-emerald-900 transition-colors">
                          {ref.name}
                        </h3>
                        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                          {ref.designation}
                        </p>
                      </div>

                      {/* Academic Department & Institution */}
                      <div className="space-y-2 pt-3 border-t border-gray-100 text-xs text-gray-600">
                        {ref.department && (
                          <p className="font-medium text-gray-700 leading-relaxed">
                            {ref.department}
                          </p>
                        )}
                        {ref.institution && (
                          <p className="flex items-start gap-1.5 text-emerald-900 font-semibold leading-relaxed">
                            <Building2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                            <span>{ref.institution}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2.5 pt-4 border-t border-gray-100 text-xs">
                      
                      {/* Phone */}
                      {ref.phone && (
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-gray-100 group-hover:bg-emerald-50/40 transition-colors">
                          <div className="flex items-center gap-2 text-gray-700 truncate">
                            <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <a href={`tel:${ref.phone}`} className="hover:text-emerald-700 font-medium">
                              {ref.phone}
                            </a>
                          </div>
                          <button
                            onClick={() => handleCopy(ref.phone, `phone-${itemKey}`)}
                            className="p-1.5 text-gray-400 hover:text-emerald-700 transition-colors"
                            title="Copy Phone"
                          >
                            {copiedText === `phone-${itemKey}` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}

                      {/* Primary Email */}
                      {ref.email && (
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-gray-100 group-hover:bg-emerald-50/40 transition-colors">
                          <div className="flex items-center gap-2 text-gray-700 truncate">
                            <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <a
                              href={`mailto:${ref.email}`}
                              className="hover:text-emerald-700 font-medium truncate"
                            >
                              {ref.email}
                            </a>
                          </div>
                          <button
                            onClick={() => handleCopy(ref.email, `email-${itemKey}`)}
                            className="p-1.5 text-gray-400 hover:text-emerald-700 transition-colors"
                            title="Copy Email"
                          >
                            {copiedText === `email-${itemKey}` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}

                      {/* Secondary Email (If Available) */}
                      {ref.secondaryEmail && (
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-gray-100 group-hover:bg-emerald-50/40 transition-colors">
                          <div className="flex items-center gap-2 text-gray-700 truncate">
                            <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <a
                              href={`mailto:${ref.secondaryEmail}`}
                              className="hover:text-emerald-700 font-medium truncate text-gray-600"
                            >
                              {ref.secondaryEmail}
                            </a>
                          </div>
                          <button
                            onClick={() => handleCopy(ref.secondaryEmail, `sec-email-${itemKey}`)}
                            className="p-1.5 text-gray-400 hover:text-emerald-700 transition-colors"
                            title="Copy Secondary Email"
                          >
                            {copiedText === `sec-email-${itemKey}` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}

                      {/* Send Direct Email Button */}
                      {ref.email && (
                        <a
                          href={`mailto:${ref.email}`}
                          className="w-full mt-3 py-2.5 px-4 rounded-xl bg-[#163A2D] text-amber-300 text-xs font-bold hover:bg-[#0C2219] shadow-2xs hover:shadow-md transition-all flex items-center justify-center gap-2"
                        >
                          <span>Send Direct Email</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

      </div>

    </div>
  );
};

export default Referees;