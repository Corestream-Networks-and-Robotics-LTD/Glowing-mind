
import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import heroImage from "../../assets/images/why-we-exist-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyWeExist() {
  return (
    <div className="bg-white">

      
      <div
        className="relative h-[420px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative px-6 max-w-4xl space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Why Glowing Minds Initiatives Exists
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            Glowing Minds Initiatives (GMI) is a youth-led nonprofit and social enterprise
            established to bridge the widening gap between formal education and the
            practical skills required by today’s labor market. Founded in response to
            high youth unemployment and economic vulnerability, GMI empowers young Africans
            to become self-reliant economic drivers and active contributors to society.
          </p>
        </motion.div>
      </div>

      {/* Main*/}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            The Core Problem
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-lg ">
            <div className=" bg-blue-200 p-8 md:p-14 rounded-3xl">
              <strong>Skills Mismatch</strong>
              <p className="mt-2">
                Many graduates leave tertiary institutions without workplace readiness,
                digital literacy, or entrepreneurial competencies required by the modern economy.
              </p>
            </div>

            <div className=" bg-blue-200 p-8 md:p-14 rounded-3xl">
              <strong>Economic Vulnerability</strong>
              <p className="mt-2">
                In 2018, nearly 1,000 indigent students at the Federal University of Technology,
                Minna, deferred studies due to unpaid fees—highlighting the lack of income-generating skills.
              </p>
            </div>

            <div className=" bg-blue-200 p-8 md:p-14 rounded-3xl">
              <strong>Systemic Exclusion</strong>
              <p className="mt-2">
                Women, persons with disabilities, and marginalized youth face disproportionate
                barriers to economic opportunities and leadership participation.
              </p>
            </div>

            <div className=" bg-blue-200 p-8 md:p-14 rounded-3xl">
              <strong>Climate & Policy Gaps</strong>
              <p className="mt-2"> 
                Young people are often excluded from green economy opportunities and treated
                as policy beneficiaries rather than co-creators.
              </p>
            </div>
          </div>
        </motion.section>

        
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="bg-blue-200 p-10 md:p-14 rounded-3xl space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Purpose & Mission
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            GMI exists to transform young Africans from policy beneficiaries into
            self-reliant economic drivers. Through skills development, inclusive
            opportunities, and policy engagement, we enable youth to drive climate
            solutions and participate meaningfully in society.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-lg text-gray-700">
            <div>
              <strong>Vision</strong>
              <p className="mt-2">
                An African society where all youths are employed and self-reliant.
              </p>
            </div>

            <div>
              <strong>Mission</strong>
              <p className="mt-2">
                To empower youth with knowledge and opportunities while advocating
                for policies that foster self-reliance.
              </p>
            </div>

            <div>
              <strong>Theory of Change</strong>
              <p className="mt-2">
                Equipped youth with skills, inclusive opportunities, and a voice
                in governance will drive sustainable development.
              </p>
            </div>
          </div>
        </motion.section>

        
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Strategic Impact Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-blue-950 text-lg  bg-blue-200 p-8 md:p-14 rounded-3xl">
            <p><strong>Youth Development & Employability:</strong> Workforce readiness and leadership training.</p>
            <p><strong>Entrepreneurship:</strong> Supporting youth-led enterprises and campus entrepreneurs.</p>
            <p><strong>Policy & Civic Engagement:</strong> Research and advocacy for youth inclusion.</p>
            <p><strong>Climate Action:</strong> Advancing green innovation and environmental stewardship.</p>
            <p><strong>Gender & Social Inclusion:</strong> Ensuring equitable participation for women and marginalized groups.</p>
          </div>
        </motion.section>
      </div>

      
      <Footer />
    </div>
  );
}
