
import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/thematic-areas.jpg";

const areas = [
  {
    title: "Youth Employability & Skills Development",
    description:
      "We equip young people with practical, future-ready skills that improve employability, productivity, and income generation. Our interventions bridge the gap between education and the labour market through experiential learning, career readiness, and workforce alignment."
  },
  {
    title: "Entrepreneurship & Innovation",
    description:
      "We nurture entrepreneurial mindsets and support youth-led enterprises through training, mentorship, incubation, and access to markets. Our programs encourage innovation as a tool for solving social, economic, and environmental challenges."
  },
  {
    title: "Climate Action & Sustainability",
    description:
      "We empower young people to actively participate in climate solutions by building green skills, supporting climate entrepreneurship, and promoting inclusive participation in climate governance and sustainable development initiatives."
  },
  {
    title: "Gender Inclusion & Social Equity",
    description:
      "We promote gender equity and inclusion by ensuring young women and marginalized groups have access to opportunities, leadership pathways, and safe spaces for participation in economic and civic life."
  },
  {
    title: "Civic Engagement & Governance",
    description:
      "We strengthen youth participation in governance and policy processes by promoting civic education, advocacy, leadership development, and evidence-based policy engagement."
  }
];

export default function ThematicAreas() {
  return (
    <div className="bg-blue-300">
      
      <section
        className="pt-40 pb-28 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Our Thematic Areas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-blue-100"
          >
            Our work is anchored on strategic thematic areas that address youth
            unemployment, inequality, climate vulnerability, and weak civic participation.
          </motion.p>
        </div>
      </section>

      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}
