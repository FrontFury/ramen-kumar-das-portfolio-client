import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  Building,
  Home,
  MessageSquare,
} from "lucide-react";

// Banner Background Image
import bgBanner from "../../assets/ContactBAnner.jpeg";

const Contact = () => {
  const [copiedText, setCopiedText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Extracted Contact Information
  const contactInfo = {
    personalEmail: "rkdas.ict@gmail.com",
    institutionalEmail: "0424313005@iict.buet.ac.bd",
    phoneNumbers: ["+8801919933351", "+8801882120681"],
    presentAddress:
      "Flat-B2, H/N:20, R/N:06, Kaderabad Housing, Mohammadpur, Dhaka-1207, Bangladesh",
    permanentAddress:
      "Holding no:129, Uttorcourt gaon, Munshiganj Sodor, Munshiganj-1500, Bangladesh",
  };

  // Helper function to handle Copying to Clipboard
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  // Handle Form Input Change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if all fields are non-empty (ignoring extra white spaces)
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "";

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

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
            <span>Get In Touch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-300 tracking-tight leading-tight mb-4 drop-shadow-sm">
            Contact Details
          </h1>

          <p className="text-sm sm:text-base text-gray-100 max-w-2xl font-sans font-light leading-relaxed">
            Feel free to reach out for academic collaborations, research
            inquiries, or professional networking.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-12 font-sans">
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-emerald-900/10 pb-6">
          <div className="flex items-center gap-3 font-['Playfair_Display',serif]">
            <span className="w-2.5 h-8 bg-[#163A2D] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-4xl font-bold text-[#163A2D]">
              Communication Channels
            </h2>
          </div>
          <span className="text-xs tracking-widest text-emerald-800 uppercase font-sans font-semibold mt-3 sm:mt-0 flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-amber-500" />
            Reach Out Anytime
          </span>
        </div>

        {/* TWO-COLUMN LAYOUT: CONTACT DETAILS & MESSAGE FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: CONTACT DETAILS CARDS (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* EMAIL ADDRESSES CARD */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#163A2D] font-['Playfair_Display',serif]">
                    Email Addresses
                  </h3>
                  <p className="text-xs text-gray-500">
                    Send an email for research or formal queries
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {/* Personal Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs sm:text-sm">
                  <div>
                    <span className="text-xs font-semibold text-emerald-800 block">
                      Personal Mail
                    </span>
                    <a
                      href={`mailto:${contactInfo.personalEmail}`}
                      className="text-gray-800 font-medium hover:text-emerald-700"
                    >
                      {contactInfo.personalEmail}
                    </a>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(contactInfo.personalEmail, "personalEmail")
                    }
                    className="p-2 text-gray-500 hover:text-emerald-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedText === "personalEmail" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Institutional Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs sm:text-sm">
                  <div>
                    <span className="text-xs font-semibold text-emerald-800 block">
                      Institutional Mail (BUET)
                    </span>
                    <a
                      href={`mailto:${contactInfo.institutionalEmail}`}
                      className="text-gray-800 font-medium hover:text-emerald-700"
                    >
                      {contactInfo.institutionalEmail}
                    </a>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        contactInfo.institutionalEmail,
                        "institutionalEmail",
                      )
                    }
                    className="p-2 text-gray-500 hover:text-emerald-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedText === "institutionalEmail" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* PHONE NUMBERS CARD */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#163A2D] font-[#163A2D] font-['Playfair_Display',serif]">
                    Phone Contact
                  </h3>
                  <p className="text-xs text-gray-500">
                    Available during standard business hours
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {contactInfo.phoneNumbers.map((phone, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs sm:text-sm"
                  >
                    <div>
                      <span className="text-xs font-semibold text-emerald-800 block">
                        Number {idx + 1}
                      </span>
                      <a
                        href={`tel:${phone}`}
                        className="text-gray-800 font-medium hover:text-emerald-700"
                      >
                        {phone}
                      </a>
                    </div>
                    <button
                      onClick={() => handleCopy(phone, `phone${idx}`)}
                      className="p-2 text-gray-500 hover:text-emerald-800 transition-colors"
                      title="Copy Number"
                    >
                      {copiedText === `phone${idx}` ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ADDRESSES CARD */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#163A2D] font-['Playfair_Display',serif]">
                    Residential Addresses
                  </h3>
                  <p className="text-xs text-gray-500">
                    Present and permanent locations
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {/* Present Address */}
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                  <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5" /> Present Address
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {contactInfo.presentAddress}
                  </p>
                </div>

                {/* Permanent Address */}
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                  <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                    <Home className="w-3.5 h-3.5" /> Permanent Address
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {contactInfo.permanentAddress}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: QUICK MESSAGE FORM (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" /> Direct Message
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#163A2D] font-['Playfair_Display',serif]">
                  Send a Message
                </h3>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <Check className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-[#163A2D]">Message Sent!</h4>
                  <p className="text-xs text-gray-600">
                    Thank you for getting in touch. I will respond as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tanvir Ahmed"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tanvir.ahmed@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Research Collaboration / Query"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-xs sm:text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Condition: Show button ONLY if all fields are valid */}
                  {isFormValid && (
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-[#163A2D] text-amber-300 font-bold text-xs sm:text-sm hover:bg-[#0C2219] transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;