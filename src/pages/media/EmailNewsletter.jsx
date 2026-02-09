
import React from "react";
import { motion } from "framer-motion";
import { page, fadeUp } from "../../animations/variants";
import Footer from "../../components/layout/Footer";
import { Mail, Bell, BookOpen, Send, CheckCircle2, Globe } from "lucide-react";

export default function EmailNewsletter() {
  return (
    <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-6">
          Email Newsletter
        </motion.h1>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <motion.div variants={fadeUp} className="max-w-4xl space-y-12">
            
            {/* Strategy & Purpose Section */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Stay Informed on Youth Impact</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our newsletter is managed by the <strong>Communications, Advocacy, and External Relations Department</strong>. It serves as a digital bridge, delivering research-backed insights, success stories, and official announcements directly to our stakeholders across Nigeria and Sub-Saharan Africa.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Globe size={18} />
                  <span>Expanding impact across the continent</span>
                </div>
              </div>
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Mail className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Join Our Mailing List</h3>
                <p className="text-sm text-gray-500 mt-2">Get the latest updates on youth employability and climate action.</p>
              </div>
            </section>

            {/* Newsletter Content Pillars */}
            <section className="pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">What to Expect in Your Inbox</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:shadow-md">
                  <BookOpen className="text-primary mb-3" size={24} />
                  <h4 className="font-bold text-gray-800 mb-2">Knowledge Products</h4>
                  <p className="text-xs text-gray-600">Executive summaries of our policy briefs, research reports, and academic articles.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:shadow-md">
                  <Bell className="text-primary mb-3" size={24} />
                  <h4 className="font-bold text-gray-800 mb-2">Program Updates</h4>
                  <p className="text-xs text-gray-600">Announcements regarding new career workshops, innovation projects, and training cohorts.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:shadow-md">
                  <CheckCircle2 className="text-primary mb-3" size={24} />
                  <h4 className="font-bold text-gray-800 mb-2">Success Stories</h4>
                  <p className="text-xs text-gray-600">First-hand accounts of alumni impact and community-led sustainable development.</p>
                </div>
              </div>
            </section>

            {/* Subscription Form Placeholder */}
            <section className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
              <div className="relative z-10 max-w-lg">
                <h3 className="text-2xl font-bold mb-4">Subscribe to our Advocacy Digest</h3>
                <p className="text-gray-400 mb-6">Join over 10,000+ subscribers and be part of the movement unlocking the potential of African youth.</p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="px-8 py-4 bg-primary hover:bg-primary-dark transition-colors rounded-full font-bold flex items-center justify-center gap-2">
                    Subscribe <Send size={18} />
                  </button>
                </form>
                <p className="text-[10px] text-gray-500 mt-4 italic">
                  By subscribing, you agree to receive communications from Glowing Minds Initiatives for Human Development.
                </p>
              </div>
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            </section>

            {/* Engagement Note */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-blue-800 text-sm italic text-center leading-relaxed">
                "Our newsletter ensures that our stakeholders, from policymakers to the youth themselves, are equipped with the requisite knowledge to ensure young people are influential in decision-making spaces."
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