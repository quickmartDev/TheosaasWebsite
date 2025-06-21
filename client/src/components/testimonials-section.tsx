import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jessica Davis",
    role: "CEO, HealthTech Startup",
    initials: "JD",
    color: "bg-primary",
    testimonial: "Theosaas delivered our telehealth platform in exactly 6 weeks as promised. The combination of Toronto oversight and Nigerian talent gave us enterprise-quality development at a fraction of the cost. We've raised $2M since launch."
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, FinTech Solution",
    initials: "MR",
    color: "bg-secondary",
    testimonial: "The fractional CTO model was perfect for our stage. We got senior-level strategic guidance without the overhead, and their team built a scalable payment platform that handles millions in transactions."
  },
  {
    name: "Sarah Kim",
    role: "Co-founder, EdTech Platform",
    initials: "SK",
    color: "bg-accent",
    testimonial: "Impressed by the speed and quality. Our learning management system went from concept to 10,000 active users in just 3 months. The 60% cost savings allowed us to invest more in marketing and growth."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">What Founders Say</h2>
          <p className="text-xl text-neutral-600">Real results from real founders who trusted us with their vision</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-neutral-50 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                  <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-600 italic">"{testimonial.testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
