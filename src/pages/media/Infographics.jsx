
import React from "react";
import { motion } from "framer-motion";
import { page, fadeUp } from "../../animations/variants";
import Footer from "../../components/layout/Footer";
import { BarChart3, Target, Users, Globe, Award, Zap } from "lucide-react";

export default function Infographics() {
  return (
    <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-6">
          Impact Infographics
        </motion.h1>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <motion.div variants={fadeUp} className="max-w-5xl space-y-12">
            
            {/* Executive Summary of Impact */}
            <section className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Achievement by Numbers</h2>
              <p className="text-gray-600">
                Visualizing the scale of Glowing Minds Initiatives' intervention across Nigeria and Sub-Saharan Africa. Our data reflects a commitment to unlocking the potential of youth through evidence-based programming.
              </p>
            </section>

            {/* Impact Metrics Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Youth Trained", value: "10,000+", icon: <Users />, color: "bg-blue-50 text-blue-600" },
                { label: "Community Reach", value: "50,000+", icon: <Globe />, color: "bg-green-50 text-green-600" },
                { label: "Career Workshops", value: "200+", icon: <Target />, color: "bg-purple-50 text-purple-600" },
                { label: "Alumni Success Rate", value: "85%", icon: <Award />, color: "bg-orange-50 text-orange-600" },
                { label: "Policy Advocacy Papers", value: "15+", icon: <BarChart3 />, color: "bg-red-50 text-red-600" },
                { label: "Innovation Projects", value: "12", icon: <Zap />, color: "bg-yellow-50 text-yellow-600" },
              ].map((stat, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-50 bg-gray-50/50 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${stat.color}`}>
                    {React.cloneElement(stat.icon, { size: 24 })}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </section>

            {/* SDG Alignment Infographic Section */}
            
            <section className="pt-10 border-t border-gray-100">
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                   Strategic SDG Alignment
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Our interventions are strategically mapped to the United Nations Sustainable Development Goals, ensuring that every program contributes to global development targets.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="w-8 h-8 rounded bg-red-500 text-white flex items-center justify-center font-bold text-xs">1</span>
                        No Poverty: Economic empowerment through skills.
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="w-8 h-8 rounded bg-orange-500 text-white flex items-center justify-center font-bold text-xs">4</span>
                        Quality Education: Bridging the employability gap.
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs">8</span>
                        Decent Work & Economic Growth: Job readiness.
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="w-8 h-8 rounded bg-green-600 text-white flex items-center justify-center font-bold text-xs">13</span>
                        Climate Action: Green innovation & sustainability.
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="w-8 h-8 rounded bg-blue-400 text-white flex items-center justify-center font-bold text-xs">17</span>
                        Partnerships for the Goals: Collaborative impact.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Theory of Change Narrative */}
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Theory of Change</h3>
              <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-primary font-bold text-lg mb-1">Input</div>
                    <p className="text-xs text-gray-500">Expert faculty, research-backed curricula, and strategic partnerships.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-primary font-bold text-lg mb-1">Process</div>
                    <p className="text-xs text-gray-500">Intensive training, mentorship, and career development support.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-primary font-bold text-lg mb-1">Outcome</div>
                    <p className="text-xs text-gray-500">Youth transition to decent work, entrepreneurship, and policy leadership.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Archive Note */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-center">
              <p className="text-gray-500 italic text-sm">
                Detailed impact reports, regional performance maps, and success story visualizations are managed by our Knowledge Management department and updated quarterly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
    <Footer />
    </>
  );
}