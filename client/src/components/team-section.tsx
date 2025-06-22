import { motion } from "framer-motion";
import { Check } from "lucide-react";

const torontoFeatures = [
  {
    title: "Strategic Oversight",
    description: "Direct access to C-level expertise for critical decisions"
  },
  {
    title: "Local Partnership",
    description: "In-person collaboration and Canadian business understanding"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous standards and continuous project oversight"
  }
];

const globalFeatures = [
  {
    title: "Top 1% Talent",
    description: "Rigorous screening process ensures only the best developers"
  },
  {
    title: "AI & ML Expertise",
    description: "Specialized skills in LLMs, machine learning, and AI integration"
  },
  {
    title: "Modern Stack Expertise",
    description: "Cutting-edge skills in React, Node.js, Python, and cloud platforms"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We work as your dedicated technical team, delivering through lean iterations. Toronto leadership combined with global engineering talent ensures continuous value delivery with each sprint.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Diverse tech consulting team in modern office"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Toronto Leadership</h3>
              <p className="text-neutral-600 mb-6">
                Our Toronto-based leadership team brings decades of experience in scaling tech companies, having worked with everyone from early-stage startups to Fortune 500 enterprises.
              </p>
              <div className="space-y-4">
                {torontoFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">{feature.title}</h4>
                      <p className="text-neutral-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Skilled developers working on modern tech projects"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Global Engineering Excellence</h3>
              <p className="text-neutral-600 mb-6">
                Our global tech talent pool is among the most skilled and innovative. Our carefully vetted engineering team delivers enterprise-grade solutions with AI-powered capabilities and remarkable efficiency.
              </p>
              <div className="space-y-4">
                {globalFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">{feature.title}</h4>
                      <p className="text-neutral-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
