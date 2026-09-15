import React from "react";
import { Link } from "react-router-dom";
import { ArrowDown, Play, Award, Compass, Mail, ExternalLink } from "lucide-react";
import homeBgImage from "../../../assets/HomeBG.png"; 
import profileImg from "../../../assets/Profile.png";

const Home = () => {
  return (
    <div className="w-full bg-[#F4F9F5] rounded-xl md:rounded-3xl text-zinc-800 font-['Playfair_Display',serif]">
      {/* ==========================================
          HERO / BANNER SECTION (ADJUSTED HEIGHT)
      ========================================== */}
      <section
        className="relative min-h-[360px] md:min-h-[420px] flex flex-col justify-center items-center text-center px-4 py-16 bg-cover bg-center bg-no-repeat rounded-xl md:rounded-3xl overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${homeBgImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0C2219]/75 backdrop-blur-[2px]" />

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
            "To perform superior-level research in the academic industry. Support human and society with my work. Encourage peace & humanity throughout the earth."
          </p>

          {/* Contact Emails Info */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-300 max-w-2xl mb-4 font-sans">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-emerald-400" /> rkdas.ict@gmail.com
            </span>
            <span>•</span>
            <span>0424313005@iict.buet.ac.bd</span>
          </div>

          {/* Academic & Professional Profiles (Added from image) */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-sans font-bold text-[#FACC15] mb-8 max-w-3xl">
            <a
              href="https://www.researchgate.net/profile/Ramen-Das"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 underline underline-offset-4 decoration-2 transition-colors flex items-center gap-1"
            >
              ResearchGate Profile
            </a>
            <a
              href="https://scholar.google.com/citations?user=HujrpUMAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 underline underline-offset-4 decoration-2 transition-colors flex items-center gap-1"
            >
              Google Scholar
            </a>
            <a
              href="https://medium.com/@rkdas.ict"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 underline underline-offset-4 decoration-2 transition-colors flex items-center gap-1"
            >
              Medium.com
            </a>
            <a
              href="https://github.com/ramenkumardas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 underline underline-offset-4 decoration-2 transition-colors flex items-center gap-1"
            >
              GitHub
            </a>
            <a
              href="https://www.scribd.com/user/997706241/Ramen-Kumar-Das"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 underline underline-offset-4 decoration-2 transition-colors flex items-center gap-1"
            >
              Scribd Portfolio
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-t-2xl overflow-hidden shadow-xl border-t-4 border-x-4 border-white bg-white">
              <img
                src={profileImg} 
                alt="Ramen Kumar Das"
                className="w-full h-[380px] object-cover object-center rounded-t-2xl"
              />
              
              {/* Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#163A2D] text-white p-3.5 rounded-xl flex items-center gap-3 shadow-lg border border-emerald-700/50">
                <div className="p-2 bg-emerald-800/80 rounded-lg text-yellow-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sans uppercase tracking-wider">Researcher</h4>
                  <p className="text-xs text-emerald-200 font-sans">Machine Learning & Information Security</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Information */}
          <div className="lg:col-span-7 flex flex-col gap-6 font-sans text-gray-700 leading-relaxed">
            <p className="text-base sm:text-lg">
              I am Ramen, an enthusiastic learner for Machine Learning and Information Security. My hometown is Munshiganj, Bangladesh. I want to contribute to the world through superior-level research. Academia is my passion, and I love to learn new things.
            </p>

            {/* Quote Block */}
            <blockquote className="my-2 p-6 bg-white border-l-4 border-[#163A2D] rounded-r-xl shadow-sm italic font-serif text-lg text-[#163A2D]">
              "I want to be a smart product for the next-level world."
              <footer className="mt-2 text-xs font-sans not-italic text-gray-500 font-medium uppercase tracking-wider">
                — Ramen Kumar Das
              </footer>
            </blockquote>

            {/* Stats / Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Focus Area</span>
                <span className="text-sm font-semibold text-[#163A2D]">Machine Learning & Security</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Affiliation</span>
                <span className="text-sm font-semibold text-[#163A2D]">IICT, BUET</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Hometown</span>
                <span className="text-sm font-semibold text-[#163A2D]">Munshiganj, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;