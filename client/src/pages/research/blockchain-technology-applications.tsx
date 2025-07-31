import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Blocks, TrendingUp, Cpu, AlertTriangle, Globe, ChevronUp, ChevronDown, Zap, Shield } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';

export default function BlockchainTechnologyApplications() {
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
    { href: '#introduction', label: 'Introduction' },
    { href: '#trends', label: 'Latest Trends' },
    { href: '#applications', label: 'Applications' },
    { href: '#challenges', label: 'Challenges' },
    { href: '#future', label: 'Future Outlook' }
  ];

  const latestTrends = [
    {
      title: "1. Blockchain for Sustainable Development",
      content: "Blockchain is being increasingly adopted to enhance sustainability efforts, such as tracking carbon credits and ensuring ethical sourcing in supply chains. Its immutable nature ensures that data related to environmental and social impact remains transparent."
    },
    {
      title: "2. Interoperability Among Blockchain Networks",
      content: "The push for blockchain interoperability aims to allow seamless interaction between different blockchain networks. Technologies like Polkadot and Cosmos are at the forefront, enabling cross-chain transactions and data sharing to break down silos and improve scalability."
    },
    {
      title: "3. Decentralized Finance (DeFi) Growth",
      content: "DeFi has emerged as a major trend, providing financial services without the need for traditional banking systems. Smart contracts facilitate everything from lending and borrowing to trading and insurance, creating an open financial system accessible to anyone with internet access."
    },
    {
      title: "4. Adoption of Non-Fungible Tokens (NFTs)",
      content: "NFTs have gained mainstream attention, representing ownership of unique digital assets such as art, music, and virtual real estate. This trend has opened new avenues for artists and creators, reshaping industries like gaming and entertainment."
    }
  ];

  const challenges = [
    {
      title: "1. Scalability",
      content: "Blockchain networks often face scalability issues due to the need to validate and replicate transactions across nodes. Solutions such as sharding and Layer 2 scaling are being explored to improve throughput."
    },
    {
      title: "2. Energy Consumption",
      content: "Proof-of-work (PoW) blockchains consume vast amounts of energy, raising concerns about their environmental impact. New consensus mechanisms like Proof-of-Stake (PoS) are helping to reduce this footprint."
    },
    {
      title: "3. Regulatory Uncertainty",
      content: "Governments around the world are still working to define regulations for blockchain applications. This uncertainty can hinder innovation and adoption as businesses navigate a complex legal landscape."
    }
  ];

  const applications = [
    {
      title: "Finance",
      desc: "Secure, transparent, and low-cost cross-border payments, smart contracts for automated financial agreements, and digital identities for secure banking access."
    },
    {
      title: "Healthcare",
      desc: "Secure patient data management and sharing, ensuring data integrity, and enhancing drug traceability."
    },
    {
      title: "Supply Chain Management",
      desc: "Real-time tracking of goods, transparency in the origin of products, and mitigation of counterfeiting."
    },
    {
      title: "Voting Systems",
      desc: "Secure, tamper-proof digital voting platforms that enhance trust and participation in democratic processes."
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
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl text-center border-b-4 border-blue-500">
              <h1 className="text-4xl font-bold mb-2">Blockchain Technology & Applications Research</h1>
              <p className="text-lg">by <span className="text-yellow-300 font-semibold">Sanoop Mallissery</span></p>
            </div>
          </div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-blue-500 rounded-2xl p-6 mb-8"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="bg-blue-400 hover:bg-blue-300 text-blue-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Introduction Section */}
          <motion.section
            id="introduction"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-600 border-b-2 border-blue-600 pb-3">
              <Blocks className="w-6 h-6" />
              Introduction
            </h2>
            <p className="text-justify leading-relaxed text-blue-800 dark:text-foreground">
              Blockchain technology has revolutionized the digital landscape by providing a decentralized, secure, and transparent way of recording transactions. Originally designed to support Bitcoin, blockchain has expanded far beyond cryptocurrencies into sectors such as finance, supply chain, healthcare, and more. Its fundamental structure as a distributed ledger ensures trust and removes the need for intermediaries.
            </p>
          </motion.section>

          {/* Latest Trends Section */}
          <motion.section
            id="trends"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-600 border-b-2 border-blue-600 pb-3">
              <TrendingUp className="w-6 h-6" />
              Latest Trends in Blockchain Technology
            </h2>
            
            <div className="space-y-4">
              {latestTrends.map((trend, index) => (
                <div key={index} className="border border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(`trend-${index}`)}
                    className="w-full p-4 bg-blue-500 hover:bg-blue-400 text-white text-left flex items-center justify-between transition-colors"
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
                      className="p-4 bg-blue-50 dark:bg-blue-900/20"
                    >
                      <p className="text-blue-800 dark:text-blue-200">{trend.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Applications Section */}
          <motion.section
            id="applications"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-green-600 border-b-2 border-green-600 pb-3">
              <Cpu className="w-6 h-6" />
              Applications of Blockchain Technology
            </h2>
            <p className="text-justify leading-relaxed mb-6 text-blue-800 dark:text-foreground">
              Blockchain's versatility is evident through its application in various industries. Here are some key examples:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (0.1 * index) }}
                  className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">{app.title}</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{app.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Challenges Section */}
          <motion.section
            id="challenges"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-600 border-b-2 border-red-600 pb-3">
              <AlertTriangle className="w-6 h-6" />
              Challenges Facing Blockchain
            </h2>
            
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="border border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(`challenge-${index}`)}
                    className="w-full p-4 bg-blue-500 hover:bg-blue-400 text-white text-left flex items-center justify-between transition-colors"
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
                      className="p-4 bg-blue-50 dark:bg-blue-900/20"
                    >
                      <p className="text-blue-800 dark:text-blue-200">{challenge.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Future Outlook Section */}
          <motion.section
            id="future"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-purple-600 border-b-2 border-purple-600 pb-3">
              <Globe className="w-6 h-6" />
              Future Outlook
            </h2>
            <p className="text-justify leading-relaxed mb-6 text-blue-800 dark:text-foreground">
              The future of blockchain technology is promising, with advancements in quantum-safe cryptography, greater integration with artificial intelligence (AI), and more widespread use in global trade and digital identity solutions. The next few years will likely see blockchain become more user-friendly and accessible, further driving its adoption.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Quantum-Safe Cryptography",
                  desc: "Advanced cryptographic methods resistant to quantum computing attacks"
                },
                {
                  icon: Zap,
                  title: "AI Integration",
                  desc: "Seamless integration with artificial intelligence for enhanced automation and decision-making"
                },
                {
                  icon: Globe,
                  title: "Global Trade Solutions",
                  desc: "Widespread adoption in international trade and digital identity verification systems"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + (0.1 * index) }}
                  className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800"
                >
                  <item.icon className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">{item.title}</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Research Insights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-white dark:bg-card rounded-2xl p-8 border border-border mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Key Research Insights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Core Advantages</h4>
                <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Decentralized trust and transparency
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Immutable record keeping
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Elimination of intermediaries
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">Implementation Barriers</h4>
                <ul className="space-y-2 text-sm text-orange-600 dark:text-orange-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Scalability limitations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    High energy consumption
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Regulatory uncertainty
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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
            transition={{ delay: 1.1 }}
            className="mt-12 bg-blue-600 text-white text-center py-6 rounded-lg border-t-4 border-blue-500"
          >
            <p>&copy; 2024 Blockchain Technology Research. All Rights Reserved.</p>
            <p className="mt-2">Created by <span className="text-yellow-300 font-semibold">Sanoop Mallissery</span></p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}