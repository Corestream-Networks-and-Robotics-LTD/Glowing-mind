import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/climate.jpg";
import { page, fadeUp, stagger } from "../../animations/variants";

export default function YoungClimateEntrepreneurs() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit">
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold">Young Climate Entrepreneurs</h1>
          <p className="mt-6 text-xl">
            Supporting youth-led green enterprises and climate innovation.
          </p>
        </motion.div>
      </section>

      <section className="py-20">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            "Green skills development",
            "Climate innovation support",
            "Youth climate leadership",
            "Sustainable enterprise models",
            "Environmental awareness",
            "Climate policy engagement"
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-blue-50 p-6 rounded-xl">
              {item}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
}
