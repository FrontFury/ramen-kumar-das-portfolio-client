import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import bgBanner from "../../assets/HomeBG.png"; 

// Simple Icons (si)
import { 
  SiPython, SiScikitlearn, SiNumpy, SiPandas, SiPytorch, 
  SiTensorflow, SiKeras, SiOpencv, SiSpacy, SiHuggingface, 
  SiCplusplus, SiC, SiHtml5, SiCss, SiBootstrap, 
  SiR, SiMysql, SiJupyter, SiPycharm, 
  SiLatex, SiZotero 
} from "react-icons/si";

// Font Awesome & Other Icons
import { 
  FaBrain, FaShieldAlt, 
  FaFileWord, FaFileExcel, FaWrench, FaDatabase, FaChartBar, FaCode
} from "react-icons/fa";

import { BiNetworkChart } from "react-icons/bi";
import { VscCode } from "react-icons/vsc"; 

// Categories Mapping
const categories = [
  { id: "ml-ai", label: "ML & AI / Vision" },
  { id: "nlp-sec", label: "NLP & Security" },
  { id: "prog-web", label: "Languages & Web" },
  { id: "research", label: "Research & Tools" },
  { id: "db-office", label: "DB & Office" },
];

// Tools List
const toolsList = [
  // ML & AI / Vision
  { name: "Python", category: "ml-ai", icon: SiPython, desc: "Advanced" },
  { name: "Scikit-Learn", category: "ml-ai", icon: SiScikitlearn, desc: "Machine Learning" },
  { name: "Numpy", category: "ml-ai", icon: SiNumpy, desc: "Data Processing" },
  { name: "Pandas", category: "ml-ai", icon: SiPandas, desc: "Data Analysis" },
  { name: "PyTorch", category: "ml-ai", icon: SiPytorch, desc: "Deep Learning" },
  { name: "TensorFlow", category: "ml-ai", icon: SiTensorflow, desc: "Deep Learning" },
  { name: "Keras", category: "ml-ai", icon: SiKeras, desc: "Deep Learning" },
  { name: "CNN & RNN", category: "ml-ai", icon: BiNetworkChart, desc: "Architecture" },
  { name: "LSTM", category: "ml-ai", icon: FaBrain, desc: "Sequence Model" },
  { name: "OpenCV", category: "ml-ai", icon: SiOpencv, desc: "Computer Vision" },

  // NLP & Security
  { name: "NLTK", category: "nlp-sec", icon: FaBrain, desc: "Natural Language" },
  { name: "SpaCy", category: "nlp-sec", icon: SiSpacy, desc: "Industrial NLP" },
  { name: "HuggingFace", category: "nlp-sec", icon: SiHuggingface, desc: "Transformers" },
  { name: "BERT", category: "nlp-sec", icon: FaBrain, desc: "Language Model" },
  { name: "AES & RSA", category: "nlp-sec", icon: FaShieldAlt, desc: "Cryptography" },

  // Languages & Web
  { name: "C Language", category: "prog-web", icon: SiC, desc: "Core Programming" },
  { name: "C++", category: "prog-web", icon: SiCplusplus, desc: "OOP Language" },
  { name: "Java", category: "prog-web", icon: FaCode, desc: "Enterprise Tech" },
  { name: "HTML5", category: "prog-web", icon: SiHtml5, desc: "Web Basics" },
  { name: "CSS3", category: "prog-web", icon: SiCss, desc: "Web Design" },
  { name: "Bootstrap", category: "prog-web", icon: SiBootstrap, desc: "UI Framework" },

  // Research & Tools
  { name: "R Language", category: "research", icon: SiR, desc: "Statistics" },
  { name: "SPSS", category: "research", icon: FaWrench, desc: "Data Analytics" },
  { name: "LaTeX", category: "research", icon: SiLatex, desc: "Overleaf Writing" },
  { name: "Power BI", category: "research", icon: FaChartBar, desc: "MS Dashboard" },
  { name: "VS Code", category: "research", icon: VscCode, desc: "IDE" }, 
  { name: "Jupyter", category: "research", icon: SiJupyter, desc: "Notebook" },
  { name: "PyCharm", category: "research", icon: SiPycharm, desc: "Python IDE" },
  { name: "Zotero / Mendeley", category: "research", icon: SiZotero, desc: "Referencing" },

  // DB & Office
  { name: "MySQL", category: "db-office", icon: SiMysql, desc: "Relational DB" },
  { name: "Oracle DB", category: "db-office", icon: FaDatabase, desc: "Enterprise DB" },
  { name: "MS Word", category: "db-office", icon: FaFileWord, desc: "Office Suite" },
  { name: "MS Excel", category: "db-office", icon: FaFileExcel, desc: "Data & Spreadsheet" },
];

const Tools = () => {
  const [activeTab, setActiveTab] = useState("ml-ai");

  const filteredTools = toolsList.filter((item) => item.category === activeTab);

  return (
    <div className="w-full bg-[#F8FAFC] text-gray-800 rounded-xl lg:rounded-3xl overflow-hidden font-['Playfair_Display',serif] shadow-sm border border-emerald-100/60">
      
      {/* 1. HERO BANNER */}
      <section
        className="relative min-h-[360px] md:min-h-[420px] flex flex-col justify-center items-center text-center px-4 py-16 bg-cover bg-center bg-no-repeat rounded-xl lg:rounded-3xl overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${bgBanner})`,
        }}
      >
        {/* Soft Overlay adapted for light contrast */}
        <div className="absolute inset-0 bg-[#0C2219]/75 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-md text-xs sm:text-sm tracking-widest text-amber-300 uppercase mb-6 font-sans shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Technical Ecosystem & Software Stack</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-300 tracking-tight leading-tight mb-4 drop-shadow-sm">
            Research Tool / Software / Programming Languages
          </h1>

          <p className="text-sm sm:text-base text-gray-100 max-w-2xl font-sans font-light leading-relaxed">
            A comprehensive repository of programming languages, deep learning frameworks, cybersecurity tools, research utilities, and spatial/statistical computing software.
          </p>
        </div>
      </section>

      {/* 2. CORE TECHNOLOGIES & TABS SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs tracking-widest font-sans font-semibold uppercase mb-4">
            <span>• MY ARSENAL •</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#163A2D] tracking-tight mb-4">
            Core <span className="text-amber-600">Technologies</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-xl font-sans">
            Technologies and specialized research tools utilized to transform experimental hypotheses into scalable applications.
          </p>
        </div>

        {/* Category Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16 font-sans">
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-700 to-[#163A2D] text-white font-bold shadow-md shadow-emerald-900/15 scale-105"
                    : "bg-white border border-emerald-100 text-gray-600 hover:text-[#163A2D] hover:bg-emerald-50/60 shadow-2xs"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Motion Grid with Animated Icons */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 w-full place-items-center mb-20 min-h-[220px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool, idx) => {
              const IconComp = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ 
                    duration: 0.35, 
                    delay: idx * 0.04,
                    ease: "easeOut"
                  }}
                  className="group flex flex-col items-center justify-center text-center cursor-pointer"
                >
                  {/* Circle Glow Container (Light Glass Card Style) */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-emerald-100 flex items-center justify-center mb-3 shadow-sm group-hover:border-amber-400/80 group-hover:shadow-md group-hover:shadow-amber-500/10 transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-amber-400/0 group-hover:bg-amber-500/5 transition-all duration-300" />

                    <IconComp className="w-8 h-8 sm:w-10 sm:h-10 text-[#163A2D] group-hover:text-amber-600 group-hover:scale-110 transition-all duration-300" />
                  </div>

                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-amber-700 font-sans transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-[11px] text-gray-500 font-sans font-light mt-0.5">
                    {tool.desc}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Border */}
        <div className="w-full border-t border-emerald-900/10 pt-8 text-center">
          <p className="text-xs sm:text-sm tracking-widest text-emerald-800/80 uppercase font-sans font-semibold">
            ALWAYS LEARNING • ALWAYS BUILDING • ALWAYS IMPROVING
          </p>
        </div>

      </section>
    </div>
  );
};

export default Tools;