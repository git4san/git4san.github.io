import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Server, Lock, Zap, Globe, Brain, ChevronUp } from 'lucide-react';
import { Link } from 'wouter';

export default function DependableSystemsSecurity() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      icon: Shield,
      content: (
        <div>
          <p className="mb-4">
            Dependable systems security is a crucial aspect of modern computing systems, particularly as they grow more interconnected, complex, and integrated into critical infrastructures. The term "dependable systems" refers to systems that exhibit high reliability, availability, safety, security, and maintainability.
          </p>
          <p>
            Dependable systems are essential in environments such as healthcare, transportation, manufacturing, and finance, where failure can have catastrophic consequences. This research outlines the latest trends in dependable systems security, explores current challenges, and suggests potential future directions in this evolving field.
          </p>
        </div>
      )
    },
    {
      id: 'evolution',
      title: '2. Evolution of Dependable Systems Security',
      icon: Server,
      content: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[var(--warning-color)]/20 p-4 rounded-lg border border-[var(--warning-color)]/30">
              <h4 className="font-bold text-[var(--warning-color)] mb-2">Reliability</h4>
              <p className="text-sm text-[var(--text-secondary)]">Ensuring that the system operates correctly over time without failure.</p>
            </div>
            <div className="bg-[var(--primary-color)]/20 p-4 rounded-lg border border-[var(--primary-color)]/30">
              <h4 className="font-bold text-[var(--primary-color)] mb-2">Availability</h4>
              <p className="text-sm text-[var(--text-secondary)]">Guaranteeing system services are accessible when needed.</p>
            </div>
            <div className="bg-[var(--secondary-color)]/20 p-4 rounded-lg border border-[var(--secondary-color)]/30">
              <h4 className="font-bold text-[var(--secondary-color)] mb-2">Safety</h4>
              <p className="text-sm text-[var(--text-secondary)]">Protecting the system from failures that could lead to harmful consequences.</p>
            </div>
          </div>
          
          <p className="mb-4">Key trends in dependable systems security have emerged due to the proliferation of cyber threats, evolving attack vectors, and the complexity of systems design:</p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Cyber-Physical Systems Security:</strong> The integration of physical and digital systems such as autonomous vehicles and IoT has introduced new vulnerabilities.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Cloud and Edge Computing Security:</strong> Securing data and services across distributed environments has become critical.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>AI and Machine Learning in Security:</strong> AI/ML mechanisms are increasingly used to detect anomalies, predict attacks, and automate responses.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Supply Chain Security:</strong> Attacks on the supply chain, particularly software supply chains, have become more prevalent.
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'challenges',
      title: '3. Key Challenges in Dependable Systems Security',
      icon: Lock,
      content: (
        <div>
          <ul className="space-y-4">
            {[
              {
                title: 'Complexity of Modern Systems',
                desc: 'The expanding attack surface and interdependencies create new vulnerabilities.'
              },
              {
                title: 'Insider Threats',
                desc: 'Insider threats, whether malicious or accidental, remain a significant concern.'
              },
              {
                title: 'Zero-Day Vulnerabilities',
                desc: 'Attackers target systems with vulnerabilities before they are discovered or patched.'
              },
              {
                title: 'Supply Chain Attacks',
                desc: 'Compromising the software or hardware supply chain poses serious risks.'
              },
              {
                title: 'Legacy Systems',
                desc: 'Integrating modern security measures into legacy systems remains challenging.'
              },
              {
                title: 'Adversarial Machine Learning',
                desc: 'Attackers are exploiting weaknesses in AI/ML models.'
              },
              {
                title: 'Regulatory and Compliance Challenges',
                desc: 'Adhering to evolving global regulations like GDPR and CCPA is crucial.'
              }
            ].map((challenge, index) => (
              <li key={index} className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">{challenge.title}</h4>
                <p className="text-red-700 dark:text-red-300">{challenge.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'trends',
      title: '4. Recent Trends and Developments',
      icon: Zap,
      content: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Behavioral Analytics and Anomaly Detection: Machine learning techniques are improving the detection of unusual activity.',
              'Hardware-Based Security: Trusted Platform Modules (TPMs) and Hardware Security Modules (HSMs) provide additional protection.',
              'Post-Quantum Cryptography: Development of cryptographic algorithms resistant to quantum computing threats.',
              'Automated Incident Response: AI-driven systems reduce recovery time after security breaches.',
              'Resilient and Fault-Tolerant Systems: Redundancy and self-healing mechanisms ensure continuity during failures.',
              'Blockchain for Security: Blockchain is used for secure transactions and ensuring data integrity.',
              'Federated Learning for Privacy-Preserving Security: Decentralized learning ensures privacy in security applications.',
              'Digital Twin for Security Testing: Virtual replicas help simulate and analyze security risks.'
            ].map((trend, index) => (
              <div key={index} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                  <strong>{trend.split(':')[0]}:</strong> {trend.split(':')[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'future-directions',
      title: '5. Future Directions',
      icon: Brain,
      content: (
        <div>
          <ul className="space-y-4">
            {[
              {
                title: 'Integrated Security across the System Lifecycle',
                desc: 'Security will be integrated into every stage of system development.'
              },
              {
                title: 'Autonomous and Self-Healing Systems',
                desc: 'Systems will detect, respond to, and recover from incidents autonomously.'
              },
              {
                title: 'Zero-Trust Architectures',
                desc: 'Access will be continuously verified to mitigate insider threats.'
              },
              {
                title: 'Quantum-Resistant Systems',
                desc: 'Post-quantum cryptography will safeguard against quantum computing threats.'
              },
              {
                title: 'Cross-Domain Security Solutions',
                desc: 'Security solutions will protect interconnected IT, OT, and IoT domains.'
              }
            ].map((direction, index) => (
              <li key={index} className="bg-[var(--accent-color)]/20 p-4 rounded-lg border border-[var(--accent-color)]/30">
                <h4 className="font-bold text-[var(--accent-color)] mb-2">{direction.title}</h4>
                <p className="text-[var(--text-secondary)]">{direction.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'conclusion',
      title: '6. Conclusion',
      icon: Globe,
      content: (
        <div>
          <p className="mb-6">
            Dependable systems security is an evolving and critical area, driven by the sophistication of cyber threats and technological advancements. Multi-layered, adaptive security measures are essential for tackling both technical and organizational challenges.
          </p>
          <p className="mb-6">
            The future lies in autonomous, quantum-resistant systems that integrate security throughout the lifecycle and across domains, ensuring robust protection against evolving threats.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ChevronUp className="w-5 h-5" />
            Back to Top
          </button>
        </div>
      )
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
            <Link href="/about" className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--primary-dark)] mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to About
            </Link>
            
            <div className="bg-gradient-to-r from-[var(--secondary-color)] to-[var(--primary-color)] text-white p-8 rounded-2xl text-center">
              <h1 className="text-4xl font-bold mb-2">Dependable Systems Security Research</h1>
              <p className="text-xl opacity-90">by <span className="text-[var(--warning-color)] font-semibold">Sanoop Mallissery</span></p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border-color)]"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[var(--primary-color)] border-b-2 border-[var(--primary-color)] pb-3">
                  <section.icon className="w-6 h-6" />
                  {section.title}
                </h2>
                {section.content}
              </motion.section>
            ))}
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 bg-[var(--bg-card)] text-[var(--text-primary)] text-center py-6 rounded-lg border border-[var(--border-color)]"
          >
            <p>&copy; 2024 Dependable Systems Security Research. All Rights Reserved.</p>
            <p className="mt-2">Created by <span className="text-[var(--warning-color)] font-semibold">Sanoop Mallissery</span></p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}