
import React from "react";
import { motion } from "framer-motion";
import { page, fadeUp } from "../../animations/variants";
import Footer from "../../components/layout/Footer";
import { PlayCircle, Film, Monitor, Users, Globe, Layers } from "lucide-react";

export default function VideoLibrary() {
  return (
    <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-6">
          Video Library
        </motion.h1>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <motion.div variants={fadeUp} className="max-w-5xl space-y-12">
            
          {/* Departmental Vision for Multimedia */}
<section className="grid md:grid-cols-2 gap-10 items-center">
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold text-gray-800">Visual Storytelling & Impact</h2>
    <p className="text-gray-600 leading-relaxed">
      Managed by our <strong>Communications, Advocacy, and External Relations Department</strong>, our video library is a strategic asset for driving organizational visibility and branding. We use visual media to document our journey of unlocking the potential of African youth and ensuring they are influential in decision-making spaces.
    </p>
  </div>

  
  <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-xl border-4 border-white">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube.com//embed/_c9ycVdch0o" 
      title="The GMI Impact Story"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</section>

            {/* Video Categories based on Program Delivery */}
            <section className="pt-10 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-8">Multimedia Archives</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Documentaries & Success Stories */}
                <div className="space-y-3">
                  <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                    <Film className="text-gray-400" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Users size={18} className="text-primary" /> Success Stories
                  </h4>
                  <p className="text-xs text-gray-500">Documenting the transformation of our 10,000+ trained youth across Nigeria.</p>
                </div>

                {/* Educational & Faculty Series */}
                <div className="space-y-3">
                  <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                    <Monitor className="text-gray-400" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Layers size={18} className="text-primary" /> Faculty Masterclasses
                  </h4>
                  <p className="text-xs text-gray-500">Employability expertise and career development support delivered by our expert faculty.</p>
                </div>

                {/* Advocacy & Policy Sessions */}
                <div className="space-y-3">
                  <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                    <Globe className="text-gray-400" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <PlayCircle size={18} className="text-primary" /> Advocacy Highlights
                  </h4>
                  <p className="text-xs text-gray-500">Television features and policy dialogues on Climate Action and Gender Inclusion.</p>
                </div>

              </div>
            </section>

            {/* Innovation & Adaptive Delivery */}
            
            <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="text-center md:text-left space-y-2">
                  <h3 className="text-lg font-bold text-blue-900">Innovation in Program Delivery</h3>
                  <p className="text-sm text-blue-800 leading-relaxed italic">
                    "Our visual library reflects our <strong>Adaptive Delivery Model</strong>, ensuring high-quality career development and entrepreneurial support services are accessible to youth across all regions of Nigeria and Sub-Saharan Africa."
                  </p>
                </div>
              </div>
            </section>

            {/* Media Contact / Social Integration */}
            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-center">
              <p className="text-gray-600 font-bold uppercase tracking-wider text-xs mb-4">Subscribe to our Channels</p>
              <div className="flex justify-center gap-6">
                <span className="text-sm font-semibold text-gray-500">YouTube: @glowingmindsinitiatives</span>
                <span className="text-sm font-semibold text-gray-500">TikTok: @glowing.minds.ini</span>
              </div>
              <p className="text-gray-400 text-[11px] mt-4">
                Our multimedia content is updated weekly to include live event recordings, policy briefs, and community-led sustainable development projects.
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