
import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import heroGovernance from "../../assets/images/heroes/governance-hero.jpg";

export default function Governance() {
  const departments = [
    "Programs, Impact & Learning",
    "Finance, Administration & Operations",
    "Resource Mobilization & Partnerships",
    "Communications, Advocacy & External Relations",
    "People, Governance & Systems"
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      {/* HERO */}
      <div
        className="relative h-[420px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroGovernance})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-5xl font-extrabold"
          >
            Governance & Structure
          </motion.h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-14">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 max-w-3xl"
          >
            GMI operates under a robust governance framework led by a Board of
            Directors and Executive Management to ensure accountability,
            transparency, and impact.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, i) => (
              <motion.div
                key={dept}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-blue-300 p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-bold">{dept}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
