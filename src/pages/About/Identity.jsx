
import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import heroIdentity from "../../assets/images/heroes/identity-hero.jpg";

export default function Identity() {
  return (
    <div className="bg-white min-h-screen flex flex-col">

      
      <div
        className="relative h-[420px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroIdentity})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-5xl font-extrabold"
          >
            Organisational Identity
          </motion.h1>
        </div>
      </div>


      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-14">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-700 bg-blue-200 p-10 rounded-2xl"
          >
            <p>
              Glowing Minds Initiatives was established in response to deep-rooted
              challenges affecting young people across Nigeria and Africa.
            </p>
            <p>
              In 2018, nearly 1,000 indigent students at FUT Minna deferred
              studies due to unpaid fees—highlighting a major skills and income
              gap within formal education.
            </p>
            <p>
              This experience gave rise to the Campus Entrepreneurs model and
              flagship programs such as GEP and SLEP.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-200 p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Why We Exist
            </h3>
            <p className="text-gray-700 text-lg">
              We exist to reduce youth unemployment, promote inclusion, expand
              climate opportunities, and strengthen youth participation in
              policy and governance.
            </p>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
