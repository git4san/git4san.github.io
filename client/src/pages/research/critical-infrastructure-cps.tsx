import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Cpu, AlertTriangle, Wrench, TrendingUp, ChevronUp, ChevronDown, Zap, Globe } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';

export default function CriticalInfrastructureCPS() {
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
    { href: '#latest-trends', label: 'Latest Trends' },
    { href: '#challenges', label: 'Key Challenges' },
    { href: '#solutions', label: 'Solutions & Mitigations' },
    { href: '#future-outlook', label: 'Future Outlook' }
  ];

  const latestTrends = [
    {
      title: "Increased Use of AI and Machine Learning",
      content: "AI and machine learning are playing crucial roles in the detection and response to potential threats in real-time. Algorithms are becoming more sophisticated, helping identify patterns that indicate malicious activities within CI and CPS networks."
    },
    {
      title: "Integration of Zero Trust Architectures",
      content: "Zero Trust security models are being adopted across critical infrastructures to limit access to sensitive areas, ensuring that every user, device, and system component is verified and authenticated before gaining access."
    },
    {
      title: "Use of Digital Twins for Enhanced Security",
      content: "Digital twins, or virtual replicas of physical assets, are being used to simulate potential cyber-attacks and test security measures without affecting real operations. This proactive approach aids in identifying vulnerabilities and enhancing security strategies."
    },
    {
      title: "Blockchain-Based Security Solutions",
      content: "Blockchain technology is being leveraged for secure data management and transaction tracking, ensuring tamper-resistant logs and enhancing trust in CI and CPS data exchanges."
    }
  ];

  const keyChallenges = [
    {
      title: "Legacy Systems with Limited Upgrades",
      content: "Many critical infrastructures still rely on outdated systems that are difficult to upgrade or patch, making them vulnerable to modern cyber-attacks."
    },
    {
      title: "Increasing Sophistication of Cyber Threats",
      content: "Threat actors are developing more advanced techniques such as AI-driven malware, ransomware, and multi-stage attacks that specifically target vulnerabilities in CI and CPS."
    },
    {
      title: "Complexity of Monitoring and Response",
      content: "Monitoring CI and CPS environments is a complex task due to the vast amount of data and diverse types of connected devices. Ensuring effective real-time response without false alarms remains a significant challenge."
    }
  ];

  const solutions = [
    {
      title: "Adoption of Advanced Threat Detection Tools",
      content: "New threat detection tools powered by machine learning and deep analytics are being used to detect anomalies and suspicious behavior early, preventing potential breaches."
    },
    {
      title: "Cybersecurity Frameworks and Standards",
      content: "Adhering to cybersecurity frameworks like NIST, IEC 62443, and ISO/IEC 27001 helps organizations implement best practices for securing CI and CPS."
    },
    {
      title: "Training and Awareness Programs",
      content: "Regular training programs for employees and stakeholders ensure that they are aware of security protocols and can respond effectively in the event of a cyber-attack."
    },
    {
      title: "Collaboration with Government and Industry",
      content: "Collaborative efforts between private organizations, government bodies, and cybersecurity experts are essential for sharing intelligence, developing robust policies, and enhancing overall security postures."
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
            
            <div className="bg-gradient-to-r from-green-800 to-green-900 text-white p-8 rounded-2xl text-center border-b-4 border-green-500">
              <h1 className="text-4xl font-bold mb-2">Critical Infrastructure & CPS Security Research</h1>
              <p className="text-lg">by <span className="text-yellow-300 font-semibold">Sanoop Mallissery</span></p>
            </div>
          </div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-green-500 rounded-2xl p-6 mb-8"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="bg-green-400 hover:bg-green-300 text-green-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-green-700 border-b-2 border-green-700 pb-3">
              <Shield className="w-6 h-6" />
              Overview
            </h2>
            <p className="text-justify leading-relaxed text-green-800 dark:text-foreground">
              Critical Infrastructure (CI) and Cyber-Physical Systems (CPS) are vital for the functioning of modern society, including energy grids, transportation systems, and industrial control systems. These systems are increasingly interconnected, making them targets for sophisticated cyber-attacks. Securing CI and CPS is paramount to ensure safety, reliability, and operational continuity.
            </p>
          </motion.section>

          {/* Latest Trends Section */}
          <motion.section
            id="latest-trends"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-green-700 border-b-2 border-green-700 pb-3">
              <TrendingUp className="w-6 h-6" />
              Latest Trends in CI & CPS Security
            </h2>
            
            <div className="space-y-4">
              {latestTrends.map((trend, index) => (
                <div key={index} className="border border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(`trend-${index}`)}
                    className="w-full p-4 bg-green-500 hover:bg-green-400 text-white text-left flex items-center justify-between transition-colors"
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
                      className="p-4 bg-green-50 dark:bg-green-900/20"
                    >
                      <p className="text-green-800 dark:text-green-200">{trend.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Key Challenges Section */}
          <motion.section
            id="challenges"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-600 border-b-2 border-red-600 pb-3">
              <AlertTriangle className="w-6 h-6" />
              Key Challenges in Securing CI & CPS
            </h2>
            
            <div className="space-y-4">
              {keyChallenges.map((challenge, index) => (
                <div key={index} className="border border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(`challenge-${index}`)}
                    className="w-full p-4 bg-green-500 hover:bg-green-400 text-white text-left flex items-center justify-between transition-colors"
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
                      className="p-4 bg-green-50 dark:bg-green-900/20"
                    >
                      <p className="text-green-800 dark:text-green-200">{challenge.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Solutions Section */}
          <motion.section
            id="solutions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-600 border-b-2 border-blue-600 pb-3">
              <Wrench className="w-6 h-6" />
              Solutions & Mitigations
            </h2>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="border border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(`solution-${index}`)}
                    className="w-full p-4 bg-green-500 hover:bg-green-400 text-white text-left flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold">{solution.title}</span>
                    {expandedSections[`solution-${index}`] ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {expandedSections[`solution-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-green-50 dark:bg-green-900/20"
                    >
                      <p className="text-green-800 dark:text-green-200">{solution.content}</p>
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
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-purple-600 border-b-2 border-purple-600 pb-3">
              <Globe className="w-6 h-6" />
              Future Outlook
            </h2>
            <p className="text-justify leading-relaxed mb-6 text-green-800 dark:text-foreground">
              The future of CI and CPS security will see a deeper integration of AI and machine learning for predictive threat analysis, quantum-resistant encryption for safeguarding communications, and more automated responses to cyber incidents. Global cooperation and continuous innovation will be pivotal to stay ahead of evolving cyber threats.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Cpu,
                  title: "AI-Driven Predictive Analysis",
                  desc: "Advanced AI systems for predicting and preventing cyber threats before they occur"
                },
                {
                  icon: Shield,
                  title: "Quantum-Resistant Encryption",
                  desc: "Next-generation cryptographic methods to protect against quantum computing threats"
                },
                {
                  icon: Zap,
                  title: "Automated Response Systems",
                  desc: "Intelligent systems that can automatically respond to and mitigate cyber incidents"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (0.1 * index) }}
                  className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800"
                >
                  <item.icon className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">{item.title}</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Insights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Research Insights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Critical Security Measures</h4>
                <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Zero Trust Architecture implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    AI-powered threat detection systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Digital twin security modeling
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">Implementation Challenges</h4>
                <ul className="space-y-2 text-sm text-orange-600 dark:text-orange-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Legacy system modernization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Advanced persistent threats
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Complex monitoring requirements
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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
            className="mt-12 bg-green-800 text-white text-center py-6 rounded-lg border-t-4 border-green-500"
          >
            <p>&copy; 2024 Critical Infrastructure & CPS Security Research. All Rights Reserved.</p>
            <p className="mt-2">Created by <span className="text-yellow-300 font-semibold">Sanoop Mallissery</span></p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}