import { motion } from "framer-motion";

const values = [
  {
    number: "60%",
    title: "Cost Savings",
    description: "Leverage our Nigerian talent network for world-class development at a fraction of traditional costs."
  },
  {
    number: "6",
    title: "Weeks to MVP",
    description: "Rapid development cycles that get your product to market faster than traditional agencies."
  },
  {
    number: "24/7",
    title: "Global Coverage",
    description: "Round-the-clock development with teams across Toronto and Nigeria time zones."
  }
];

export default function ValuePropositionSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white space-y-8"
        >
          <h2 className="text-4xl font-bold mb-4">Why Founders Choose Theosaas</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our unique approach combines Toronto expertise with global talent, delivering exceptional results at unprecedented speed and cost efficiency.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-accent mb-4">{value.number}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-blue-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
