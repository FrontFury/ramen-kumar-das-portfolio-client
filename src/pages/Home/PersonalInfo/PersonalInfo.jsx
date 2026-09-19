import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  CreditCard, 
  Globe, 
  User, 
  Heart, 
  Droplet, 
  UserCheck, 
  Copy, 
  Check, 
  ShieldCheck,
  Users,
  Fingerprint,
  CheckCircle2
} from 'lucide-react';

export default function PersonalInfo() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const primaryDetails = [
    {
      key: 'dob',
      label: 'Date of Birth',
      value: '21 June 1995',
      subValue: '29 Years Old',
      icon: Calendar,
      copyable: false
    },
    {
      key: 'passport',
      label: 'Passport Number',
      value: 'A19752965',
      subValue: 'International Travel Document',
      icon: CreditCard,
      copyable: true
    },
    {
      key: 'nid',
      label: 'NID Number',
      value: '1925531301',
      subValue: 'National Identification',
      icon: Fingerprint,
      copyable: true
    },
    {
      key: 'nationality',
      label: 'Nationality',
      value: 'Bangladeshi',
      subValue: 'By birth',
      icon: Globe,
      copyable: false
    }
  ];

  const backgroundDetails = [
    {
      key: 'sex',
      label: 'Gender',
      value: 'Male',
      icon: User,
    },
    {
      key: 'marital',
      label: 'Marital Status',
      value: 'Single',
      icon: Heart,
    },
    {
      key: 'blood',
      label: 'Blood Group',
      value: 'B positive (B+)',
      icon: Droplet,
    }
  ];

  const familyDetails = [
    {
      key: 'father',
      relation: "Father's Name",
      name: 'Rabindraw Kumar Das',
    },
    {
      key: 'mother',
      relation: "Mother's Name",
      name: 'Luxmi Rani Das',
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Decorative Glow (Exact from MemberShip) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Font Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-serif-heading {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .font-sans-body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      {/* SECTION HEADER (Exact structure & width matching MemberShip) */}
      <div className="flex flex-col items-start gap-1 mb-10 font-sans-body">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/60 border border-emerald-200/80 text-[11px] font-sans font-bold tracking-widest text-emerald-900 uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Identification & Background</span>
        </div>

        {/* Title & Verified Badge Row */}
        <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between border-b border-emerald-900/10 pb-4 mt-2 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#163A2D] font-serif-heading tracking-tight">
            Personal Information
          </h2>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#163A2D] text-white rounded-lg text-xs font-sans font-medium shadow-sm shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified Records: 9 Details</span>
          </div>
        </div>
      </div>

      {}
      <div className="space-y-8 font-sans-body">
        
        {/* Primary Identity Cards */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800/70 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Primary Identification Cards</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {primaryDetails.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-emerald-100/80 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Accent Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#163A2D] via-emerald-600 to-amber-500 opacity-80 group-hover:h-1.5 transition-all duration-300" />

                  <div className="pt-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-[#163A2D] group-hover:bg-[#163A2D] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      {item.copyable && (
                        <button
                          onClick={() => handleCopy(item.value, item.key)}
                          className="p-2 rounded-lg text-slate-400 hover:text-[#163A2D] hover:bg-emerald-50 transition-colors"
                          title="Copy to clipboard"
                        >
                          {copiedKey === item.key ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>

                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-xl font-bold text-[#163A2D] mt-0.5 tracking-tight font-mono">
                      {item.value}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-emerald-900/5 flex items-center justify-between text-xs text-slate-500">
                    <span>{item.subValue}</span>
                    {copiedKey === item.key && (
                      <span className="text-emerald-700 font-bold text-[11px] animate-fade-in">
                        Copied!
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Bio Profile Panel */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-emerald-100/80 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#163A2D] to-emerald-600 opacity-80" />
            
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800/70 mb-5">
                <User className="w-4 h-4 text-emerald-700" />
                <span>Bio Profile</span>
              </div>

              <div className="space-y-3.5">
                {backgroundDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div 
                      key={detail.key} 
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-emerald-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 text-slate-600">
                        <Icon className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span className="text-xs font-semibold">{detail.label}</span>
                      </div>
                      <span className="text-sm font-bold text-[#163A2D]">
                        {detail.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              Personal Demographic Records
            </div>
          </div>

          {/* Family Background Panel */}
          <div className="lg:col-span-2 bg-gradient-to-br from-white/90 via-emerald-50/30 to-white/90 backdrop-blur-md rounded-2xl p-6 border border-emerald-100/80 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-amber-500 to-[#163A2D] opacity-80" />

            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800/70 mb-5">
                <Users className="w-4 h-4 text-emerald-700" />
                <span>Family Details</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {familyDetails.map((parent) => (
                  <div 
                    key={parent.key} 
                    className="bg-white/90 border border-emerald-100/90 p-5 rounded-xl shadow-2xs hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <UserCheck className="w-4 h-4 text-emerald-700" />
                      <p className="text-xs text-amber-800 font-bold tracking-wider uppercase">
                        {parent.relation}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-[#163A2D] font-serif-heading">
                      {parent.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Notice */}
            <div className="mt-6 pt-4 border-t border-emerald-900/10 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Information verified according to official government identity documents.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}