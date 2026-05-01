import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Shield,
  Zap,
  Users,
} from 'lucide-react';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);

 const faqs = [
  {
    question: 'What services are offered?',
    answer:
      'Services include cutting-edge cybersecurity solutions, cloud architecture design, cloud assessment, cost optimizations, cloud migration, infrastructure deployment, monitoring, and managed services tailored to modern business environments.',
    category: 'Services',
    icon: <Zap size={20} className="text-orange-500" />,
  },
  {
    question: 'What cybersecurity solutions are provided?',
    answer:
      'Solutions cover Endpoint Security, EDR/XDR, MDR, Email Security, Data Loss Prevention, Endpoint Management, Patch Management, Mobile Device Management, Cloud Security, Application Security, API Security, AI Security, Brand Protection Security, Network Security, Identity and Access Management, Vulnerability Assessments & many more to protect critical systems and data.',
    category: 'Cybersecurity',
    icon: <Shield size={20} className="text-orange-500" />,
  },
  {
    question: 'Which cloud platforms are supported?',
    answer:
      'Solutions are designed to work across major cloud platforms, supporting multi-cloud and hybrid environments with a focus on scalability, performance, and security.',
    category: 'Cloud',
    icon: <Zap size={20} className="text-orange-500" />,
  },
  {
    question: 'How is data security ensured?',
    answer:
      'Data security is implemented through encryption, secure access controls, identity management, and continuous monitoring to prevent unauthorized access and data loss.',
    category: 'Security',
    icon: <Shield size={20} className="text-orange-500" />,
  },
  {
    question: 'Do you provide ongoing monitoring and support?',
    answer:
      'Yes, continuous monitoring, maintenance, and support services are available to ensure system reliability, performance, and security over time.',
    category: 'Support',
    icon: <Users size={20} className="text-orange-500" />,
  },
  {
    question: 'Can solutions be customized based on business needs?',
    answer:
      'All solutions are tailored to align with specific business requirements, infrastructure, and security objectives.',
    category: 'Solutions',
    icon: <Users size={20} className="text-orange-500" />,
  },
  {
    question: 'How do you ensure scalability in cloud environments?',
    answer:
      'Cloud architectures are designed with auto-scaling, load balancing, and resource optimization to handle varying workloads efficiently.',
    category: 'Cloud',
    icon: <Zap size={20} className="text-orange-500" />,
  },
  {
    question: 'What is your approach to security architecture?',
    answer:
      'A layered security model is followed, incorporating Zero Trust principles, network segmentation, and continuous threat monitoring to strengthen overall security posture.',
    category: 'Security',
    icon: <Shield size={20} className="text-orange-500" />,
  },
  {
    question: 'How do you handle compliance and risk management?',
    answer:
      'Solutions are designed following industry best practices and frameworks, with regular assessments to identify risks and maintain compliance readiness.',
    category: 'Compliance',
    icon: <Shield size={20} className="text-orange-500" />,
  },
  {
    question: 'How can support or consultation be requested?',
    answer:
      'Support or consultation can be requested through the contact page or by scheduling an appointment for a detailed discussion.',
    category: 'Contact',
    icon: <HelpCircle size={20} className="text-orange-500" />,
  },
];

  return (
    <div className="bg-white text-black py-20 px-2 sm:px-0 relative overflow-hidden">
      {/* Subtle orange grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #fb923c 1px, transparent 0), radial-gradient(circle at 22px 22px, #f97316 1px, transparent 0)',
          backgroundSize: '44px 44px',
          zIndex: 0,
        }}
      />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-light">
            Everything you need to know about our services, solutions, and how we work.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border border-orange-100 rounded-2xl shadow-md backdrop-blur-md transition-all duration-200 ${
                activeFaq === index
                  ? 'ring-2 ring-orange-500 scale-[1.01]'
                  : 'hover:scale-[1.01] hover:shadow-lg'
              }`}
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-11 h-11 bg-orange-50 flex items-center justify-center rounded-full border border-orange-100 shadow-sm">
                    {faq.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase text-orange-500 font-semibold mb-1 tracking-wider">
                      {faq.category}
                    </p>
                    <h3 className="text-base font-semibold text-black leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div
                  className={`transform transition-transform duration-200 ${
                    activeFaq === index
                      ? 'rotate-180 text-orange-500'
                      : 'text-orange-400'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <div
                className={`px-6 pb-5 text-slate-700 transition-all duration-300 ease-in-out ${
                  activeFaq === index
                    ? 'max-h-60 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="ml-14 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 text-base mb-3">
            Still can&apos;t find what you&apos;re looking for?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
                Contact Support
              </button>
            </a>
            <a href="/appointment">
              <button className="border border-orange-500 hover:bg-orange-50 text-orange-600 px-8 py-3 rounded-full font-semibold transition-all duration-200 bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400">
                Schedule an Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
