import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Shield, Bug, Zap, Search, TestTube, Settings } from 'lucide-react';

const toolCategories = [
  {
    id: 'static-analysis',
    title: 'Static Code Analysis Tools',
    icon: <Code className="w-6 h-6" />,
    color: '#1E90FF',
    description: 'Tools that analyze source code without executing it to find vulnerabilities and code quality issues.',
    tools: [
      {
        name: 'SonarQube',
        description: 'Detects code smells, vulnerabilities, and bugs through static analysis. Supports multiple languages, including Java, Python, and C++.',
        link: 'https://www.sonarqube.org/',
        features: ['Multi-language support', 'CI/CD integration', 'Code quality metrics']
      },
      {
        name: 'Flawfinder',
        description: 'Focused on finding security weaknesses in C/C++ code. Highlights potential buffer overflows and format string vulnerabilities.',
        link: 'https://dwheeler.com/flawfinder/',
        features: ['C/C++ security analysis', 'Buffer overflow detection', 'Format string vulnerabilities']
      },
      {
        name: 'Checkmarx',
        description: 'Enterprise-grade static application security testing (SAST) tool. Integrates seamlessly into CI/CD pipelines.',
        link: 'https://checkmarx.com/',
        features: ['Enterprise SAST', 'Pipeline integration', 'Comprehensive reporting']
      },
      {
        name: 'Bandit',
        description: 'Analyzes Python code for security vulnerabilities. Specializes in catching issues like hardcoded passwords and unsafe configurations.',
        link: 'https://bandit.readthedocs.io/',
        features: ['Python security analysis', 'Hardcoded credentials detection', 'Configuration security']
      },
      {
        name: 'Semgrep',
        description: 'Combines static analysis with pattern matching. Lightweight and flexible for custom rules across multiple languages.',
        link: 'https://semgrep.dev/',
        features: ['Pattern matching', 'Custom rules', 'Multi-language support']
      }
    ]
  },
  {
    id: 'dynamic-analysis',
    title: 'Dynamic Analysis Tools',
    icon: <Zap className="w-6 h-6" />,
    color: '#32CD32',
    description: 'Tools that analyze applications during runtime to identify vulnerabilities and performance issues.',
    tools: [
      {
        name: 'Valgrind',
        description: 'Detects memory leaks, invalid memory access, and threading errors. Ideal for securing applications with low-level memory management.',
        link: 'http://valgrind.org/',
        features: ['Memory leak detection', 'Invalid memory access', 'Threading error detection']
      },
      {
        name: 'OWASP ZAP',
        description: 'Dynamic security testing tool focused on web applications. Identifies SQL injection, XSS, and other runtime vulnerabilities.',
        link: 'https://www.zaproxy.org/',
        features: ['Web application testing', 'SQL injection detection', 'XSS vulnerability scanning']
      },
      {
        name: 'Burp Suite',
        description: 'A powerful suite for web vulnerability scanning and testing. Supports advanced testing for injection attacks and insecure configurations.',
        link: 'https://portswigger.net/burp',
        features: ['Web vulnerability scanning', 'Injection attack testing', 'Configuration analysis']
      },
      {
        name: 'RIPS Code Analysis',
        description: 'Analyzes PHP code for vulnerabilities such as SQL injection and XSS. Offers deep static analysis with detailed vulnerability reports.',
        link: 'https://www.ripstech.com/',
        features: ['PHP vulnerability analysis', 'SQL injection detection', 'Detailed reporting']
      }
    ]
  },
  {
    id: 'formal-verification',
    title: 'Formal Specification & Verification',
    icon: <Shield className="w-6 h-6" />,
    color: '#FFD700',
    description: 'Mathematical approaches to verify software correctness and security properties.',
    tools: [
      {
        name: 'Alloy Analyzer',
        description: 'Analyzes formal specifications written in the Alloy modeling language. Detects logical flaws in software design by modeling system behavior as relations.',
        link: 'https://alloytools.org/',
        features: ['Formal specification analysis', 'System behavior modeling', 'Access control verification']
      },
      {
        name: 'Dafny',
        description: 'A programming language and verifier designed for writing provably correct code. Ensures the correctness of algorithms and protocols.',
        link: 'https://dafny.org/',
        features: ['Provably correct code', 'Algorithm verification', 'Cryptographic protocol verification']
      },
      {
        name: 'JML & OpenJML',
        description: 'Specifies and verifies Java programs using contracts (preconditions, postconditions, and invariants). Enforces data integrity and security invariants.',
        link: 'http://www.jmlspecs.org/',
        features: ['Java contract verification', 'Data integrity enforcement', 'Security invariant checking']
      },
      {
        name: 'KeY',
        description: 'A verification tool for Java programs using formal specifications. Proves or disproves properties through symbolic execution.',
        link: 'https://key-project.org/',
        features: ['Java program verification', 'Symbolic execution', 'Cryptographic library analysis']
      }
    ]
  },
  {
    id: 'testing-exploration',
    title: 'Testing & Path Exploration',
    icon: <Search className="w-6 h-6" />,
    color: '#FF6347',
    description: 'Advanced testing tools that explore program paths and execution states to find vulnerabilities.',
    tools: [
      {
        name: 'Angr',
        description: 'Combines symbolic execution, dynamic analysis, and model checking. Analyzes binaries at a low level to identify vulnerabilities.',
        link: 'https://angr.io/',
        features: ['Symbolic execution', 'Binary analysis', 'Vulnerability discovery']
      },
      {
        name: 'KLEE',
        description: 'A symbolic execution engine for testing C/C++ programs. Finds bugs by exploring program paths systematically.',
        link: 'https://klee.github.io/',
        features: ['C/C++ symbolic execution', 'Path exploration', 'Buffer overflow detection']
      },
      {
        name: 'CBMC',
        description: 'C Bounded Model Checker that verifies C programs against specifications. Proves security properties in low-level code.',
        link: 'https://www.cprover.org/cbmc/',
        features: ['C program verification', 'Memory safety proofs', 'Array bounds checking']
      },
      {
        name: 'Java Pathfinder',
        description: 'A model checker for Java bytecode. Detects race conditions, deadlocks, and other concurrency issues.',
        link: 'https://javapathfinder.github.io/',
        features: ['Java bytecode analysis', 'Concurrency issue detection', 'Synchronization flaw analysis']
      }
    ]
  },
  {
    id: 'auto-test-generation',
    title: 'Automatic Test Case Generation',
    icon: <TestTube className="w-6 h-6" />,
    color: '#8A2BE2',
    description: 'Tools that automatically generate test cases to improve code coverage and find edge cases.',
    tools: [
      {
        name: 'Randoop',
        description: 'Generates test cases for Java programs by analyzing feedback from previous runs. Identifies edge cases and errors missed by manual testing.',
        link: 'https://randoop.github.io/randoop/',
        features: ['Java test generation', 'Edge case discovery', 'Exception uncovering']
      },
      {
        name: 'Udita',
        description: 'A test case generator that uses declarative specifications. Creates inputs based on specified constraints for testing security properties.',
        link: 'https://github.com/uditaproj/uditaproj',
        features: ['Declarative specifications', 'Constraint-based input generation', 'Security property testing']
      }
    ]
  },
  {
    id: 'debugging-analysis',
    title: 'Program Analysis & Debugging',
    icon: <Bug className="w-6 h-6" />,
    color: '#FF4500',
    description: 'Tools for understanding program behavior, debugging issues, and analyzing execution patterns.',
    tools: [
      {
        name: 'Daikon',
        description: 'Detects program invariants automatically from execution traces. Aids in understanding and debugging programs.',
        link: 'https://plse.cs.washington.edu/daikon/',
        features: ['Program invariant detection', 'Execution trace analysis', 'Behavioral anomaly identification']
      },
      {
        name: 'Delta Debugger',
        description: 'Minimizes input to find the root cause of a bug. Simplifies complex test cases to the minimum reproducing example.',
        link: 'https://www.delta-debugging.org/',
        features: ['Bug root cause analysis', 'Test case minimization', 'Attack payload reduction']
      },
      {
        name: 'Cooperative Bug Isolation',
        description: 'Uses statistical debugging techniques to isolate bugs. Collects execution data to identify problematic code paths.',
        link: 'https://www.cbi.de/',
        features: ['Statistical debugging', 'Bug isolation', 'Security issue debugging']
      }
    ]
  },
  {
    id: 'runtime-monitoring',
    title: 'Runtime Monitoring & Bug Repair',
    icon: <Settings className="w-6 h-6" />,
    color: '#1E90FF',
    description: 'Tools that monitor applications during execution and automatically repair discovered issues.',
    tools: [
      {
        name: 'JavaMOP',
        description: 'Runtime monitoring framework for Java programs. Verifies temporal properties during execution and detects policy violations.',
        link: 'https://www.cs.umd.edu/projects/javaMOP/',
        features: ['Java runtime monitoring', 'Temporal property verification', 'Policy violation detection']
      },
      {
        name: 'GenProg',
        description: 'Automatically repairs programs by generating patches. Uses genetic programming techniques to fix bugs and vulnerabilities.',
        link: 'https://genprog.cs.illinois.edu/',
        features: ['Automatic program repair', 'Genetic programming', 'Vulnerability patching']
      },
      {
        name: 'Angelix',
        description: 'An automated program repair tool using symbolic execution. Fixes bugs with minimum human intervention.',
        link: 'https://angelix.cs.utexas.edu/',
        features: ['Symbolic execution repair', 'Automated bug fixing', 'Open-source vulnerability repair']
      }
    ]
  },
  {
    id: 'fuzzing-tools',
    title: 'Fuzzing & Input Testing',
    icon: <Zap className="w-6 h-6" />,
    color: '#32CD32',
    description: 'Advanced fuzzing tools for discovering vulnerabilities through automated input generation and testing.',
    tools: [
      {
        name: 'AFL (American Fuzzy Lop)',
        description: 'A fast, coverage-guided fuzzing tool for discovering vulnerabilities. Finds input that crashes or misbehaves in programs.',
        link: 'http://lcamtuf.coredump.cx/afl/',
        features: ['Coverage-guided fuzzing', 'Zero-day discovery', 'Fast vulnerability detection']
      },
      {
        name: 'LibFuzzer',
        description: 'A library-based fuzzing engine for testing individual functions in code. Works seamlessly with Clang sanitizers.',
        link: 'https://llvm.org/docs/LibFuzzer.html',
        features: ['Library-based fuzzing', 'Function-level testing', 'Sanitizer integration']
      },
      {
        name: 'Honggfuzz',
        description: 'A general-purpose fuzzing tool with coverage-based techniques. Effective for testing applications written in C, C++, or Go.',
        link: 'https://github.com/google/honggfuzz',
        features: ['Coverage-based fuzzing', 'Multi-language support', 'Code path testing']
      },
      {
        name: 'Peach Fuzzer',
        description: 'A comprehensive fuzzing platform for network protocols, file formats, and APIs. Supports both generation-based and mutation-based fuzzing.',
        link: 'https://peachfuzzer.com/',
        features: ['Protocol fuzzing', 'File format testing', 'API vulnerability discovery']
      },
      {
        name: 'Sulley',
        description: 'Automates the creation and sending of malformed data to target applications. Useful for discovering protocol vulnerabilities.',
        link: 'https://github.com/OpenRCE/sulley',
        features: ['Protocol vulnerability testing', 'Malformed data generation', 'Network service testing']
      }
    ]
  }
];

export default function Tools() {
  const totalTools = toolCategories.reduce((sum, category) => sum + category.tools.length, 0);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Software Engineering <span className="text-[var(--primary-color)]">Research Tools</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto mb-8">
              Comprehensive collection of advanced tools for static analysis, dynamic testing, formal verification, 
              and vulnerability discovery in software security research.
            </p>
            
            {/* Tools Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
                <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">{toolCategories.length}</div>
                <div className="text-[var(--text-secondary)]">Tool Categories</div>
              </div>
              <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
                <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">{totalTools}</div>
                <div className="text-[var(--text-secondary)]">Research Tools</div>
              </div>
              <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
                <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">100%</div>
                <div className="text-[var(--text-secondary)]">Open Source</div>
              </div>
            </div>
          </motion.div>

          {/* Tool Categories */}
          <div className="space-y-12">
            {toolCategories.map((category, categoryIndex) => (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)]">{category.title}</h2>
                    <p className="text-[var(--text-secondary)]">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (toolIndex * 0.05) }}
                      className="bg-[var(--bg-primary)] p-6 rounded-xl border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">{tool.name}</h3>
                        <a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--primary-color)] hover:text-[var(--primary-dark)] transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                      
                      <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">
                        {tool.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 text-xs rounded-full border border-[var(--border-color)] text-[var(--text-secondary)]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12 p-8 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)]"
          >
            <h3 className="text-2xl font-bold mb-4">Research Applications</h3>
            <p className="text-[var(--text-secondary)] mb-6 max-w-3xl mx-auto">
              These tools form the foundation of modern software security research, enabling researchers to 
              discover vulnerabilities, verify system correctness, and develop robust security solutions. 
              Each category addresses specific aspects of software analysis and testing methodologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border-color)]">
                <div className="font-semibold text-[var(--primary-color)]">Vulnerability Discovery</div>
                <div className="text-sm text-[var(--text-secondary)]">Zero-day research</div>
              </div>
              <div className="p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border-color)]">
                <div className="font-semibold text-[var(--primary-color)]">Formal Verification</div>
                <div className="text-sm text-[var(--text-secondary)]">Correctness proofs</div>
              </div>
              <div className="p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border-color)]">
                <div className="font-semibold text-[var(--primary-color)]">Automated Testing</div>
                <div className="text-sm text-[var(--text-secondary)]">Comprehensive coverage</div>
              </div>
              <div className="p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border-color)]">
                <div className="font-semibold text-[var(--primary-color)]">Security Analysis</div>
                <div className="text-sm text-[var(--text-secondary)]">Deep code inspection</div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}