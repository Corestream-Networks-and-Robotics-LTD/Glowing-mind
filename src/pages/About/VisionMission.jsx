
import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import heroVision from "../../assets/images/heroes/vision-hero.jpg";

export default function VisionMission() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      
      <div
        className="relative h-[420px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroVision})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-5xl font-extrabold mb-4"
          >
            Vision & Mission
          </motion.h1>
          <p className="text-gray-200 max-w-3xl text-lg">
            Our commitment to building a self-reliant, skilled, and empowered
            generation of young Africans.
          </p>
        </div>
      </div>

      
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Our Vision",
                text: "An African society where all youths are employed, empowered, and self-reliant."
              },
              {
                title: "Our Mission",
                text: "To empower young people with relevant skills, opportunities, and policies that enable sustainable livelihoods."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-blue-300 p-10 rounded-2xl shadow-sm"
              >
                <h2 className="text-blue-600 font-bold uppercase mb-4">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-900">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-white p-12 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Theory of Change</h3>
            <p className="text-lg italic text-gray-200 leading-relaxed">
              If young people are equipped with skills, opportunities, and a
              voice in governance, they will drive economic growth, climate
              solutions, and social transformation.
            </p>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
