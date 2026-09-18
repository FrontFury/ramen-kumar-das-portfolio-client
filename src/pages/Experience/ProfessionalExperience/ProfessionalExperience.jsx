import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  ExternalLink, 
  Loader2, 
  AlertCircle,
  Tag
} from "lucide-react";

const ProfessionalExperience = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch API Data for Experiences using TanStack Query
  const { 
    data: experiences = [], 
    isLoading, 
    isError, 
    error 
  } = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      const response = await axiosSecure.get("/experiences");
      return Array.isArray(response.data) 
        ? response.data 
        : response.data.data || [];
    },
  });

  const formatPeriod = (startDate, endDate, currentlyWorking) => {
    if (!startDate && !endDate) return "N/A";
    const start = startDate || "";
    if (currentlyWorking || endDate?.toLowerCase() === "till" || !endDate) {
      return `${start} — Present`;
    }
    return `${start} — ${endDate}`;
  };

  const parseTopics = (topicsOrAddress) => {
    if (!topicsOrAddress) return [];
    const cleaned = topicsOrAddress.replace(/^Topics:\s*/i, "");
    return cleaned.split(",").map((item) => item.trim()).filter(Boolean);
  };

  if (isLoading) {
    return (
      <div className="w-full py-12 bg-[#F4F9F5]/60 flex flex-col items-center justify-center gap-3 font-sans">
        <Loader2 className="w-10 h-10 animate-spin text-[#163A2D]" />
        <p className="text-sm font-semibold text-[#163A2D] animate-pulse">
          Loading Experiences...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full bg-[#F4F9F5]/60 flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 max-w-md text-center space-y-3">
          <AlertCircle className="w-12 h-12 text-rose-500 mx-auto opacity-80" />
          <h3 className="text-lg font-bold text-gray-800">Connection Error</h3>
          <p className="text-xs text-gray-500">
            {error?.message || "Failed to load experience data. Please try again later."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-[#F4F9F5]/60 pt-6 pb-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-emerald-900/10 pb-4 gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-7 bg-[#163A2D] rounded-full inline-block" />
            <h1 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#163A2D]">
              Professional Experience
            </h1>
          </div>
          <span className="text-xs tracking-widest text-emerald-800 uppercase font-semibold flex items-center gap-1.5 bg-emerald-100/60 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Academic & Research Appointments
          </span>
        </div>

        {/* Empty State */}
        {experiences.length === 0 && (
          <div className="text-center py-16 bg-white/80 rounded-3xl border border-dashed border-emerald-200 space-y-3">
            <Briefcase className="w-12 h-12 text-emerald-600 mx-auto opacity-40" />
            <h3 className="text-base font-bold text-gray-700">No Experience Found</h3>
            <p className="text-xs text-gray-500">Check back later for updated professional history.</p>
          </div>
        )}

        {/* EXPERIENCE LIST */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => {
            const topicsList = parseTopics(exp.topicsOrAddress);
            const isCurrent = exp.currentlyWorking || exp.endDate?.toLowerCase() === "till";

            return (
              <div
                key={exp._id || exp.id || idx}
                className="group relative bg-white/80 backdrop-blur-md rounded-2xl border border-emerald-100/80 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-300 p-6 sm:p-8"
              >
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        {isCurrent ? "Current Role" : "Previous Role"}
                      </span>
                      
                      {exp.institutionDetails && exp.institutionDetails !== exp.organization && (
                        <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-emerald-600" />
                          {exp.institutionDetails}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#163A2D]">
                      {exp.designation || "Role / Position"}
                    </h2>

                    <p className="text-sm font-semibold text-emerald-800/90 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-emerald-700" />
                      {exp.organization || "Organization"}
                    </p>
                  </div>

                  <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 self-start lg:self-auto">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-100 text-xs font-medium text-emerald-900 font-mono shadow-2xs">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                      {formatPeriod(exp.startDate, exp.endDate, exp.currentlyWorking)}
                    </span>

                    {exp.websiteLink && (
                      <a
                        href={exp.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 hover:underline transition-colors mt-1"
                      >
                        Visit Platform
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {topicsList.length > 0 && (
                  <div className="mt-5 bg-emerald-50/40 border border-emerald-100/80 p-4 rounded-xl">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#163A2D] mb-3 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-emerald-600" />
                      Key Topics & Focus Areas
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {topicsList.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-emerald-100 text-xs font-medium text-gray-700 shadow-2xs group-hover:border-emerald-200 transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProfessionalExperience;