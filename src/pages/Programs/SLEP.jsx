
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/slep.jpg";
import { page, fadeUp, stagger } from "../../animations/variants";

export default function StudentEntrepreneurship() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit">
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold">Student Leadership & Entrepreneurship Program (SLEP)</h1>
          <p className="mt-6 text-xl">Enabling students to earn while they learn through campus-based enterprises.</p>
        </motion.div>
      </section>

      <section className="py-20">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            "Entrepreneurship training for students",
            "Campus enterprise incubation",
            "Access to mentorship and markets",
            "Leadership and innovation development",
            "Income generation while studying",
            "Startup advisory and support"
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              {item}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
}
