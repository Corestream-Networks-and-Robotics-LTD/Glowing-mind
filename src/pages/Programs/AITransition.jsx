
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/ai.jpg";
import { page, fadeUp } from "../../animations/variants";

export default function AITransition() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit">
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold">AI Transition Program</h1>
          <p className="mt-6 text-xl">
            Preparing youth for the future of work in the age of artificial intelligence.
          </p>
        </motion.div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-6 text-center">
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-lg text-gray-700">
          The AI Transition Program equips young people with foundational AI literacy,
          digital skills, and ethical understanding needed to adapt, compete, and thrive
          in rapidly evolving technology-driven economies.
        </motion.p>
      </section>

      <Footer />
    </motion.div>
  );
}
