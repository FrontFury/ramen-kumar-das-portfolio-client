import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Globe,
  FileText,
  ArrowDown,
  Play,
  Award,
  Compass,
  Mail,
} from "lucide-react";
import homeBgImage from "../../../assets/HomeBG.png";
import { FaGithub, FaOrcid } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaYoutube, FaMicrosoft } from "react-icons/fa";
import profileImg from "../../../assets/Profile01.png";
import MemberShip from "../MemberShip/MemberShip";

const Home = () => {
  return (
    <div className="w-full bg-[#F4F9F5] rounded-t-xl md:rounded-t-3xl text-zinc-800 font-['Playfair_Display',serif]">
      {/* ==========================================
          HERO / BANNER SECTION
      ========================================== */}
      <section
        className="relative min-h-[360px] md:min-h-[580px] flex flex-col justify-center items-center text-center px-4 py-16 bg-cover bg-center bg-no-repeat rounded-t-xl md:rounded-t-3xl overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${homeBgImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0C2219] opacity-50 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm tracking-widest text-emerald-200 uppercase mb-6 font-sans shadow-sm">
            <span>• Academic • Research • Professional Portfolio •</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">
            Ramen Kumar Das
          </h1>

          {/* Quote Subtitle / Objective */}
          <p className="text-base sm:text-xl text-emerald-100/90 italic font-light max-w-2xl mb-6 leading-relaxed">
            "To perform superior-level research in the academic industry.
            Support human and society with my work. Encourage peace & humanity
            throughout the earth."
          </p>

          {/* Contact Emails Info */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-300 max-w-2xl mb-4 font-sans">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-emerald-400" /> rkdas.ict@gmail.com
            </span>
            <span>•</span>
            <span>0424313005@iict.buet.ac.bd</span>
          </div>

          {/* Academic & Professional Profiles */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#FACC15] mb-8 max-w-3xl">
            <a
              href="https://www.researchgate.net/profile/Ramen-Das"
              target="_blank"
              rel="noopener noreferrer"
              title="ResearchGate Profile"
              aria-label="ResearchGate Profile"
              className="relative group p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#FACC15] hover:text-zinc-950 transition-all shadow-sm"
            >
              <BookOpen className="w-5 h-5" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[11px] font-sans font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                ResearchGate Profile
              </span>
            </a>

            <a
              href="https://scholar.google.com/citations?user=HujrpUMAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Scholar"
              aria-label="Google Scholar"
              className="relative group p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#FACC15] hover:text-zinc-950 transition-all shadow-sm"
            >
              <GraduationCap className="w-5 h-5" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[11px] font-sans font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                Google Scholar
              </span>
            </a>

            <a
              href="https://orcid.org/0009-0006-6224-407X"
              target="_blank"
              rel="noopener noreferrer"
              title="ORCID Profile"
              aria-label="ORCID Profile"
              className="relative group p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#FACC15] hover:text-zinc-950 transition-all shadow-sm"
            >
              <FaOrcid className="w-5 h-5" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[11px] font-sans font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                ORCID Profile
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/ramen-kumar-das-60a0b5165/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              className="relative group p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#FACC15] hover:text-zinc-950 transition-all shadow-sm"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[11px] font-sans font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                LinkedIn Profile
              </span>
            </a>

            <a
              href="https://github.com/ramenkumardas"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
              className="relative group p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#FACC15] hover:text-zinc-950 transition-all shadow-sm"
            >
              <FaGithub className="w-5 h-5" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[11px] font-sans font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                GitHub
              </span>
            </a>

            <a
              href="https://learn.microsoft.com/en-us/users/mrramenkumardas-8036/"
              target="_blank"
              rel="noopener noreferrer"
              title="Microsoft Learn"
              aria-label="Microsoft Learn"
              className="relative group p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#FACC15] hover:text-zinc-950 transition-all shadow-sm"
            >
              <FaMicrosoft className="w-5 h-5" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[11px] font-sans font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                Microsoft Learn
              </span>
            </a>

            <a
              href="https://medium.com/@rkdas.ict"
              target="_blank"
              rel="noopener noreferrer"
              title="Medium.com"
              aria-label="Medium.com"
              className="relative group p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#FACC15] hover:text-zinc-950 transition-all shadow-sm"
            >
              <Globe className="w-5 h-5" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[11px] font-sans font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                Medium.com
              </span>
            </a>

            <a
              href="https://www.youtube.com/@RamenKumarDas-c3b"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube Channel"
              aria-label="YouTube Channel"
              className="relative group p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#FACC15] hover:text-zinc-950 transition-all shadow-sm"
            >
              <FaYoutube className="w-5 h-5" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[11px] font-sans font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                YouTube Channel
              </span>
            </a>

            <a
              href="https://www.facebook.com/ramen.das.940/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook Profile"
              aria-label="Facebook Profile"
              className="relative group p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#FACC15] hover:text-zinc-950 transition-all shadow-sm"
            >
              <FaFacebookF className="w-5 h-5" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[11px] font-sans font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                Facebook Profile
              </span>
            </a>

            <a
              href="https://www.scribd.com/user/997706241/Ramen-Kumar-Das"
              target="_blank"
              rel="noopener noreferrer"
              title="Scribd Portfolio"
              aria-label="Scribd Portfolio"
              className="relative group p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#FACC15] hover:text-zinc-950 transition-all shadow-sm"
            >
              <FileText className="w-5 h-5" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[11px] font-sans font-normal px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                Scribd Portfolio
              </span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/awards-experience"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FACC15] hover:bg-yellow-500 text-zinc-950 font-sans font-medium text-xs sm:text-sm rounded-lg transition-all shadow-md hover:shadow-yellow-500/20"
            >
              Explore My Journey
              <ArrowDown className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-medium text-xs sm:text-sm rounded-lg transition-all backdrop-blur-md"
            >
              Contact Me
              <Play className="w-3 h-3 fill-current" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          MEMBERSHIP SECTION (ADDED HERE)
      ========================================== */}
      <MemberShip />

      {/* ==========================================
          ABOUT SECTION
      ========================================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 text-xs font-sans tracking-widest text-emerald-800 uppercase mb-3">
          <Compass className="w-4 h-4 text-emerald-700" />
          <span>01 / BIOGRAPHY & PURPOSE</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#163A2D] mb-12">
          About Ramen Kumar Das
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-t-2xl overflow-hidden shadow-xl border-t-4 border-x-4 border-white bg-white">
              <img
                src={profileImg}
                alt="Ramen Kumar Das"
                className="w-full h-[480px] sm:h-[520px] object-cover object-center rounded-t-2xl"
              />

              {/* Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#163A2D] text-white p-3.5 rounded-xl flex items-center gap-3 shadow-lg border border-emerald-700/50">
                <div className="p-2 bg-emerald-800/80 rounded-lg text-yellow-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sans uppercase tracking-wider">
                    Researcher
                  </h4>
                  <p className="text-xs text-emerald-200 font-sans">
                    Academia Passionate & Research Learner
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Information */}
          <div className="lg:col-span-7 flex flex-col gap-6 font-sans text-gray-700 leading-relaxed">
            <p className="text-base sm:text-lg">
              I am Ramen, an enthusiastic learner for Machine Learning and
              Information Security. My hometown is Munshiganj, Bangladesh. I
              want to contribute to the world through superior-level research.
              Academia is my passion, and I love to learn new things.
            </p>

            {/* Quote Block */}
            <blockquote className="my-2 p-6 bg-white border-l-4 border-[#163A2D] rounded-r-xl shadow-sm italic font-serif text-lg text-[#163A2D]">
              "I want to be a smart product for the next-level world."
              <footer className="mt-2 text-xs font-sans not-italic text-gray-500 font-medium uppercase tracking-wider">
                — Ramen Kumar Das
              </footer>
            </blockquote>

            {/* Stats / Info Grid */}
            <div className="flex flex-col gap-4 pt-4">
              {/* Focus Area - Full Width */}
              <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
                  Focus Area
                </span>
                <span className="text-sm font-semibold text-[#163A2D]">
                  Machine Learning, Deep Learning, Computer Vision, Computer Security, NLP
                </span>
              </div>

              {/* Affiliation & Hometown - 2 Column Side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#163A2D] p-4 rounded-xl border border-emerald-100 shadow-sm">
                  <span className="block text-xs uppercase tracking-wider text-gray-200 mb-1">
                    Affiliation
                  </span>
                  <span className="text-sm font-semibold text-white">
                    IICT, BUET
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                  <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
                    Hometown
                  </span>
                  <span className="text-sm font-semibold text-[#163A2D]">
                    Munshiganj, Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;