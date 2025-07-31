import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Code, CheckCircle, AlertTriangle, Settings, Users, ChevronUp, ChevronDown, Lock, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';

export default function SecureSoftwareDevelopment() {
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

  const collapsibleSections = [
    {
      id: 'key-principles',
      title: 'Key Principles of Secure Software Development',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      items: [
        {
          title: "Security by Design",
          desc: "Security should be integrated from the very beginning of the software development process, not added as an afterthought."
        },
        {
          title: "Threat Modeling",
          desc: "Identifying potential threats to the software and designing comprehensive defenses against them through systematic analysis."
        },
        {
          title: "Secure Coding Practices",
          desc: "Following established secure coding standards and guidelines to minimize vulnerabilities during implementation."
        },
        {
          title: "Code Review and Static Analysis",
          desc: "Using peer code reviews and automated static analysis tools to identify security flaws early in the development cycle."
        },
        {
          title: "Penetration Testing and Vulnerability Scanning",
          desc: "Simulating real-world attacks and conducting systematic scans to identify security weaknesses before deployment."
        },
        {
          title: "Continuous Security Testing",
          desc: "Implementing ongoing security testing throughout development and after deployment to maintain security posture."
        },
        {
          title: "Security Patches and Updates",
          desc: "Ensuring that regular updates and security patches are applied promptly to address emerging threats."
        },
        {
          title: "Secure Configuration Management",
          desc: "Securing the environment in which the software is deployed, including proper access controls and hardening."
        }
      ]
    },
    {
      id: 'sdlc-steps',
      title: 'Secure Development Lifecycle (SDLC) Steps',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      items: [
        {
          title: "Requirement Gathering and Planning",
          desc: "Integrate security requirements from the start, including compliance needs, threat landscape analysis, and security objectives."
        },
        {
          title: "Design Phase",
          desc: "Ensure security architecture is a fundamental part of the design, including data flow analysis, access control design, and security patterns."
        },
        {
          title: "Implementation Phase",
          desc: "Write secure code with best practices in mind, including input validation, output encoding, and proper error handling."
        },
        {
          title: "Testing Phase",
          desc: "Incorporate comprehensive security testing including unit tests, integration tests, and specialized security testing methodologies."
        },
        {
          title: "Deployment and Maintenance",
          desc: "Continue to monitor, patch, and maintain the software after deployment with ongoing security assessments and incident response."
        }
      ]
    },
    {
      id: 'benefits',
      title: 'Benefits of Secure Software Development',
      icon: CheckCircle,
      color: 'from-purple-500 to-pink-600',
      items: [
        {
          title: "Reduced Risk",
          desc: "Significantly minimizes the likelihood of security breaches, data loss, and system compromises through proactive security measures."
        },
        {
          title: "Cost Savings",
          desc: "Identifying and fixing security issues early in development is exponentially less expensive than addressing them post-deployment."
        },
        {
          title: "Regulatory Compliance",
          desc: "Helps ensure the software meets industry regulations like GDPR, HIPAA, SOX, and other compliance requirements."
        },
        {
          title: "Customer Trust",
          desc: "Building software with a focus on security improves user trust, brand reputation, and competitive advantage in the market."
        },
        {
          title: "Business Continuity",
          desc: "Secure software reduces the risk of business disruption from cyber attacks, ensuring operational continuity and reliability."
        },
        {
          title: "Legal Protection",
          desc: "Demonstrates due diligence in security practices, providing legal protection and reducing liability in case of incidents."
        }
      ]
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
            
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-2xl text-center">
              <h1 className="text-4xl font-bold mb-2">Secure Software Development Research</h1>
              <p className="text-xl opacity-90">by <span className="text-yellow-300 font-semibold">Sanoop Mallissery</span></p>
            </div>
          </div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Secure Software Development</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-justify leading-relaxed mb-4">
                Secure Software Development is a critical approach in the creation of software applications that aims to integrate security principles throughout the entire software development lifecycle (SDLC). As cyber threats continue to evolve and become more sophisticated, it is essential to ensure that security is not an afterthought but a fundamental part of the software design, development, and deployment process.
              </p>
              <p className="text-justify leading-relaxed">
                This comprehensive approach involves implementing security measures at every stage of development, from initial requirements gathering through deployment and maintenance. By adopting secure development practices, organizations can significantly reduce vulnerabilities, minimize security risks, and build more resilient software systems that protect both user data and business assets.
              </p>
            </div>
          </motion.section>

          {/* Collapsible Sections */}
          <div className="space-y-6">
            {collapsibleSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (0.1 * index) }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full p-6 text-left bg-gradient-to-r ${section.color} text-white hover:opacity-90 transition-opacity flex items-center justify-between`}
                >
                  <div className="flex items-center gap-3">
                    <section.icon className="w-6 h-6" />
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  {expandedSections[section.id] ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </button>
                
                {expandedSections[section.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-muted/30"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * itemIndex }}
                          className="bg-card p-4 rounded-lg border border-border"
                        >
                          <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Additional Insights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-card rounded-2xl p-8 border border-border"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-600 border-b-2 border-blue-600 pb-3">
              <Zap className="w-6 h-6" />
              Current Trends and Future Directions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    DevSecOps Integration
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    Seamless integration of security practices into DevOps pipelines, enabling continuous security throughout the development and deployment process.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-bold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Automated Security Testing
                  </h4>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    AI-powered security testing tools that can automatically identify vulnerabilities and suggest fixes during the development process.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Security Culture
                  </h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400">
                    Building a security-first culture where every team member takes responsibility for security, not just security specialists.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Zero Trust Architecture
                  </h4>
                  <p className="text-sm text-orange-600 dark:text-orange-400">
                    Implementing zero trust principles in software design, where no component is trusted by default and all interactions must be verified.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-12 bg-card rounded-2xl p-8 border border-border"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Conclusion</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert mb-6">
              <p className="text-justify leading-relaxed mb-4">
                Secure software development is not just a technical requirement but a business imperative in today's digital landscape. Organizations that embrace security as a core principle throughout their development lifecycle gain significant advantages in terms of risk reduction, cost savings, and customer trust.
              </p>
              <p className="text-justify leading-relaxed">
                The future of secure software development lies in automation, continuous integration of security practices, and fostering a security-aware culture across all development teams. As threats continue to evolve, so must our approaches to building secure, resilient software systems.
              </p>
            </div>
            
            <div className="text-center">
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
            transition={{ delay: 1.2 }}
            className="mt-12 bg-green-600 text-white text-center py-6 rounded-lg"
          >
            <p>&copy; 2024 Secure Software Development Research. All Rights Reserved.</p>
            <p className="mt-2">Created by <span className="text-yellow-300 font-semibold">Sanoop Mallissery, Ph.D.</span></p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}