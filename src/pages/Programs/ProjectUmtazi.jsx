import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/umtazi.jpg";
import { page, fadeUp } from "../../animations/variants";

export default function ProjectUmtazi() {
  return (
    <motion.div variants={page} initial="initial" animate="animate" exit="exit">
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold">Project Umtazi</h1>
          <p className="mt-6 text-xl">
            A community-centered initiative addressing youth economic vulnerability
            through skills, enterprise, and local engagement.
          </p>
        </motion.div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-6 text-center">
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-lg text-gray-700">
          Project Umtazi was designed to empower vulnerable youth with income-generating
          skills, entrepreneurship pathways, and community-based support systems
          that promote resilience and long-term economic inclusion.
        </motion.p>
      </section>

      <Footer />
    </motion.div>
  );
}
