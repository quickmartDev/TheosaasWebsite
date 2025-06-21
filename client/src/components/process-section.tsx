import { motion } from "framer-motion";

const processSteps = [
  {
    weeks: "1-2",
    title: "Discovery & Planning",
    description: "Deep dive into your vision, market analysis, and technical architecture planning. We define the MVP scope and create detailed specifications.",
    phases: [
      {
        title: "Requirements Gathering",
        description: "Stakeholder interviews, user research, feature prioritization"
      },
      {
        title: "Technical Planning",
        description: "Architecture design, tech stack selection, integration planning"
      },
      {
        title: "Project Setup",
        description: "Team allocation, development environment, project management"
      }
    ],
    color: "bg-primary"
  },
  {
    weeks: "3-4",
    title: "Design & Development",
    description: "Parallel design and development workflow. UI/UX creation alongside backend development ensures rapid progress without compromising quality.",
    phases: [
      {
        title: "UI/UX Design",
        description: "Wireframes, mockups, interactive prototypes, design system"
      },
      {
        title: "Core Development",
        description: "Backend APIs, database setup, authentication, core features"
      },
      {
        title: "Frontend Build",
        description: "React components, responsive design, user interactions"
      }
    ],
    color: "bg-secondary"
  },
  {
    weeks: "5-6",
    title: "Testing & Launch",
    description: "Rigorous testing, deployment, and launch preparation. We ensure your MVP is production-ready with monitoring and analytics in place.",
    phases: [
      {
        title: "Quality Assurance",
        description: "Automated testing, manual QA, performance optimization"
      },
      {
        title: "Deployment",
        description: "Cloud infrastructure, CI/CD pipeline, security configuration"
      },
      {
        title: "Launch Support",
        description: "Monitoring setup, analytics, documentation, training"
      }
    ],
    color: "bg-accent"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our 6-Week MVP Process</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A proven methodology that takes you from concept to launch in just 6 weeks, with clear milestones and regular communication.
          </p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{step.weeks}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">{step.title}</h3>
                  <p className="text-neutral-600 mb-6">{step.description}</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {step.phases.map((phase) => (
                      <div key={phase.title} className={`${index === 2 ? 'bg-green-50' : 'bg-blue-50'} p-4 rounded-lg`}>
                        <h4 className="font-semibold text-neutral-900 mb-2">{phase.title}</h4>
                        <p className="text-sm text-neutral-600">{phase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
