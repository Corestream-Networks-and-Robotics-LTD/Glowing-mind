
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/hub.jpg";
import { page, fadeUp } from "../../animations/variants";

export default function GlowingMindsHub() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit">
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold">Glowing Minds Hub (Suleja)</h1>
          <p className="mt-6 text-xl">
            A physical innovation and learning hub for youth development and enterprise.
          </p>
        </motion.div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-6 text-center">
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-lg text-gray-700">
          The Glowing Minds Hub serves as a collaborative space for training,
          incubation, mentorship, and community engagement—supporting young people
          to transform ideas into sustainable solutions.
        </motion.p>
      </section>

      <Footer />
    </motion.div>
  );
}
