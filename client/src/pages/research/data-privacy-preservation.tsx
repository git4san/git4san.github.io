import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Cpu, Database, TrendingUp, AlertTriangle, Eye, ChevronUp, ChevronDown, Globe } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';

export default function DataPrivacyPreservation() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { href: '#overview', label: 'Overview' },
    { href: '#modern-techniques', label: 'Modern Techniques' },
    { href: '#emerging-trends', label: 'Emerging Trends' },
    { href: '#challenges', label: 'Challenges' },
    { href: '#future-outlook', label: 'Future Outlook' }
  ];

  const modernTechniques = [
    {
      title: "Differential Privacy",
      content: "Differential privacy ensures that statistical analyses on datasets do not compromise the privacy of individuals. This technique involves adding random noise to data queries, making it difficult to trace any specific data point back to an individual."
    },
    {
      title: "Federated Learning",
      content: "Federated learning allows models to be trained across decentralized devices or servers holding local data samples, without transferring actual data. This approach enhances privacy by keeping data on devices and only sharing model updates."
    },
    {
      title: "Homomorphic Encryption",
      content: "Homomorphic encryption enables computations on encrypted data without decryption. This ensures data remains protected throughout the processing phase and only the final results are decrypted, maintaining privacy even during complex operations."
    },
    {
      title: "Synthetic Data Generation",
      content: "Generating synthetic data helps to reduce privacy risks by creating artificial datasets that mimic the properties of real data without exposing actual personal data. This method is useful for testing and research without compromising user privacy."
    }
  ];

  const emergingTrends = [
    {
      title: "Privacy-Preserving Machine Learning (PPML)",
      content: "PPML involves developing AI models that can learn from data without accessing the underlying sensitive information. This is achieved using techniques like secure multiparty computation and encrypted machine learning protocols."
    },
    {
      title: "Blockchain for Data Privacy",
      content: "Blockchain technology provides decentralized, transparent, and tamper-resistant storage solutions. It enables secure data management by allowing only authorized access and embedding data privacy mechanisms at the protocol level."
    },
    {
      title: "Zero-Knowledge Proofs (ZKPs)",
      content: "ZKPs allow one party to prove to another that they know a value, without revealing the value itself. This can be used to authenticate and verify data transactions while maintaining strict privacy standards."
    },
    {
      title: "AI-Enhanced Privacy Analysis",
      content: "Machine learning models are increasingly used to identify vulnerabilities in data privacy by analyzing access patterns and predicting potential threats. This proactive approach aids in reinforcing data protection measures dynamically."
    }
  ];

  const challenges = [
    {
      title: "Balancing Privacy and Data Utility",
      content: "One of the main challenges is maintaining data utility while enforcing strong privacy measures. Methods that prioritize privacy, such as heavy data masking, can reduce the effectiveness of data-driven insights."
    },
    {
      title: "Regulatory Compliance Complexity",
      content: "Compliance with global and regional privacy laws like GDPR and CCPA can be challenging for multinational companies due to varying requirements. Ensuring adherence while managing cross-border data flows adds complexity."
    },
    {
      title: "Advanced Threats and Cyber Attacks",
      content: "Sophisticated cyber attacks and techniques, such as AI-driven data breaches, require equally advanced countermeasures. Privacy preservation must evolve to protect against emerging threats."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <Link href="/about" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to About
            </Link>
            
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-8 rounded-2xl text-center">
              <h1 className="text-4xl font-bold mb-2">Data Privacy Preservation Research</h1>
              <p className="text-lg">by <span className="text-yellow-300 font-semibold">Sanoop Mallissery</span></p>
            </div>
          </div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-600 rounded-2xl p-6 mb-8"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="bg-slate-500 hover:bg-slate-400 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Overview Section */}
          <motion.section
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-600 border-b-2 border-slate-600 pb-3">
              <Eye className="w-6 h-6" />
              Overview
            </h2>
            <p className="text-justify leading-relaxed">
              Data privacy has become a focal point in the tech industry due to increasing concerns about data misuse, breaches, and regulatory pressures. Organizations are continually adopting innovative methods to ensure that data remains private and secure while maintaining its utility for analysis and decision-making.
            </p>
          </motion.section>

          {/* Modern Techniques Section */}
          <motion.section
            id="modern-techniques"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-600 border-b-2 border-blue-600 pb-3">
              <Lock className="w-6 h-6" />
              Modern Techniques in Data Privacy Preservation
            </h2>
            
            <div className="space-y-4">
              {modernTechniques.map((technique, index) => (
                <div key={index} className="border border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(`technique-${index}`)}
                    className="w-full p-4 bg-slate-700 hover:bg-slate-600 text-white text-left flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold">{technique.title}</span>
                    {expandedSections[`technique-${index}`] ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSections[`technique-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-gray-50 dark:bg-gray-900/20"
                    >
                      <p className="text-gray-700 dark:text-gray-300">{technique.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Emerging Trends Section */}
          <motion.section
            id="emerging-trends"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-green-600 border-b-2 border-green-600 pb-3">
              <TrendingUp className="w-6 h-6" />
              Emerging Trends in Data Privacy Preservation
            </h2>
            
            <div className="space-y-4">
              {emergingTrends.map((trend, index) => (
                <div key={index} className="border border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(`trend-${index}`)}
                    className="w-full p-4 bg-slate-700 hover:bg-slate-600 text-white text-left flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold">{trend.title}</span>
                    {expandedSections[`trend-${index}`] ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSections[`trend-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-gray-50 dark:bg-gray-900/20"
                    >
                      <p className="text-gray-700 dark:text-gray-300">{trend.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Challenges Section */}
          <motion.section
            id="challenges"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-600 border-b-2 border-red-600 pb-3">
              <AlertTriangle className="w-6 h-6" />
              Challenges in Data Privacy Preservation
            </h2>
            
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="border border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(`challenge-${index}`)}
                    className="w-full p-4 bg-slate-700 hover:bg-slate-600 text-white text-left flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold">{challenge.title}</span>
                    {expandedSections[`challenge-${index}`] ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSections[`challenge-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-gray-50 dark:bg-gray-900/20"
                    >
                      <p className="text-gray-700 dark:text-gray-300">{challenge.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Future Outlook Section */}
          <motion.section
            id="future-outlook"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-purple-600 border-b-2 border-purple-600 pb-3">
              <Globe className="w-6 h-6" />
              Future Outlook
            </h2>
            <p className="text-justify leading-relaxed mb-6">
              The future of data privacy preservation will likely involve integrating quantum-resistant cryptography, developing more robust AI-based monitoring tools, and refining federated learning practices. Industry and academia will continue collaborating to address emerging privacy concerns and adapt to evolving digital landscapes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Quantum-Resistant Cryptography",
                  desc: "Advanced encryption methods that can withstand quantum computing attacks"
                },
                {
                  icon: Cpu,
                  title: "AI-Based Monitoring",
                  desc: "Intelligent systems for real-time privacy threat detection and mitigation"
                },
                {
                  icon: Database,
                  title: "Enhanced Federated Learning",
                  desc: "More sophisticated distributed learning approaches for privacy preservation"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (0.1 * index) }}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800"
                >
                  <item.icon className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">{item.title}</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Insights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-slate-600">Key Research Insights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Privacy-First Approaches</h4>
                <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Differential privacy for statistical protection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Homomorphic encryption for secure computation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Zero-knowledge proofs for verification
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Implementation Challenges</h4>
                <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Balancing privacy vs. data utility
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Complex regulatory compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Evolving threat landscape
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <ChevronUp className="w-5 h-5" />
                Back to Top
              </button>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-12 bg-slate-600 text-white text-center py-6 rounded-lg"
          >
            <p>&copy; 2024 Data Privacy Preservation Research. All Rights Reserved.</p>
            <p className="mt-2">Created by <span className="text-yellow-300 font-semibold">Sanoop Mallissery</span></p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}