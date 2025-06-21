import { MapPin, Mail, Phone } from "lucide-react";

const services = [
  "Fractional CTO",
  "Full-Stack Development", 
  "UI/UX Design",
  "MVP Development",
  "Cloud Infrastructure"
];

const company = [
  "About Us",
  "Our Process", 
  "Case Studies",
  "Blog",
  "Careers"
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Theosaas Consulting</h3>
              <p className="text-gray-300 mb-4">
                Toronto-based, founder-friendly tech partner turning early-stage ideas into revenue-ready SaaS products.
              </p>
            </div>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Toronto, Ontario, Canada
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                hello@theosaas.com
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +1 (647) 555-0123
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© 2024 Theosaas Consulting. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
