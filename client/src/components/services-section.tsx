import { motion } from "framer-motion";
import { UserCheck, Code, Palette, Rocket, Cloud, TrendingUp, Brain } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Fractional CTO Leadership",
    description: "Strategic technical guidance from experienced leaders. Our CTOs provide architecture decisions, technology stack selection, and development roadmaps.",
    features: [
      "Technology strategy & roadmap",
      "Architecture & scalability planning",
      "Team leadership & mentoring"
    ],
    color: "bg-primary"
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Leverage cutting-edge AI capabilities to enhance your product. From chatbots to predictive analytics, we integrate AI solutions that drive real business value.",
    features: [
      "LLM integration (GPT, Claude)",
      "Custom AI model development",
      "Intelligent automation workflows"
    ],
    color: "bg-secondary"
  },
  {
    icon: Rocket,
    title: "MVP & Full-Stack Development",
    description: "Your dedicated technical team delivering through lean, iterative releases. We ship working software continuously, gathering feedback and evolving your product with each sprint.",
    features: [
      "React, Node.js, Python development",
      "Rapid prototyping & feature prioritization",
      "Database design & API integrations"
    ],
    color: "bg-accent"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts. From wireframes to high-fidelity prototypes, we create intuitive interfaces that users love.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Responsive design systems"
    ],
    color: "bg-primary"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud architecture on AWS, Azure, or GCP. From deployment to monitoring, we handle your infrastructure needs.",
    features: [
      "Cloud architecture design",
      "DevOps & CI/CD pipelines",
      "Security & compliance"
    ],
    color: "bg-secondary"
  },
  {
    icon: TrendingUp,
    title: "Growth & Analytics",
    description: "Data-driven insights to fuel growth. We implement analytics, A/B testing, and optimization strategies to maximize your product's success.",
    features: [
      "Analytics implementation",
      "A/B testing frameworks",
      "Performance optimization"
    ],
    color: "bg-accent"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Complete SaaS Development Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end expertise to transform your vision into a market-ready product.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-neutral-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-4">
                {service.description}
              </p>
              <ul className="text-sm text-neutral-500 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
