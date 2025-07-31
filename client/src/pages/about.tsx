import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { 
  Download, 
  ExternalLink, 
  MapPin, 
  Mail, 
  Github, 
  Linkedin, 
  GraduationCap,
  Building,
  Award,
  BookOpen,
  Users,
  Briefcase,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [showFullBio, setShowFullBio] = useState(false);

  const researchInterests = [
    { 
      title: "Dependable Systems Security", 
      link: "/my_reports/DSS.html",
      available: true
    },
    { 
      title: "AI-Driven Cyber Security", 
      link: "/my_reports/AI_CYS.html",
      available: true
    },
    { 
      title: "Adversarial ML", 
      link: "/my_reports/AML.html",
      available: true
    },
    { 
      title: "Secure Software Development", 
      link: "/my_reports/SSD.html",
      available: true
    },
    { 
      title: "Trustworthy/Explainable AI", 
      link: "/my_reports/XAI.html",
      available: true
    },
    { 
      title: "Data Privacy Preservation", 
      link: "/my_reports/DPP.html",
      available: true
    },
    { 
      title: "Critical Infrastructure & CPS Security", 
      link: "/my_reports/CPS.html",
      available: true
    },
    { 
      title: "Blockchain Technology & Applications", 
      link: "/my_reports/BCA.html",
      available: true
    }
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:sanoopmallissery@gmail.com",
      label: "Email"
    },
    {
      icon: Github,
      href: "https://github.com/git4san",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sanoop-mallissery-ph-d-711616a2/",
      label: "LinkedIn"
    },
    {
      icon: GraduationCap,
      href: "https://scholar.google.co.in/citations?user=2SUBIBkAAAAJ&hl=en",
      label: "Google Scholar"
    },
    {
      icon: Award,
      href: "https://orcid.org/0000-0003-3472-2717",
      label: "ORCID"
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
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-[var(--text-primary)]">
              About <span className="text-[var(--primary-color)]">Me</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)]">
              Advancing cybersecurity through research, teaching, and innovation
            </p>
          </div>



          {/* Biography Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border-color)] mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[var(--text-primary)]">
              <Users className="w-6 h-6 text-[var(--primary-color)]" />
              Biography
            </h3>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-justify leading-relaxed mb-4 text-[var(--text-secondary)]">
                Sanoop Mallissery, Ph.D. is a Lecturer at the School of Information Technology, Monash University Malaysia. 
                He holds a Ph.D. in Computer Science from National Yang Ming Chiao Tung University (NYCU) in Taiwan, 
                where he specializes in advanced cybersecurity research. He earned his Bachelor's degree in Information 
                Technology and a Master's in Cyber Security, building a solid foundation.
              </p>

              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--primary-dark)] font-medium mb-4 transition-colors"
              >
                {showFullBio ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Read less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Read more
                  </>
                )}
              </button>

              {showFullBio && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-justify leading-relaxed mb-4 text-[var(--text-secondary)]">
                    Sanoop Mallissery, Ph.D.'s professional experience includes a role as a threat researcher at TxOne Networks in Taiwan, 
                    where he contributed to innovative solutions in the Threat Research department. Before that, he spent 
                    four years as a cybersecurity engineer at the Industrial Technology Research Institute (ITRI) in Taiwan, 
                    developing cutting-edge security measures and techniques.
                  </p>
                  
                  <p className="text-justify leading-relaxed mb-4 text-[var(--text-secondary)]">
                    Additionally, Sanoop Mallissery, Ph.D. served as an Assistant Professor in the Department of Information and Communication 
                    Technology at Manipal Institute of Technology, Manipal University in India, for 6.5 years. His teaching 
                    and mentorship have inspired numerous students in the field of computer science.
                  </p>
                  
                  <p className="text-justify leading-relaxed text-[var(--text-secondary)]">
                    His research interests lie in dependable systems security, automated vulnerability discovery through 
                    fuzzing systems, and data protection and privacy. Sanoop Mallissery, Ph.D. is dedicated to advancing the landscape of 
                    cybersecurity and fostering a deeper understanding of security challenges in today's digital environment.
                  </p>
                </motion.div>
              )}
            </div>
            
            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
              <h4 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">Connect with Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[var(--bg-secondary)] hover:bg-[var(--bg-hover)] rounded-lg transition-colors"
                    title={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Research Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border-color)] mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[var(--text-primary)]">
              <BookOpen className="w-6 h-6 text-[var(--secondary-color)]" />
              Research Interests
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {researchInterests.map((interest, index) => (
                interest.available ? (
                  <motion.a
                    key={index}
                    href={interest.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 p-4 bg-[var(--bg-secondary)] hover:bg-[var(--bg-hover)] rounded-lg transition-all duration-300 group border border-transparent hover:border-[var(--primary-color)]"
                  >
                    <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full group-hover:bg-[var(--primary-color)] transition-colors"></div>
                    <span className="flex-1 text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                      {interest.title}
                    </span>
                    <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--primary-color)] opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>
                ) : (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 p-4 bg-[var(--bg-secondary)]/50 rounded-lg border border-dashed border-[var(--border-color)]"
                  >
                    <div className="w-2 h-2 bg-[var(--text-secondary)]/50 rounded-full"></div>
                    <span className="flex-1 text-[var(--text-secondary)]">
                      {interest.title}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2 py-1 rounded">Coming Soon</span>
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>

          {/* Professional Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border-color)] mb-12"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-[var(--text-primary)]">
              <Briefcase className="w-6 h-6 text-[var(--accent-color)]" />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {/* Current Position - Lecturer */}
              <div className="border-l-4 border-[var(--primary-color)] pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--primary-color)] rounded-full"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-[var(--primary-color)]">Lecturer</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img 
                          src="/attached_assets/monash-university_1753980274718.webp" 
                          alt="Monash University Logo"
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <a 
                        href="https://www.monash.edu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--secondary-color)] hover:text-[var(--secondary-dark)] font-semibold transition-colors"
                      >
                        School of Information Technology, Monash University (Malaysia Campus)
                      </a>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-1">Malaysia</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">February 2025 - Present</p>
                  </div>
                </div>
                
                <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                  <h5 className="font-semibold text-[var(--accent-color)] mb-3">Teaching - Undergraduate Courses:</h5>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>FIT4165 - Computer Networks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>FIT1051 - Introduction to Java Programming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>FIT1056 - Introduction to Software Engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>ENG4701 - Final Year Project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>FIT3161/FIT3163 - Final Year Project</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Threat Researcher */}
              <div className="border-l-4 border-[var(--secondary-color)] pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--secondary-color)] rounded-full"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-[var(--primary-color)]">Threat Researcher</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img 
                          src="/attached_assets/TX-ONE--png_1753980091199.webp" 
                          alt="TXOne Networks Logo"
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <a 
                        href="https://www.txone.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--secondary-color)] hover:text-[var(--secondary-dark)] font-semibold transition-colors"
                      >
                        TXOne Networks
                      </a>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-1">Taiwan</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">July 2023 - July 2024</p>
                  </div>
                </div>
                
                <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                  <h5 className="font-semibold text-[var(--accent-color)] mb-3">Responsibilities:</h5>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>In-depth analysis of emerging cyber threats and vulnerabilities, particularly those affecting Operational Technology (OT) and Industrial Control Systems (ICS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Innovative security solutions & detection techniques to counteract threats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implement & test security measures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Publish research findings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Improvement of security products aimed at enhancing OT security environments</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cybersecurity Engineer */}
              <div className="border-l-4 border-[var(--accent-color)] pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--accent-color)] rounded-full"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-[var(--primary-color)]">Cyber Security Engineer</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img 
                          src="/attached_assets/itri_1753979983298.png" 
                          alt="ITRI Logo"
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <a 
                        href="https://www.itri.org.tw/english/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--secondary-color)] hover:text-[var(--secondary-dark)] font-semibold transition-colors"
                      >
                        Industrial Technology Research Institute (ITRI)
                      </a>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-1">Taiwan</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">October 2017 - December 2021</p>
                  </div>
                </div>
                
                <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                  <h5 className="font-semibold text-[var(--accent-color)] mb-3">Responsibilities:</h5>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developing advanced fuzzing techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Analyzing software and hardware systems to identify and mitigate security threats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Designing and testing security measures to enhance the protection of critical systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Generating reports and documentation based on vulnerability assessments and results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Creation and improvement of security products enhancing OT security environments</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Research Fellowship */}
              <div className="border-l-4 border-[var(--warning-color)] pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--warning-color)] rounded-full"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-[var(--primary-color)]">Research Fellowship</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img 
                          src="/attached_assets/RTU_logo_esigelec_1753980542391.png" 
                          alt="ESIGELEC Logo"
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <a 
                        href="https://www.esigelec.fr/fr/node/262" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--secondary-color)] hover:text-[var(--secondary-dark)] font-semibold transition-colors"
                      >
                        The research institute IRSEEM (ESIGELEC)
                      </a>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-1">France</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">January 2014 - December 2014</p>
                  </div>
                </div>
                
                <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                  <h5 className="font-semibold text-[var(--accent-color)] mb-3">Responsibilities:</h5>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--warning-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Focusing on vehicular ad-hoc network security in Intelligent Transportation Systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--warning-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Conducting research that led to the publication of various papers in reputable conferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--warning-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gaining significant insights into smart and connected systems security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--warning-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Advancing cybersecurity methods applicable to intelligent transportation systems</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Assistant Professor */}
              <div className="border-l-4 border-[var(--primary-color)] pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--primary-color)] rounded-full"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-[var(--primary-color)]">Assistant Professor</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img 
                          src="/attached_assets/manipal_1753980624083.png" 
                          alt="Manipal University Logo"
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <a 
                        href="https://www.manipal.edu/mit.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--secondary-color)] hover:text-[var(--secondary-dark)] font-semibold transition-colors"
                      >
                        Manipal Institute of Technology (MIT), Manipal University
                      </a>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-1">India</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">August 2010 - December 2016</p>
                  </div>
                </div>
                
                <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)] space-y-4">
                  <div>
                    <h5 className="font-semibold text-[var(--accent-color)] mb-3">Responsibilities:</h5>
                    <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Instructed undergraduate & postgraduate students</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Collaborated with colleagues in interdisciplinary development groups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Participated in activities aimed at enhancing pedagogical practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Published articles & papers in reputable journals & conferences</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-[var(--accent-color)] mb-3">Teaching - Postgraduate Courses:</h5>
                    <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                        <span>ICT 502 - Mobile Computing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                        <span>ICT 505 - Principles of Information Security</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                        <span>ICT 548 - Multimedia Communications</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-[var(--accent-color)] mb-3">Teaching - Undergraduate Courses:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "ICT 401 - Mobile Communications",
                        "ICT 455 - Wireless Sensor & Ad-hoc Networks", 
                        "ICT 352 - Wireless Communications and Computing",
                        "ICT 258 - TCP/IP Protocol Suite",
                        "ICT 439 - E-Commerce and Network Security",
                        "ICT 301 - Operating Systems",
                        "ICT 302 - Internet Technology Applications",
                        "ICT 307 - Software Engineering & Project Management",
                        "ICT 402 - Seminar"
                      ].map((course, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-[var(--text-secondary)]">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border-color)] mb-12"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-[var(--text-primary)]">
              <GraduationCap className="w-6 h-6 text-[var(--warning-color)]" />
              Education
            </h3>
            
            <div className="space-y-8">
              {/* Ph.D. */}
              <div className="border-l-4 border-[var(--warning-color)] pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--warning-color)] rounded-full"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Ph.D. in Computer Science (Dependable Systems Security)</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img 
                          src="/attached_assets/NYCU_logo_with_namestyle_1753980716251.png" 
                          alt="NYCU Logo"
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <a 
                        href="https://www.cs.nycu.edu.tw/?locale=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--warning-color)] hover:text-[var(--warning-dark)] font-semibold transition-colors"
                      >
                        National Yang Ming Chiao Tung University (NYCU)
                      </a>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-1">Taiwan</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">September 2017 - April 2024</p>
                  </div>
                </div>
                
                <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--warning-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong className="text-[var(--text-primary)]">Research Focus:</strong> Securing Software Applications with IFT</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--warning-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong className="text-[var(--text-primary)]">Supervised by:</strong> <a href="https://scholar.nycu.edu.tw/en/persons/yu-sung-wu" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline">Dr. Yu-Sung Wu, Professor, NYCU</a></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--warning-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong className="text-[var(--text-primary)]">Publications:</strong> Presented papers at 5 <a href="https://ieeexplore.ieee.org/author/37085369856" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline">IEEE</a>/<a href="https://dl.acm.org/profile/99659514220" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline">ACM</a> conferences with contributions published in 2 Journals (<a href="https://www.computer.org/csdl/journal/tq/2023/06/10023951/1K9syrJjOEM" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline">IEEE Transactions</a> & <a href="https://dl.acm.org/doi/10.1145/3623375" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline">ACM</a>)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--warning-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong className="text-[var(--text-primary)]">GPA:</strong> 4.15/4.3</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Master's */}
              <div className="border-l-4 border-[var(--primary-color)] pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--primary-color)] rounded-full"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Master's in Cyber Security</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img 
                          src="/attached_assets/Amrita-vishwa-vidyapeetham-logo.svg_1753980791475.png" 
                          alt="Amrita Vishwa Vidyapeetham Logo"
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <a 
                        href="https://www.amrita.edu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--primary-color)] hover:text-[var(--primary-dark)] font-semibold transition-colors"
                      >
                        Amrita Vishwa Vidyapeetham
                      </a>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-1">India</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">August 2008 - August 2010</p>
                  </div>
                </div>
                
                <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong className="text-[var(--text-primary)]">Thesis:</strong> An Efficient Alert Correlation Engine for Intrusion Detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong className="text-[var(--text-primary)]">Supervised by:</strong> <a href="https://www.mcafee.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline">Dr. Sakthi Subramanian, McAfee Inc.</a></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bachelor's */}
              <div className="border-l-4 border-[var(--secondary-color)] pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--secondary-color)] rounded-full"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Bachelor's in Information Technology</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <img 
                          src="/attached_assets/Uni_of_cali_1753980870889.png" 
                          alt="University of Calicut Logo"
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <a 
                        href="https://www.uoc.ac.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--secondary-color)] hover:text-[var(--secondary-dark)] font-semibold transition-colors"
                      >
                        University of Calicut
                      </a>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-1">India</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">July 2002 - July 2006</p>
                  </div>
                </div>
                
                <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong className="text-[var(--text-primary)]">Final Project:</strong> Voice-based Access Control System to Restrict Unauthorized Software Execution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Let's Connect</h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Interested in collaboration or have questions about my research?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}