import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Brain, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactInquiry } from "@/types/contact";

const features = [
  {
    icon: Clock,
    title: "Lean Iterations",
    description: "Ship working software continuously",
    color: "bg-primary"
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Integrate cutting-edge AI capabilities",
    color: "bg-accent"
  },
  {
    icon: MapPin,
    title: "Dedicated Team",
    description: "Work with us like your own tech team",
    color: "bg-secondary"
  }
];

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    stage: "",
    description: "",
    budget: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "We'll respond within 24 hours with a custom project roadmap.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        stage: "",
        description: "",
        budget: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name, email, and project description.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4">Ready to Build Your MVP?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your AI-powered SaaS product to market as fast as possible. Let's discuss your project and create a custom roadmap with intelligent features that set you apart.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className={`w-8 h-8 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <img
                src="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300"
                alt="Toronto skyline with CN Tower and financial district"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <Label htmlFor="stage">Project Stage</Label>
                <Select value={formData.stage} onValueChange={(value) => handleInputChange("stage", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idea">Early Idea</SelectItem>
                    <SelectItem value="planning">Planning Phase</SelectItem>
                    <SelectItem value="design">Design Ready</SelectItem>
                    <SelectItem value="development">Need Development</SelectItem>
                    <SelectItem value="mvp">MVP Upgrade</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Tell us about your SaaS idea, target market, and key features..."
                  rows={4}
                  required
                />
              </div>

              <div>
                <Label htmlFor="budget">Estimated Budget</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25k-50k">$1.5k - $25k CAD</SelectItem>
                    <SelectItem value="25k-50k">$25k - $50k CAD</SelectItem>
                    <SelectItem value="50k-100k">$50k - $100k CAD</SelectItem>
                    <SelectItem value="100k-200k">$100k - $200k CAD</SelectItem>
                    <SelectItem value="200k+">$200k+ CAD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                {contactMutation.isPending ? "Submitting..." : "Get Your Free Project Roadmap"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-sm text-neutral-500 text-center">
                We'll respond within 24 hours with a custom project roadmap and timeline.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
