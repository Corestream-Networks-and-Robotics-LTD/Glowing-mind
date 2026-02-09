
import React from "react";
import { motion } from "framer-motion";
import { page, fadeUp } from "../../animations/variants";
import Footer from "../../components/layout/Footer";

export default function RadioFeatures() {
  return (
    <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-6">
          Radio – Features
        </motion.h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <motion.div variants={fadeUp} className="max-w-4xl space-y-10">
            
            {/* Departmental Mandate Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Media Engagement & Public Advocacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Managed by the <strong>Communications, Advocacy, and External Relations Department</strong>, our radio features are a core component of driving organizational visibility, branding, and storytelling. We utilize broadcast platforms to position Glowing Minds Initiatives as a credible voice while strengthening relationships with media, policymakers, and the public.
              </p>
            </section>

            {/* Strategic Focus Grid */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Advocacy Pillars on Air</h3>
                <p className="text-gray-600">
                  Through our radio engagements, we lead advocacy efforts on critical thematic areas to influence systemic change:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Youth Employment:</strong> Addressing skills mismatches and workforce readiness.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Climate Action:</strong> Promoting green innovation and environmental stewardship.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Gender Inclusion:</strong> Advocating for equitable participation of women and marginalized groups.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Youth Policy:</strong> Translating innovative ideas into tangible, impactful policies.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Community-Driven Outreach</h3>
                <p className="text-blue-800 text-sm leading-relaxed italic">
                  "Our radio features enable us to reach urban and semi-urban regions where youth unemployment and skills gaps are most critical, ensuring young people are not only skilled but also influential in decision-making spaces".
                </p>
              </div>
            </section>

            {/* Program Partners Section */}
            <section className="pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Broadcast Partners</h3>
              <p className="text-gray-600 mb-6">
                We collaborate with strategic media organizations to share research-backed insights and success stories. Our radio program partners include:
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 shadow-sm">
                  Prestige FM Minna 
                </div>
                <div className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 shadow-sm">
                  Nigeria Union of Journalists (FCT Chapter) 
                </div>
              </div>
            </section>

            {/* Engagement Status */}
            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-center">
              <p className="text-gray-500 italic text-sm">
                Audio recordings, podcasts, and highlights of our live radio features—addressing youth self-reliance and inclusive development—are being compiled for our digital media library.
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