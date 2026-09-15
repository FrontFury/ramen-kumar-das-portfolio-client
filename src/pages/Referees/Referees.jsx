import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  UserCheck, Mail, Phone, Building2, 
  GraduationCap, Copy, Check, Sparkles, ExternalLink 
} from "lucide-react";

// Banner Background Image
import bgBanner from "../../assets/HomeBG.png"; 

const Referees = () => {
  const [copiedText, setCopiedText] = useState("");

  // Extracted Data from Image
  const refereesData = [
    {
      id: 1,
      name: "Dr. Md. Rubaiyat Hossain Mondal",
      designation: "Professor",
      department: "Institute of Information & Communication Technology",
      institution: "Bangladesh University of Engineering & Technology (BUET)",
      phone: "+8801711014224",
      emails: ["rubaiyat97@iict.buet.ac.bd"],
      tag: "BUET Reference",
    },
    {
      id: 2,
      name: "Dr. Kamruzzaman Khan",
      designation: "Professor",
      department: "Department of Mathematics",
      institution: "Pabna University of Science & Technology",
      phone: "+8801717254474",
      emails: ["k.khanru@gmail.com", "k.khanru@pust.ac.bd"],
      tag: "PUST Reference",
    },
    {
      id: 3,
      name: "Dr. Md. Sarwar Hosain",
      designation: "Professor",
      department: "Department of Information & Communication Engineering",
      institution: "Pabna University of Science & Technology",
      phone: "+8801722047833",
      emails: ["sarwar.ice@pust.ac.bd"],
      tag: "PUST Reference",
    },
  ];

  // Helper function to handle Copying to Clipboard
  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="w-full bg-[#F8FAFC] text-gray-800 rounded-xl lg:rounded-3xl overflow-hidden font-['Playfair_Display',serif] shadow-sm border border-emerald-100/60">
      
      {/* 1. HERO BANNER */}
      <section
        className="relative min-h-[360px] md:min-h-[420px] flex flex-col justify-center items-center text-center px-4 py-16 bg-cover bg-center bg-no-repeat rounded-xl lg:rounded-3xl overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${bgBanner})`,
        }}
      >
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-[#0C2219]/75 backdrop-blur-[2px]" />

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

        {/* REFEREES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-sans">
          {refereesData.map((ref) => (
            <motion.div
              key={ref.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-emerald-100 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-100">
                    {ref.tag}
                  </span>
                  <GraduationCap className="w-5 h-5 text-amber-600" />
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="text-xl font-bold text-[#163A2D] font-['Playfair_Display',serif] leading-tight mb-1">
                    {ref.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                    {ref.designation}
                  </p>
                </div>

                {/* Academic Department & Institution */}
                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
                  <p className="font-medium text-gray-700 leading-relaxed">
                    {ref.department}
                  </p>
                  <p className="flex items-start gap-1.5 text-emerald-900 font-semibold leading-relaxed">
                    <Building2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{ref.institution}</span>
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-4 border-t border-gray-100 text-xs">
                
                {/* Phone */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2 text-gray-700 truncate">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <a href={`tel:${ref.phone}`} className="hover:text-emerald-700 font-medium">
                      {ref.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(ref.phone, `phone-${ref.id}`)}
                    className="p-1.5 text-gray-400 hover:text-emerald-700 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedText === `phone-${ref.id}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Emails */}
                {ref.emails.map((email, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="flex items-center gap-2 text-gray-700 truncate">
                      <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <a
                        href={`mailto:${email}`}
                        className="hover:text-emerald-700 font-medium truncate"
                      >
                        {email}
                      </a>
                    </div>
                    <button
                      onClick={() => handleCopy(email, `email-${ref.id}-${idx}`)}
                      className="p-1.5 text-gray-400 hover:text-emerald-700 transition-colors"
                      title="Copy Email"
                    >
                      {copiedText === `email-${ref.id}-${idx}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ))}

                {/* Email Action Button */}
                <a
                  href={`mailto:${ref.emails[0]}`}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-[#163A2D] text-amber-300 text-xs font-bold hover:bg-[#0C2219] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Send Direct Email</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Referees;