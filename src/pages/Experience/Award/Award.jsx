import React from "react";
import { Eye, CheckCircle2, FileText, QrCode, ShieldCheck, Award } from "lucide-react";
import certificateImg from "../../../assets/JSR_Award.png"; 

const AwardPage = () => {
  return (
    <div className="w-full bg-[#F4F9F5] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-emerald-900/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-6 bg-[#163A2D] rounded-full inline-block" />
            <h1 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display',serif] text-[#163A2D]">
              Award:
            </h1>
          </div>
          <span className="text-xs tracking-widest text-emerald-800 uppercase font-semibold mt-2 sm:mt-0">
            International Recognition & Competitive Prizes
          </span>
        </div>

        {/* ==========================================
            FEATURED MAIN AWARD CARD
        ========================================== */}
        <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6 lg:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Certificate Mockup Preview */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 shadow-inner">
                <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm">
                  <img
                    src={certificateImg}
                    alt="JSR Award Certificate Preview"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Verification Footer Bar below image */}
              <div className="w-full flex items-center justify-between text-[11px] text-gray-500 font-mono mt-3 px-1">
                <span className="flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5 text-gray-400" />
                  Certificate ID: ICASDS-2025-0518
                </span>
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Digitally Verified
                </span>
              </div>
            </div>

            {/* Right Column: Award Details & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    ICASDS 2025
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                    Journal of Statistical Research (JSR)
                  </span>
                </div>

                {/* Main Award Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Playfair_Display',serif] text-[#163A2D] mb-4 leading-tight">
                  JSR award for Poster Competition
                </h2>

                {/* Event & Organizer Info Box */}
                <div className="bg-emerald-50/60 border-l-4 border-[#163A2D] p-4 rounded-r-lg mb-6">
                  <p className="text-sm text-gray-700 font-medium mb-1">
                    <span className="font-semibold text-[#163A2D]">From:</span> International Conference on Applied Statistics and Data Science (ICASDS-2025)
                  </p>
                  <p className="text-xs text-gray-600 mb-1">
                    Institute of Statistical Research and Training (ISRT), University of Dhaka
                  </p>
                  <p className="text-xs text-emerald-800 font-semibold">
                    Date: 28-29 December, 2025
                  </p>
                </div>

                {/* Presentation Text */}
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  Presented to <strong className="text-gray-900 font-semibold">Ramen Kumar Das</strong> in recognition of outstanding performance in the poster competition for the pioneering research work entitled:
                </p>

                {/* Paper Title Quote Box */}
                <div className="bg-emerald-50/40 border border-emerald-100/80 p-4 rounded-lg italic text-sm text-[#163A2D] font-serif font-medium mb-4">
                  "Adversarial Resilient LSTM Model for Secure Time-Series Forecasting and Classification"
                </div>

                {/* Chair Signature Note */}
                <p className="text-xs text-gray-500 italic mb-6">
                  ✍️ Chaired by Professor Dr. Tamanna Howlader (Conference Chair, ICASDS 2025)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0C2219] hover:bg-[#163A2D] text-white text-xs sm:text-sm font-medium rounded-lg transition-all shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  View Full-Res Certificate
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 hover:border-emerald-600 text-gray-700 hover:text-emerald-800 text-xs sm:text-sm font-medium rounded-lg transition-all shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Verify at ISRT Registry
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-emerald-800 text-xs sm:text-sm font-medium transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Read Extended Abstract
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ==========================================
            ADDITIONAL SECONDARY AWARDS GRID
        ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Award Card 1 */}
          <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                  2024 Award
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  Botanical Society of Bengal
                </span>
              </div>
              
              <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#163A2D] mb-2">
                Outstanding Field Botanical Researcher Fellowship
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Awarded for groundbreaking documentation of vulnerable vascular plant taxa and microclimatic humidity threshold modeling in tropical riparian habitats.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-400 pt-3 border-t border-gray-100">
              <Award className="w-3.5 h-3.5 text-yellow-600" />
              <span>Annual Botanical Research Symposium, Kolkata</span>
            </div>
          </div>

          {/* Award Card 2 */}
          <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                  2023 Honor
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  Environmental Science Forum
                </span>
              </div>
              
              <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-[#163A2D] mb-2">
                Best Methodological Paper Award
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Recognized for novel time-series classification benchmarks integrating ecological sensing arrays with recurrent deep neural networks.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-400 pt-3 border-t border-gray-100">
              <Award className="w-3.5 h-3.5 text-yellow-600" />
              <span>National Computational Biology Convention</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AwardPage;