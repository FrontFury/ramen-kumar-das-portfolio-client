import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  FolderGit2, 
  Users, 
  Sparkles, 
  Loader2, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  UserCheck, 
  IdCard, 
  Calendar 
} from "lucide-react";

const ProjectSupervision = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3000/project-supervision");
        const data = Array.isArray(response.data) ? response.data : response.data.data || [];
        setProjects(data);
      } catch (err) {
        console.error("Error fetching project supervision data:", err);
        setError("Failed to load project supervision details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Status Filter
  const ongoingProjects = projects.filter(
    (p) => p.status?.toLowerCase() === "ongoing"
  );
  const completedProjects = projects.filter(
    (p) => p.status?.toLowerCase() === "completed"
  );

  if (loading) {
    return (
      <div className="w-full py-12 bg-[#F4F9F5]/60 flex flex-col items-center justify-center gap-3 font-sans">
        <Loader2 className="w-10 h-10 animate-spin text-[#163A2D]" />
        <p className="text-sm font-semibold text-[#163A2D] animate-pulse">
          Loading Supervised Projects...
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
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-emerald-900/10 pb-4 gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-7 bg-[#163A2D] rounded-full inline-block" />
            <h1 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#163A2D]">
              Project Supervision
            </h1>
          </div>
          <span className="text-xs tracking-widest text-emerald-800 uppercase font-semibold flex items-center gap-1.5 bg-emerald-100/60 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Academic Guidance & Mentorship
          </span>
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16 bg-white/80 rounded-3xl border border-dashed border-emerald-200 space-y-3">
            <FolderGit2 className="w-12 h-12 text-emerald-600 mx-auto opacity-40" />
            <h3 className="text-base font-bold text-gray-700">No Projects Found</h3>
            <p className="text-xs text-gray-500">Check back later for updated project supervision records.</p>
          </div>
        )}

        {projects.length > 0 && (
          <div className="space-y-12">
            
            {/* ONGOING PROJECTS SECTION */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-emerald-900/10 pb-3">
                <h2 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#163A2D] flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-500" />
                  Ongoing Supervision
                </h2>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                  {ongoingProjects.length} Active
                </span>
              </div>

              {ongoingProjects.length === 0 ? (
                <p className="text-xs text-gray-500 italic bg-white/40 p-4 rounded-xl border border-dashed border-gray-200">
                  No projects currently in progress.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ongoingProjects.map((project, idx) => (
                    <ProjectCard key={project._id || idx} project={project} isOngoing={true} />
                  ))}
                </div>
              )}
            </div>

            {/* COMPLETED PROJECTS SECTION */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-emerald-900/10 pb-3">
                <h2 className="text-xl sm:text-2xl font-bold font-['Playfair_Display',serif] text-[#163A2D] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Completed Supervision
                </h2>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  {completedProjects.length} Finished
                </span>
              </div>

              {completedProjects.length === 0 ? (
                <p className="text-xs text-gray-500 italic bg-white/40 p-4 rounded-xl border border-dashed border-gray-200">
                  No completed projects found.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {completedProjects.map((project, idx) => (
                    <ProjectCard key={project._id || idx} project={project} isOngoing={false} />
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

// SUB-COMPONENT: PROJECT CARD
const ProjectCard = ({ project, isOngoing }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl border border-emerald-100/80 shadow-2xs hover:shadow-md hover:border-emerald-200 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden">
      
      {/* Top Border Glow Highlight */}
      <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent ${isOngoing ? 'via-amber-400' : 'via-emerald-400'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="space-y-4">
        {/* Status Badge & Header */}
        <div className="flex items-center justify-between gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
            isOngoing 
              ? "bg-amber-100/80 text-amber-900" 
              : "bg-emerald-100/80 text-emerald-900"
          }`}>
            <FolderGit2 className="w-3.5 h-3.5" />
            {project.status || (isOngoing ? "Ongoing" : "Completed")}
          </span>

          {project.createdAt && (
            <span className="text-[11px] text-gray-400 font-mono">
              {new Date(project.createdAt).toLocaleDateString()}
            </span>
          )}
        </div>

        {/* Project Preview Image (If available) */}
        {project.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100 border border-emerald-50">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold font-['Playfair_Display',serif] text-[#163A2D] leading-snug">
          {project.title}
        </h3>

        {/* Supervised Students Section */}
        {project.students && project.students.length > 0 && (
          <div className="mt-4 bg-emerald-50/40 border border-emerald-100/80 p-4 rounded-xl space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#163A2D] flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              Supervised Students
            </h4>

            <div className="space-y-2">
              {project.students.map((student, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white p-2.5 rounded-lg border border-emerald-100/60 text-xs text-gray-700 space-y-1 shadow-2xs group-hover:border-emerald-200 transition-colors"
                >
                  <div className="flex items-center justify-between font-bold text-[#163A2D]">
                    <span className="flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                      {student.name}
                    </span>
                    {student.session && (
                      <span className="text-[11px] font-normal text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-emerald-600/70" />
                        {student.session}
                      </span>
                    )}
                  </div>

                  {student.regNo && (
                    <p className="text-[11px] text-gray-500 pl-5 flex items-center gap-1 font-mono">
                      <IdCard className="w-3 h-3 text-gray-400" />
                      Reg: {student.regNo}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default ProjectSupervision;