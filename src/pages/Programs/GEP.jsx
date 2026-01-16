
import { motion } from "framer-motion";
import {
  page,
  stagger,
  fadeUp
} from "../../animations/variants";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/gep-hero.jpg";

export default function GraduateEmployability() {
  return (
    <motion.div
      variants={page}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white"
    >
      {/* HERO */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Graduate Employability Program (GEP)
          </h1>
          <p className="text-lg md:text-xl mt-6 leading-relaxed">
            A career readiness program empowering fresh graduates with
            employability and soft skills to search, secure, and retain jobs.
          </p>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4">Program Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Graduate Employability Program (GEP) was designed to address
              the growing unemployment and skills mismatch facing fresh
              graduates in Nigeria. The program equips participants with
              workplace readiness, digital literacy, communication, and career
              navigation skills required in today’s labor market.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-blue-50 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4">Program Snapshot</h3>
            <ul className="space-y-3 text-gray-800">
              <li><strong>Target Audience:</strong> Fresh Unemployed Graduates</li>
              <li><strong>Geographic Coverage:</strong> Nigeria</li>
              <li><strong>Delivery:</strong> Hybrid (Virtual & Physical)</li>
              <li><strong>Cohorts Implemented:</strong> 4</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* KEY ACTIVITIES */}
      <section className="bg-gray-50 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12">
            Key Activities
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Training & Capacity Building",
              "Internship Opportunities",
              "Post-Training Support",
              "Career Fairs"
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* IMPACT */}
      <section className="py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Impact & Outcomes</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through GEP, Glowing Minds Initiatives has strengthened graduate
            workforce readiness, improved access to career opportunities, and
            supported young people in transitioning from education to decent
            work, directly contributing to SDG 4 and SDG 8.
          </p>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
}
