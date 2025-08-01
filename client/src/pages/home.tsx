import Navigation from '@/components/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { FileText, User, Mail, FolderOpen, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showRankingFlag, setShowRankingFlag] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show flag after scrolling 200px
      setShowRankingFlag(scrollPosition > 200);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl text-[var(--primary-color)] font-semibold mb-2">
                    Hi, I'm San 👋
                  </h2>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                    Advancing <span className="text-[var(--primary-color)]">Dependable Systems Security</span> and <span className="text-[var(--primary-color)]">Cyber Defense</span>
                  </h1>
                  <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
                    Designing the next generation of dependable and secure systems, 
                    from industrial control to intelligent transport, with integrated privacy, 
                    AI, and cyber defense at the core.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="/projects">
                    <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      View Research
                    </button>
                  </Link>
                  <Link href="/publications">
                    <button className="bg-transparent border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                      Publications
                    </button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center lg:text-right"
              >
                <div className="relative">
                  <div className="w-80 h-80 mx-auto lg:ml-auto rounded-full overflow-hidden border-4 border-[var(--primary-color)] shadow-2xl">
                    <img 
                      src="/assets/avatar_1753979688296.jpg" 
                      alt="Sanoop Mallissery, Ph.D."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-8 bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)]">
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-xl shadow-sm inline-block mb-4">
                        <img 
                          src="/assets/monash-university_1753980274718.webp" 
                          alt="Monash University Logo"
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-[var(--primary-color)] mb-1">Lecturer</h3>
                      <p className="text-[var(--text-secondary)] mb-1">School of Information Technology</p>
                      <a 
                        href="https://research.monash.edu/en/persons/sanoop-mallissery" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--primary-color)] hover:text-[var(--primary-dark)] hover:underline transition-colors font-medium"
                      >
                        Monash University (Malaysia Campus)
                      </a>
                    </div>
                  </div>
                  

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[var(--bg-secondary)]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">15+</div>
                <div className="text-[var(--text-secondary)]">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">25+</div>
                <div className="text-[var(--text-secondary)]">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">10+</div>
                <div className="text-[var(--text-secondary)]">Research Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">230+</div>
                <div className="text-[var(--text-secondary)]">Citations</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Explore My Work</h2>
              <p className="text-[var(--text-secondary)] text-lg">
                Discover my research, publications, and professional journey
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/projects">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-all duration-300 cursor-pointer"
                >
                  <FolderOpen size={48} className="text-[var(--primary-color)] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Projects</h3>
                  <p className="text-[var(--text-secondary)]">
                    Explore my research projects in cybersecurity, AI, and systems security
                  </p>
                </motion.div>
              </Link>
              
              <Link href="/publications">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-all duration-300 cursor-pointer"
                >
                  <FileText size={48} className="text-[var(--primary-color)] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Publications</h3>
                  <p className="text-[var(--text-secondary)]">
                    Academic papers and research contributions in top-tier conferences
                  </p>
                </motion.div>
              </Link>
              
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-all duration-300 cursor-pointer"
                >
                  <User size={48} className="text-[var(--primary-color)] mb-4" />
                  <h3 className="text-xl font-bold mb-2">About Me</h3>
                  <p className="text-[var(--text-secondary)]">
                    Comprehensive overview of my academic and professional background
                  </p>
                </motion.div>
              </Link>
              
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-all duration-300 cursor-pointer"
                >
                  <Mail size={48} className="text-[var(--primary-color)] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Contact</h3>
                  <p className="text-[var(--text-secondary)]">
                    Get in touch for research collaborations and opportunities
                  </p>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* Floating QS Ranking Flag */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ 
          x: showRankingFlag ? 0 : -300,
          opacity: showRankingFlag ? 1 : 0
        }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.5
        }}
        className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50"
      >
        <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white p-4 rounded-r-2xl shadow-2xl border-r-4 border-[var(--accent-color)] min-w-[280px]">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm">QS World Ranking 2025</h3>
              <p className="text-xs opacity-90 mb-1">Monash University</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">#36</span>
                <a 
                  href="https://www.topuniversities.com/universities/monash-university" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs underline hover:no-underline transition-all"
                >
                  View details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}