import React from "react";

const ProfessionalExperience = () => {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto bg-[#07130E]/0 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-emerald-200 mb-4 font-['Playfair_Display',serif]">
          Professional Experience
        </h2>

        <div className="space-y-4 text-gray-200">
          <article className="p-4 bg-[#0B2A20]/30 rounded-md border border-emerald-800/30">
            <h3 className="font-semibold">Research Assistant — University Lab</h3>
            <p className="text-sm">Jan 2022 — Present · Data analysis, model development</p>
          </article>

          <article className="p-4 bg-[#0B2A20]/30 rounded-md border border-emerald-800/30">
            <h3 className="font-semibold">Teaching Assistant — Statistics Dept.</h3>
            <p className="text-sm">Sep 2020 — Dec 2021 · Courses: Intro to Statistics</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;