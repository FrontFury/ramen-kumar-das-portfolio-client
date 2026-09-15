import React, { useState } from "react";
import { 
  Code, 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  ShieldCheck, 
  Terminal, 
  Wrench, 
  BookMarked, 
  FileCode, 
  FileSpreadsheet, 
  Globe, 
  Database,
  Sparkles
} from "lucide-react";
import bgBanner from "../../assets/HomeBG.png"; // Adjust image path as needed

// Categories & Data mapping
const categories = [
  { id: "all", label: "All Arsenal" },
  { id: "ml-ai", label: "ML & AI / Vision" },
  { id: "nlp-sec", label: "NLP & Security" },
  { id: "prog-web", label: "Languages & Web" },
  { id: "research", label: "Research & Tools" },
  { id: "db-office", label: "DB & Office" },
];

const toolsList = [
  // ML & AI / Vision
  { name: "Python", category: "prog-web", icon: Code, desc: "Advanced" },
  { name: "Scikit-Learn", category: "ml-ai", icon: Brain, desc: "Machine Learning" },
  { name: "Numpy", category: "ml-ai", icon: Brain, desc: "Data Processing" },
  { name: "Pandas", category: "ml-ai", icon: Brain, desc: "Data Analysis" },
  { name: "PyTorch", category: "ml-ai", icon: Cpu, desc: "Deep Learning" },
  { name: "TensorFlow", category: "ml-ai", icon: Cpu, desc: "Deep Learning" },
  { name: "Keras", category: "ml-ai", icon: Cpu, desc: "Deep Learning" },
  { name: "CNN & RNN", category: "ml-ai", icon: Cpu, desc: "Architecture" },
  { name: "LSTM", category: "ml-ai", icon: Cpu, desc: "Sequence Model" },
  { name: "OpenCV", category: "ml-ai", icon: Eye, desc: "Computer Vision" },
  { name: "TorchVision", category: "ml-ai", icon: Eye, desc: "Vision Toolkit" },

  // NLP & Security
  { name: "NLTK", category: "nlp-sec", icon: MessageSquare, desc: "Natural Language" },
  { name: "SpaCy", category: "nlp-sec", icon: MessageSquare, desc: "Industrial NLP" },
  { name: "HuggingFace", category: "nlp-sec", icon: MessageSquare, desc: "Transformers" },
  { name: "BERT", category: "nlp-sec", icon: MessageSquare, desc: "Language Model" },
  { name: "AES & RSA", category: "nlp-sec", icon: ShieldCheck, desc: "Cryptography" },
  { name: "PyCryptodome", category: "nlp-sec", icon: ShieldCheck, desc: "Security Lib" },

  // Languages & Web
  { name: "C / C++", category: "prog-web", icon: FileCode, desc: "Core Programming" },
  { name: "Java", category: "prog-web", icon: FileCode, desc: "OOP Language" },
  { name: "HTML & CSS", category: "prog-web", icon: Globe, desc: "Web Basics" },
  { name: "Bootstrap", category: "prog-web", icon: Globe, desc: "UI Framework" },

  // Research & Tools
  { name: "R Language", category: "research", icon: Wrench, desc: "Statistics" },
  { name: "SPSS", category: "research", icon: Wrench, desc: "Data Analytics" },
  { name: "LaTeX", category: "research", icon: Wrench, desc: "Overleaf Writing" },
  { name: "Power BI", category: "research", icon: Wrench, desc: "MS Dashboard" },
  { name: "VS-Code / Colab", category: "research", icon: Terminal, desc: "Development" },
  { name: "Jupyter / PyCharm", category: "research", icon: Terminal, desc: "IDE Suite" },
  { name: "Mendeley / Zotero", category: "research", icon: BookMarked, desc: "Referencing" },

  // DB & Office
  { name: "MySQL", category: "db-office", icon: Database, desc: "Relational DB" },
  { name: "Oracle DB", category: "db-office", icon: Database, desc: "Enterprise DB" },
  { name: "MS Word & Excel", category: "db-office", icon: FileSpreadsheet, desc: "Office Suite" },
  { name: "PowerPoint & Access", category: "db-office", icon: FileSpreadsheet, desc: "Presentation" },
];

const Tools = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTools = activeTab === "all" 
    ? toolsList 
    : toolsList.filter((item) => item.category === activeTab);

  return (
    <div className="w-full bg-[#07130E] text-white rounded-xl lg:rounded-3xl overflow-hidden font-['Playfair_Display',serif]">
      {/* ==========================================
          1. HERO BANNER (SAME AS ORIGINAL)
      ========================================== */}
      <section
        className="relative min-h-[360px] md:min-h-[420px] flex flex-col justify-center items-center text-center px-4 py-16 bg-cover bg-center bg-no-repeat rounded-t-xl lg:rounded-t-3xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url(${bgBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-[#0C2219]/85 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm tracking-widest text-amber-300 uppercase mb-6 font-sans">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Technical Ecosystem & Software Stack</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-400 tracking-tight leading-tight mb-4 drop-shadow-md">
            Research Tool / Software / Programming Languages
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-2xl font-sans font-light leading-relaxed">
            A comprehensive repository of programming languages, deep learning frameworks, cybersecurity tools, research utilities, and spatial/statistical computing software.
          </p>
        </div>
      </section>

      {/* ==========================================
          2. CORE TECHNOLOGIES & TABS SECTION
      ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Tag & Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-widest font-sans font-semibold uppercase mb-4">
            <span>• MY ARSENAL •</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Core <span className="text-amber-400">Technologies</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl font-sans">
            Technologies and specialized research tools utilized to transform experimental hypotheses into scalable and production-ready applications.
          </p>
        </div>

        {/* Category Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16 font-sans">
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-950 font-bold shadow-lg shadow-amber-500/25 scale-105"
                    : "bg-[#0C2219]/80 border border-emerald-800/40 text-gray-300 hover:text-white hover:bg-emerald-900/40"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Circular Tech Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 w-full place-items-center mb-20">
          {filteredTools.map((tool, idx) => {
            const IconComp = tool.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2"
              >
                {/* Circular Glowing Icon Box */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0C2219] border border-emerald-800/60 flex items-center justify-center mb-3 shadow-xl group-hover:border-amber-400 group-hover:shadow-amber-500/20 group-hover:shadow-2xl transition-all duration-300">
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 rounded-full bg-amber-400/0 group-hover:bg-amber-400/10 transition-all duration-300" />

                  <IconComp className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-300 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* Name & Short Description */}
                <h3 className="text-sm font-bold text-gray-100 group-hover:text-amber-300 font-sans transition-colors">
                  {tool.name}
                </h3>
                <span className="text-[11px] text-gray-400 font-sans font-light mt-0.5">
                  {tool.desc}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer Tagline */}
        <div className="w-full border-t border-emerald-900/40 pt-8 text-center">
          <p className="text-xs sm:text-sm tracking-widest text-emerald-400/70 uppercase font-sans font-semibold">
            ALWAYS LEARNING • ALWAYS BUILDING • ALWAYS IMPROVING
          </p>
        </div>

      </section>
    </div>
  );
};

export default Tools;