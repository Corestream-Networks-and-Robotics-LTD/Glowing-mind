
import React from "react";
import { motion } from "framer-motion";
import { page, fadeUp } from "../../animations/variants";
import Footer from "../../components/layout/Footer";

export default function NewspaperFeatures() {
  return (
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-6">
          Newspaper – Features
        </motion.h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <motion.div variants={fadeUp} className="max-w-4xl space-y-10">
            
            {/* Departmental Mandate & Branding */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Print Media & Strategic Branding</h2>
              <p className="text-gray-600 leading-relaxed">
                Managed by the <strong>Communications, Advocacy, and External Relations Department</strong>, our newspaper features are a core component of driving organizational visibility and branding. We utilize reputable print platforms to share research-backed insights and success stories, positioning Glowing Minds Initiatives as a credible voice in the African development landscape.
              </p>
            </section>

            {/* Advocacy & Policy Pillars */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Leading Public Discourse</h3>
                <p className="text-gray-600">
                  Our print engagements focus on leading advocacy efforts through articles, features, and reports on critical systemic barriers:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">▪</span>
                    <span><strong>Youth Employment:</strong> Addressing the labor market skills mismatch.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">▪</span>
                    <span><strong>Climate Action:</strong> Promoting green innovation and climate entrepreneurship.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">▪</span>
                    <span><strong>Gender Inclusion:</strong> Advocating for social equity and female leadership.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">▪</span>
                    <span><strong>Youth Policy:</strong> Translating innovative ideas into tangible policy frameworks.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Influencing Policy</h3>
                <p className="text-blue-800 text-sm leading-relaxed italic">
                  "Through strategic print media engagement, we strengthen relationships with policymakers and the public, ensuring that young people are influential in decision-making spaces across Nigeria and beyond".
                </p>
              </div>
            </section>

            {/* Knowledge Products Integration */}
            <section className="pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Knowledge Sharing & Publications</h3>
              <p className="text-gray-600 mb-6">
                Our features often highlight findings from our <strong>Knowledge Management</strong> initiatives, including project reports, academic articles, and policy briefs. We aim to simplify complex public policy issues regarding youth employability for a national audience.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-100">
                  <span className="block text-primary font-bold text-sm">Policy Briefs</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-100">
                  <span className="block text-primary font-bold text-sm">Case Studies</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-100">
                  <span className="block text-primary font-bold text-sm">Project Reports</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-center border border-gray-100">
                  <span className="block text-primary font-bold text-sm">Annual Reports</span>
                </div>
              </div>
            </section>

            {/* Media Archive Placeholder */}
            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-center">
              <p className="text-gray-500 italic text-sm">
                Archived newspaper clippings and digital features highlighting GMI’s impact on youth self-reliance and inclusive development are currently being compiled for our media library.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.main>
  );
}