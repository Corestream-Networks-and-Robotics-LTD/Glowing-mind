import React from "react";
import { motion } from "framer-motion";
import { page, fadeUp } from "../../animations/variants";
import Footer from "../../components/layout/Footer";

export default function TVFeatures() {
  return (
    <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-6">
          TV – Features
        </motion.h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <motion.div variants={fadeUp} className="max-w-4xl space-y-8">
            {/* Departmental Mandate Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Media Engagement & Visibility</h2>
              <p className="text-gray-600 leading-relaxed">
                Managed by our <strong>Communications, Advocacy, and External Relations Department</strong>, our television features are a core component of driving organizational visibility, branding, and storytelling. We utilize broadcast platforms to position Glowing Minds Initiatives as a credible voice in the African development landscape.
              </p>
            </section>

            {/* Advocacy Pillars Section */}
            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Advocacy Focus</h3>
                <p className="text-gray-600 mb-4">
                  Our TV appearances and broadcast features prioritize leading the conversation on critical systemic barriers:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Youth Employment & Employability Expertise </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Climate Action & Green Innovation </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Gender Inclusion & Social Equity </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Youth Policy & Civic Leadership </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Strategic Impact</h3>
                <p className="text-blue-800 text-sm leading-relaxed italic">
                  "Through strategic media engagement, we strengthen relationships with policymakers and the public, ensuring that young people are not only skilled but also influential in decision-making spaces across Nigeria and beyond".
                </p>
              </div>
            </section>

            {/* Broadcast Goals */}
            <section className="pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Media Objectives</h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-primary font-bold text-lg mb-1">Visibility</div>
                  <p className="text-xs text-gray-500">Driving organizational branding and mission awareness.</p>
                </div>
                <div className="p-4">
                  <div className="text-primary font-bold text-lg mb-1">Evidence</div>
                  <p className="text-xs text-gray-500">Sharing research-backed insights and success stories.</p>
                </div>
                <div className="p-4">
                  <div className="text-primary font-bold text-lg mb-1">Influence</div>
                  <p className="text-xs text-gray-500">Advocating for youth-centered policies at national levels.</p>
                </div>
              </div>
            </section>

            {/* Placeholder for Archive */}
            <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
              <p className="text-gray-500 italic text-sm">
                Television interviews and broadcast features highlighting GMI's impact on youth employability and climate action are currently being updated in our digital library.
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