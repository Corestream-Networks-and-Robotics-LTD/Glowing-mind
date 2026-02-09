
import React from "react";
import { motion } from "framer-motion";
import { page, fadeUp } from "../../animations/variants";
import Footer from "../../components/layout/Footer";
import { Users, BarChart3, Trophy, Calendar, ChevronRight } from "lucide-react";

export default function PressReleaseFeatures() {
  return (
    <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-6">
          Press Releases
        </motion.h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <motion.div variants={fadeUp} className="max-w-4xl space-y-10">
            
            {/* Departmental Mandate */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Official Communications & Advocacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Managed by the <strong>Communications, Advocacy, and External Relations Department</strong>, our press releases serve as the official voice of Glowing Minds Initiatives. These communications are designed to drive organizational visibility, branding, and storytelling while positioning GMI as a credible authority in youth development and social equity across Nigeria and Sub-Saharan Africa.
              </p>
            </section>

            {/* Strategic Announcement Pillars */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Media Statement Focus</h3>
                <p className="text-gray-600">
                  We issue press releases to lead public discourse and advocate for systemic change in our core thematic areas:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span><strong>Youth Employment:</strong> Expert commentary on labor market trends and workforce readiness.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span><strong>Climate Action:</strong> Announcements regarding green innovation and environmental sustainability.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span><strong>Gender Inclusion:</strong> Statements advocating for gender parity and social equity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span><strong>Youth Policy:</strong> Translating research-backed ideas into actionable policy recommendations.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Impactful Storytelling</h3>
                <p className="text-blue-800 text-sm leading-relaxed italic">
                  "Our press releases go beyond news; they strengthen our relationship with policymakers and the public, ensuring that young people's voices are influential in decision-making spaces locally and internationally."
                </p>
              </div>
            </section>

            {/* Stakeholder & Partner Engagement */}
            <section className="pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Partner & Stakeholder Updates</h3>
              <p className="text-gray-600 mb-6">
                In alignment with our <strong>Knowledge Management</strong> strategy, we frequently release statements regarding new program co-creations, research collaborations, and technical assistance with our strategic partners:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100 transition-hover hover:border-primary/20">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                    <Users className="text-primary w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Strategic Program Alliances</span>
                </div>
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100 transition-hover hover:border-primary/20">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                    <BarChart3 className="text-primary w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Research & Data Publication</span>
                </div>
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100 transition-hover hover:border-primary/20">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                    <Trophy className="text-primary w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Awards & Recognition Highlights</span>
                </div>
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100 transition-hover hover:border-primary/20">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                    <Calendar className="text-primary w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Annual Event Announcements</span>
                </div>
              </div>
            </section>

            {/* Media Contact Note */}
            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-center">
              <p className="text-gray-600 font-bold uppercase tracking-wider text-xs mb-3">Media & Press Inquiries</p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
                Journalists and media organizations seeking official statements or interviews regarding our impact on youth self-reliance and inclusive development should contact our communications desk.
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