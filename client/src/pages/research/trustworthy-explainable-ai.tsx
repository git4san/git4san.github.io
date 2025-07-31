import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Shield, Eye, AlertTriangle, TrendingUp, ChevronUp, ChevronDown, Target, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';

export default function TrustworthyExplainableAI() {
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
    { href: '#importance', label: 'Importance of Trustworthy AI' },
    { href: '#methods', label: 'Methods for Explainability' },
    { href: '#challenges', label: 'Challenges in Trustworthy AI' },
    { href: '#future', label: 'Future Directions' }
  ];

  const collapsibleContent = {
    importance: [
      {
        title: "Why Trustworthiness is Essential in AI",
        content: "Trustworthy AI ensures that AI systems make decisions in an understandable and ethical manner. Users must be able to trust that the AI's decisions are based on sound reasoning, free from biases, and in compliance with relevant regulations. Failure to trust AI systems may lead to underutilization or rejection in critical applications."
      }
    ],
    methods: [
      {
        title: "Model-Agnostic Methods",
        content: "Model-agnostic methods can be applied to any AI model, regardless of its architecture. Techniques such as Local Interpretable Model-agnostic Explanations (LIME) and SHapley Additive exPlanations (SHAP) are popular approaches that help explain the decisions made by black-box models."
      },
      {
        title: "Model-Specific Methods",
        content: "Some AI models have inherent interpretability. Decision trees, linear models, and rule-based systems are often more interpretable than deep neural networks. Researchers are working on making complex models like deep learning more interpretable by focusing on their inner workings."
      },
      {
        title: "Post-hoc Explainability Techniques",
        content: "Post-hoc explainability techniques involve explaining decisions made by an AI system after the fact. Visualization tools, such as saliency maps for deep learning models, are commonly used to visualize which parts of an input contributed most to a decision."
      }
    ],
    challenges: [
      {
        title: "Bias in AI Systems",
        content: "AI systems can inadvertently incorporate bias from the data they are trained on. This can lead to unfair or discriminatory outcomes. Addressing bias requires developing methods to identify and mitigate biases in both data and models."
      },
      {
        title: "Complexity of Deep Learning Models",
        content: "Deep learning models, while powerful, are often seen as 'black boxes' because they are difficult to interpret. Efforts to make these models explainable have led to various techniques, but achieving complete transparency remains a challenge."
      },
      {
        title: "Scalability of Explainability Solutions",
        content: "As AI systems grow in complexity, it becomes increasingly difficult to scale explainability methods. Researchers are exploring ways to make explainability techniques more efficient and scalable to handle large, complex systems."
      }
    ]
  };

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
            
            <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-8 rounded-2xl text-center">
              <h1 className="text-4xl font-bold mb-2">Trustworthy/Explainable AI Research</h1>
              <p className="text-xl opacity-90 mb-2">A comprehensive guide to the key aspects of trust and explainability in AI systems</p>
              <p className="text-lg">by <span className="text-yellow-300 font-semibold">Sanoop Mallissery</span></p>
            </div>
          </div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800 rounded-2xl p-6 mb-8"
          >
            <h3 className="text-white font-semibold mb-4">Quick Navigation</h3>
            <div className="flex flex-wrap gap-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
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
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-600 border-b-2 border-blue-600 pb-3">
              <Brain className="w-6 h-6" />
              Introduction
            </h2>
            <p className="text-justify leading-relaxed">
              Artificial Intelligence (AI) systems have the potential to revolutionize various fields, from healthcare to finance, by automating decision-making processes. However, the growing complexity and opacity of these systems raise significant concerns regarding their trustworthiness and accountability. Explainable AI (XAI) is a branch of AI focused on making the decision-making processes of AI systems transparent and understandable to humans.
            </p>
          </motion.section>

          {/* Importance Section */}
          <motion.section
            id="importance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-green-600 border-b-2 border-green-600 pb-3">
              <Shield className="w-6 h-6" />
              Importance of Trustworthy AI
            </h2>
            <p className="text-justify leading-relaxed mb-6">
              Trustworthy AI refers to systems that are fair, transparent, accountable, and operate with a level of reliability that can be trusted by human users. Ensuring that AI systems are trustworthy is crucial to their widespread adoption, especially in sectors that require high accountability like healthcare, legal systems, and autonomous vehicles.
            </p>
            
            <div className="space-y-4">
              {collapsibleContent.importance.map((item, index) => (
                <div key={index} className="border border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(`importance-${index}`)}
                    className="w-full p-4 bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 text-left flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold text-green-800 dark:text-green-200">{item.title}</span>
                    {expandedSections[`importance-${index}`] ? (
                      <ChevronUp className="w-5 h-5 text-green-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-green-600" />
                    )}
                  </button>
                  {expandedSections[`importance-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-green-50 dark:bg-green-900/20"
                    >
                      <p className="text-green-700 dark:text-green-300">{item.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Methods Section */}
          <motion.section
            id="methods"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-purple-600 border-b-2 border-purple-600 pb-3">
              <Eye className="w-6 h-6" />
              Methods for Explainability
            </h2>
            <p className="text-justify leading-relaxed mb-6">
              Explainable AI (XAI) focuses on creating models whose operations can be understood by humans. There are several methods used to increase explainability in AI systems:
            </p>
            
            <div className="space-y-4">
              {collapsibleContent.methods.map((item, index) => (
                <div key={index} className="border border-purple-200 dark:border-purple-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(`methods-${index}`)}
                    className="w-full p-4 bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-900/50 text-left flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold text-purple-800 dark:text-purple-200">{item.title}</span>
                    {expandedSections[`methods-${index}`] ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-600" />
                    )}
                  </button>
                  {expandedSections[`methods-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-purple-50 dark:bg-purple-900/20"
                    >
                      <p className="text-purple-700 dark:text-purple-300">{item.content}</p>
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
              Challenges in Trustworthy AI
            </h2>
            <p className="text-justify leading-relaxed mb-6">
              Despite significant progress in AI, several challenges remain in ensuring the trustworthiness and explainability of these systems:
            </p>
            
            <div className="space-y-4">
              {collapsibleContent.challenges.map((item, index) => (
                <div key={index} className="border border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(`challenges-${index}`)}
                    className="w-full p-4 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 text-left flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold text-red-800 dark:text-red-200">{item.title}</span>
                    {expandedSections[`challenges-${index}`] ? (
                      <ChevronUp className="w-5 h-5 text-red-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-red-600" />
                    )}
                  </button>
                  {expandedSections[`challenges-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-red-50 dark:bg-red-900/20"
                    >
                      <p className="text-red-700 dark:text-red-300">{item.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Future Directions Section */}
          <motion.section
            id="future"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-orange-600 border-b-2 border-orange-600 pb-3">
              <TrendingUp className="w-6 h-6" />
              Future Directions in Trustworthy AI
            </h2>
            <p className="text-justify leading-relaxed mb-6">
              The future of AI will likely see increased integration of explainability into AI systems by default. Some potential future directions include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Standardized Frameworks",
                  desc: "Development of standardized frameworks for evaluating AI explainability across different domains and applications."
                },
                {
                  icon: Shield,
                  title: "Fairness and Equity",
                  desc: "Greater focus on fairness and equity in AI decision-making processes to ensure unbiased outcomes."
                },
                {
                  icon: Zap,
                  title: "Enhanced Regulations",
                  desc: "Enhanced regulatory frameworks for ensuring the trustworthiness of AI systems in critical applications."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (0.1 * index) }}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800"
                >
                  <item.icon className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3">{item.title}</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Additional Insights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-card rounded-2xl p-8 border border-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Key Takeaways</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Why XAI Matters</h4>
                <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Builds user trust and confidence
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Enables regulatory compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Facilitates debugging and improvement
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Implementation Challenges</h4>
                <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Balancing accuracy with interpretability
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Scaling explanations for complex models
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Addressing domain-specific requirements
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
            transition={{ delay: 1.0 }}
            className="mt-12 bg-slate-900 text-white text-center py-6 rounded-lg"
          >
            <p>&copy; 2024 Trustworthy AI Research. All Rights Reserved.</p>
            <p className="mt-2">Created by <span className="text-yellow-300 font-semibold">Sanoop Mallissery</span></p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}