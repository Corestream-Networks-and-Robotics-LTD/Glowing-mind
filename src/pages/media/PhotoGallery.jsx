
import React from "react";
import { motion } from "framer-motion";
import { page, fadeUp } from "../../animations/variants";
import Footer from "../../components/layout/Footer";
import { Camera, MapPin, Users, Lightbulb, Heart, ShieldCheck } from "lucide-react";

export default function PhotoGallery() {
  return (
    <>
    <motion.main variants={page} initial="initial" animate="animate" exit="exit" className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-6">
          Photo Gallery
        </motion.h1>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <motion.div variants={fadeUp} className="max-w-6xl space-y-12">
            
            {/* Gallery Introduction */}
            <section className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                <Camera className="text-primary" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Visualizing Our Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                Capturing moments of transformation across Nigeria and Sub-Saharan Africa. Managed by the <strong>Communications, Advocacy, and External Relations Department</strong>, this gallery documents our evidence-based programming and the vibrant energy of the 10,000+ youth we have empowered.
              </p>
            </section>

            {/* Gallery Categories / Albums */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Album 1: Capacity Building */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 shadow-sm transition-all hover:shadow-lg">
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-sm font-medium">In-person employability workshops and skill acquisition cohorts.</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">Training & Mentorship</h4>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Users size={12} /> 10,000+ Youth Impacted
                    </p>
                  </div>
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Education</span>
                </div>
              </div>

              {/*  Climate & Green Innovation */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-300 border border-gray-200 shadow-sm transition-all hover:shadow-lg">
                   
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-sm font-medium">Leading advocacy for green innovation and climate entrepreneurship.</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">Climate Action</h4>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Lightbulb size={12} /> SDG 13 Focused
                    </p>
                  </div>
                  <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Green Hub</span>
                </div>
              </div>

              {/* Album 3: Community & Stakeholder Outreach */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 shadow-sm transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-sm font-medium">High-level dialogues with policymakers and strategic program partners.</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">Stakeholder Engagement</h4>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin size={12} /> Abuja, Minna & Lagos
                    </p>
                  </div>
                  <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Advocacy</span>
                </div>
              </div>

            </div>

            {/* Core Values / Cultural Grid */}
            <section className="pt-12 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-8">Our Identity in Action</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-6 bg-gray-50 rounded-2xl text-center space-y-2">
                  <Heart className="text-red-500 mx-auto" size={24} />
                  <span className="block font-bold text-gray-900 text-sm">Empathy</span>
                  <p className="text-[10px] text-gray-500">Rooted in community needs</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl text-center space-y-2">
                  <ShieldCheck className="text-green-500 mx-auto" size={24} />
                  <span className="block font-bold text-gray-900 text-sm">Integrity</span>
                  <p className="text-[10px] text-gray-500">Accountability in all projects</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl text-center space-y-2">
                  <Lightbulb className="text-yellow-500 mx-auto" size={24} />
                  <span className="block font-bold text-gray-900 text-sm">Innovation</span>
                  <p className="text-[10px] text-gray-500">Adaptive delivery models</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl text-center space-y-2">
                  <Users className="text-blue-500 mx-auto" size={24} />
                  <span className="block font-bold text-gray-900 text-sm">Inclusion</span>
                  <p className="text-[10px] text-gray-500">Gender & social equity</p>
                </div>
              </div>
            </section>

            {/* Media Access Note */}
            <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 text-center">
              <p className="text-gray-500 italic text-sm max-w-2xl mx-auto">
                "Our photo gallery is a testament to GMI’s commitment to high-quality career development. We ensure our visual assets represent the diversity of Nigerian youth as they transition from potential to professional impact."
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