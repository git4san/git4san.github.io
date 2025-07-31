import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Brain, Target, AlertTriangle, Lock, Zap, ChevronUp, Eye, Globe } from 'lucide-react';
import { Link } from 'wouter';

export default function AdversarialML() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction to Adversarial Machine Learning',
      icon: Shield,
      content: (
        <div>
          <p className="mb-4">
            Adversarial machine learning (Adversarial ML) is a subfield of machine learning focused on understanding and mitigating the vulnerabilities of machine learning (ML) models to adversarial attacks. These attacks involve deliberately manipulating input data to mislead the model, resulting in incorrect predictions or classifications.
          </p>
          <p className="mb-4">
            The rise of AI and ML in critical applications such as autonomous driving, facial recognition, cybersecurity, and healthcare has made these models targets for adversarial manipulation, posing significant security and safety risks.
          </p>
          <p>
            Adversarial ML exploits the inherent weaknesses in ML algorithms, where small, often imperceptible changes to input data can cause significant performance degradation. This report delves into the latest trends, techniques, and advancements in adversarial machine learning, highlighting both the challenges and solutions to defend against adversarial attacks.
          </p>
        </div>
      )
    },
    {
      id: 'fundamentals',
      title: '2. The Fundamentals of Adversarial Attacks',
      icon: Target,
      content: (
        <div>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500 p-6 rounded-lg">
            <h4 className="text-lg font-bold mb-4 text-red-600 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Types of Adversarial Attacks
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "White-box Attacks",
                  desc: "Attacker has full access to model architecture, parameters, and training data.",
                  color: "bg-red-100 dark:bg-red-900/30 border-red-300"
                },
                {
                  title: "Black-box Attacks",
                  desc: "Attacker does not have access to model internals, only outputs from queries.",
                  color: "bg-gray-100 dark:bg-gray-900/30 border-gray-300"
                },
                {
                  title: "Targeted vs. Untargeted Attacks",
                  desc: "Targeted attacks aim for specific misclassification; untargeted aim to confuse the model in any way.",
                  color: "bg-orange-100 dark:bg-orange-900/30 border-orange-300"
                },
                {
                  title: "Poisoning Attacks",
                  desc: "Manipulating training data to make the model behave maliciously.",
                  color: "bg-purple-100 dark:bg-purple-900/30 border-purple-300"
                }
              ].map((attack, index) => (
                <div key={index} className={`p-4 rounded-lg border ${attack.color}`}>
                  <h5 className="font-bold mb-2">{attack.title}</h5>
                  <p className="text-sm">{attack.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'current-trends',
      title: '3. Adversarial Machine Learning: Current Trends',
      icon: Brain,
      content: (
        <div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3 text-blue-600">3.1 Adversarial Attacks in Deep Learning</h4>
              <p className="text-blue-700 dark:text-blue-300">
                Deep neural networks (DNNs) are particularly vulnerable to adversarial attacks due to their complexity and high-dimensional nature. Adversarial perturbations in deep learning models can cause catastrophic failures in applications ranging from image classification to natural language processing (NLP).
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-4 text-green-600">3.2 Robustness and Defense Strategies</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Adversarial Training",
                    desc: "Augmenting the training dataset with adversarial examples to improve model robustness."
                  },
                  {
                    title: "Certified Defenses",
                    desc: "Methods that guarantee robustness against specific adversarial attacks."
                  },
                  {
                    title: "Feature Squeezing",
                    desc: "Reducing input complexity to limit adversarial attack effectiveness."
                  }
                ].map((strategy, index) => (
                  <div key={index} className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border border-green-300">
                    <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">{strategy.title}</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">{strategy.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'challenges',
      title: '4. Challenges in Adversarial Machine Learning',
      icon: AlertTriangle,
      content: (
        <div>
          <div className="space-y-4">
            {[
              {
                title: "Lack of Robustness",
                desc: "Models still remain vulnerable to adversarial attacks despite advancements in defenses.",
                color: "bg-red-50 dark:bg-red-900/20 border-red-200 text-red-800 dark:text-red-200"
              },
              {
                title: "Explaining Adversarial Vulnerabilities",
                desc: "Understanding why adversarial attacks work remains a significant challenge.",
                color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 text-orange-800 dark:text-orange-200"
              },
              {
                title: "Ethical and Security Concerns",
                desc: "Adversarial attacks could have severe implications for privacy and security, including misuse in facial recognition and autonomous systems.",
                color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 text-yellow-800 dark:text-yellow-200"
              }
            ].map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`p-6 rounded-lg border ${challenge.color}`}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">{challenge.title}</h4>
                    <p className="text-sm">{challenge.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'state-of-art',
      title: '5. State-of-the-Art Techniques in Adversarial Machine Learning',
      icon: Zap,
      content: (
        <div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-500 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3 text-purple-600 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                5.1 Adversarial Training with Data Augmentation
              </h4>
              <p className="text-purple-700 dark:text-purple-300">
                Adversarial training remains one of the most effective defenses, though it often comes at the cost of increased training time and reduced performance on non-adversarial data. Advanced techniques now incorporate sophisticated data augmentation strategies to improve both robustness and generalization.
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-l-4 border-indigo-500 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3 text-indigo-600 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                5.2 Certified Defenses and Provable Robustness
              </h4>
              <p className="text-indigo-700 dark:text-indigo-300">
                Recent techniques like randomized smoothing provide mathematical guarantees on model robustness against adversarial perturbations, ensuring model reliability. These methods offer theoretical foundations for understanding and quantifying model security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-800">
                <h5 className="font-bold text-cyan-700 dark:text-cyan-300 mb-3">Randomized Smoothing</h5>
                <p className="text-sm text-cyan-600 dark:text-cyan-400">Provides certified robustness guarantees by adding noise during inference</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <h5 className="font-bold text-emerald-700 dark:text-emerald-300 mb-3">Interval Bound Propagation</h5>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">Computes guaranteed bounds on neural network outputs for robustness verification</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'future-directions',
      title: '6. Future Directions and Open Challenges',
      icon: Eye,
      content: (
        <div>
          <div className="space-y-4">
            {[
              {
                title: "Autonomous Systems",
                desc: "Ensuring robustness of self-driving cars and drones against adversarial attacks.",
                icon: Target,
                color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 text-blue-800 dark:text-blue-200"
              },
              {
                title: "AI-Driven Security",
                desc: "Developing AI systems capable of detecting and mitigating adversarial inputs in real-time.",
                icon: Shield,
                color: "bg-green-50 dark:bg-green-900/20 border-green-200 text-green-800 dark:text-green-200"
              },
              {
                title: "Cross-disciplinary Approaches",
                desc: "Collaborations in cryptography, game theory, and neuroscience to enhance defense strategies.",
                icon: Brain,
                color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 text-purple-800 dark:text-purple-200"
              }
            ].map((direction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className={`p-6 rounded-lg border ${direction.color}`}
              >
                <div className="flex items-start gap-4">
                  <direction.icon className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2 text-lg">{direction.title}</h4>
                    <p>{direction.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'conclusion',
      title: '7. Conclusion',
      icon: Globe,
      content: (
        <div>
          <p className="mb-6">
            Adversarial machine learning is a rapidly evolving field, with new attack methods and defense strategies emerging regularly. While significant progress has been made in understanding and mitigating adversarial vulnerabilities, many challenges remain.
          </p>
          <p className="mb-6">
            As machine learning models continue to be deployed in more critical applications, ensuring their robustness against adversarial manipulation will be key to their security and reliability. The future of adversarial ML will likely involve more sophisticated defense mechanisms, better understanding of attack vectors, and integration with broader security frameworks.
          </p>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-6">
            <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Key Takeaways</h4>
            <ul className="space-y-2 text-green-600 dark:text-green-400">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Adversarial robustness requires continuous research and development
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Defense strategies must evolve with emerging attack techniques
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Cross-disciplinary collaboration is essential for comprehensive solutions
              </li>
            </ul>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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
            <Link href="/about" className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-hover)] mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to About
            </Link>
            
            <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white p-8 rounded-2xl text-center">
              <h1 className="text-4xl font-bold mb-2">Adversarial Machine Learning Research</h1>
              <p className="text-xl opacity-90">by <span className="text-[var(--accent)] font-semibold">Sanoop Mallissery, Ph.D.</span></p>
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
                className="bg-[var(--bg-secondary)] rounded-2xl p-8 border border-[var(--border)]"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[var(--primary)] border-b-2 border-[var(--primary)] pb-3">
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
            className="mt-12 bg-[var(--bg-secondary)] text-[var(--text-primary)] text-center py-6 rounded-lg border border-[var(--border)]"
          >
            <p>&copy; 2024 Adversarial ML Research. All Rights Reserved.</p>
            <p className="mt-2">Created by <span className="text-[var(--accent)] font-semibold">Sanoop Mallissery</span></p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}