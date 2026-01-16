
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import hero from "../../assets/images/heroes/sdg-hero.jpg";

const sdgs = [
  {
    number: 4,
    title: "Quality Education",
    desc:
      "GMI advances inclusive and equitable quality education by equipping young people with employability, leadership, digital, and entrepreneurial skills that bridge the gap between formal education and labor market needs."
  },
  {
    number: 5,
    title: "Gender Equality",
    desc:
      "Through intentional program design, GMI promotes the participation and leadership of women and girls, addressing structural barriers to economic opportunity and civic inclusion."
  },
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    desc:
      "GMI supports youth employment, enterprise development, and workforce readiness, enabling young Africans to become self-reliant economic actors and job creators."
  },
  {
    number: 13,
    title: "Climate Action",
    desc:
      "The organization advances youth-led climate innovation, environmental awareness, and green enterprise development to support local and global climate solutions."
  },
  {
    number: 16,
    title: "Peace, Justice & Strong Institutions",
    desc:
      "GMI strengthens youth participation in governance, policy advocacy, and civic engagement, positioning young people as co-creators of inclusive and accountable institutions."
  }
];

export default function SDGAlignment() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section
        className="pt-40 pb-28 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${hero})` }} 
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            SDG Alignment
          </h1>
          <p className="text-lg md:text-xl mt-5 leading-relaxed">
            Aligning youth-centered programs with the United Nations Sustainable
            Development Goals to drive local impact and global relevance.
          </p>
        </motion.div>
      </section>

      {/* SDG CARDS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {sdgs.map((sdg, i) => (
            <motion.div
              key={sdg.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="text-5xl font-extrabold text-blue-600 mb-4">
                SDG {sdg.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{sdg.title}</h3>
              <p className="text-gray-700 leading-relaxed">{sdg.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VISUAL ALIGNMENT */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            From Local Action to Global Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            GMI’s programs are intentionally designed to align grassroots
            interventions with global development priorities. By integrating
            skills development, entrepreneurship, climate action, gender
            inclusion, and civic engagement, our work delivers measurable
            outcomes that advance multiple SDGs simultaneously.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "Employability & Entrepreneurship Programs → SDGs 4 & 8",
              "Women & Youth Inclusion Initiatives → SDGs 5 & 10",
              "Climate Innovation & Green Skills → SDG 13",
              "Policy Labs & Civic Engagement → SDG 16",
              "Youth Leadership & Governance Training → SDGs 4, 8 & 16"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
