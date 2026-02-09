
import React from "react";
import { motion } from "framer-motion";
import { page, fadeUp } from "../../animations/variants";
import Footer from "../../components/layout/Footer";

export default function Podcast() {
  return (
    <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-6">
          Podcast – Voice of Impact
        </motion.h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <motion.div variants={fadeUp} className="max-w-4xl space-y-10">
            
            {/* Departmental Context from Profile */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Strategic Media Engagement</h2>
              <p className="text-gray-600 leading-relaxed">
                As a core function of the <strong>Communications, Advocacy, and External Relations Department</strong>, our podcast serves as a digital platform for driving organizational visibility, branding, and storytelling. Through this medium, we position Glowing Minds Initiatives as a credible voice in the African development landscape, strengthening relationships with media, policymakers, and the public.
              </p>
            </section>

            {/* Content Pillars Section */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Advocacy & Dialogue</h3>
                <p className="text-gray-600">
                  Our podcast episodes are anchored in our core thematic areas and leading advocacy efforts:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">●</span>
                    <span><strong>Youth Employment:</strong> Expert insights on workforce readiness and employability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">●</span>
                    <span><strong>Climate Action:</strong> Discussions on green innovation and climate entrepreneurship.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">●</span>
                    <span><strong>Gender Inclusion:</strong> Promoting social equity and women's empowerment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">●</span>
                    <span><strong>Youth Policy:</strong> Translating innovative ideas into tangible, impactful policies.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Goal of Outreach</h3>
                <p className="text-blue-800 text-sm leading-relaxed italic">
                  "Our goal is to ensure young people are not only skilled but also influential in decision-making spaces. We use our digital platforms to share research-backed insights and success stories that drive sustainable development outcomes".
                </p>
              </div>
            </section>

            {/* Knowledge Sharing Section */}
            <section className="pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Knowledge Products & Explainer Series</h3>
              <p className="text-gray-600 mb-6">
                Integrated with our <strong>Knowledge Management</strong> efforts, the podcast features deep dives into our publications, policy briefs, and research reports. We aim to simplify complex public policy issues for youth employability across Nigeria and Sub-Saharan Africa.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <span className="block text-primary font-bold">Success Stories</span>
                  <span className="text-xs text-gray-500">Impact stories from our alumni </span>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <span className="block text-primary font-bold">Policy Briefs</span>
                  <span className="text-xs text-gray-500">Youth-centered policy analysis </span>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <span className="block text-primary font-bold">Career Tips</span>
                  <span className="text-xs text-gray-500">Employability expertise </span>
                </div>
              </div>
            </section>

            {/* Digital Media Archive Status */}
            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-center">
              <p className="text-gray-500 italic text-sm">
                Our audio library, featuring interviews with industry experts and faculty, is currently being updated to provide easy access to GMI's wealth of knowledge and advocacy sessions.
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