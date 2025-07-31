import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { Download, Printer, GraduationCap, Briefcase, Award, Users } from 'lucide-react';

const education = [
  {
    degree: "Ph.D. in Computer Science (Dependable Systems Security)",
    institution: "National Yang Ming Chiao Tung University (NYCU)",
    location: "Taiwan",
    period: "2017 - 2024",
    details: [
      "Securing Software Applications with IFT",
      "Supervised by: Dr. Yu-Sung Wu, Professor, NYCU",
      "5 IEEE/ACM conference presentations, 2 Journal publications",
      "GPA: 4.15/4.3"
    ]
  },
  {
    degree: "Masters in Cyber Security",
    institution: "Amrita Vishwa Vidyapeetham",
    location: "India", 
    period: "2008 - 2010",
    details: [
      "An Efficient Alert Correlation Engine for Intrusion Detection",
      "Supervised by: Dr. Sakthi Subramanian, McAfee Inc."
    ]
  },
  {
    degree: "Bachelors in Information Technology",
    institution: "University of Calicut",
    location: "India",
    period: "2002 - 2006",
    details: [
      "Voice-based Access Control System to Restrict Unauthorized Software Execution"
    ]
  }
];

const experience = [
  {
    title: "Lecturer",
    company: "School of Information Technology, Monash University (Malaysia Campus)",
    location: "Malaysia",
    period: "Feb 2025 - Present",
    details: [
      "Preparing and delivering lectures, tutorials, seminars, and practical classes",
      "Developing and coordinating course content",
      "Conducting high-quality research and publishing findings",
      "Supervising honors and postgraduate student projects"
    ]
  },
  {
    title: "Threat Researcher", 
    company: "TXOne Networks",
    location: "Taiwan",
    period: "Jul 2023 - Jul 2024",
    details: [
      "In-depth analysis of emerging cyber threats and vulnerabilities",
      "Innovative security solutions & detection techniques",
      "Implement & test security measures",
      "Improvement of security products for OT environments"
    ]
  },
  {
    title: "Cyber Security Engineer",
    company: "Industrial Technology Research Institute (ITRI)", 
    location: "Taiwan",
    period: "Oct 2017 - Dec 2021",
    details: [
      "Developing advanced fuzzing techniques",
      "Analyzing software and hardware systems for security threats",
      "Designing and testing security measures for critical systems",
      "Creation and improvement of security products"
    ]
  },
  {
    title: "Research Fellowship",
    company: "The research institute IRSEEM (ESIGELEC)",
    location: "France", 
    period: "Jan 2014 - Dec 2014",
    details: [
      "Vehicular ad-hoc network security in Intelligent Transportation Systems",
      "Research leading to publications in reputable conferences",
      "Advancing cybersecurity methods for intelligent transportation"
    ]
  },
  {
    title: "Assistant Professor",
    company: "Manipal Institute of Technology (MIT), Manipal University",
    location: "India",
    period: "Aug 2010 - Dec 2016", 
    details: [
      "Instructed undergraduate & postgraduate students",
      "Published articles & papers in reputable journals & conferences",
      "Taught courses in Mobile Computing, Information Security, Wireless Communications"
    ]
  }
];

export default function CV() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* CV Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Curriculum <span className="text-[var(--primary-color)]">Vitae</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-8">
              Academic and professional background spanning research, teaching, and service 
              in cybersecurity, dependable systems security, and emerging technologies.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <button className="flex items-center gap-2 bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                <Download size={20} />
                Download PDF
              </button>
              <button className="flex items-center gap-2 bg-transparent border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                <Printer size={20} />
                Print CV
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)] sticky top-24"
              >
                <h3 className="text-xl font-bold mb-6 text-[var(--primary-color)]">At a Glance</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--primary-color)] mb-1">15+</div>
                    <div className="text-[var(--text-secondary)] text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--primary-color)] mb-1">25+</div>
                    <div className="text-[var(--text-secondary)] text-sm">Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--primary-color)] mb-1">230+</div>
                    <div className="text-[var(--text-secondary)] text-sm">Citations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--primary-color)] mb-1">Ph.D.</div>
                    <div className="text-[var(--text-secondary)] text-sm">Computer Science</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Education Section */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="text-[var(--primary-color)]" size={32} />
                  <h2 className="text-3xl font-bold">Education</h2>
                </div>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2">{edu.degree}</h3>
                          <div className="text-[var(--text-secondary)] mb-1">{edu.institution}</div>
                          <div className="text-[var(--text-muted)] text-sm">{edu.location}</div>
                        </div>
                        <span className="bg-[var(--primary-color)]/20 text-[var(--primary-color)] px-3 py-1 rounded-full text-sm font-medium">
                          {edu.period}
                        </span>
                      </div>
                      <ul className="text-[var(--text-secondary)] space-y-1">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[var(--primary-color)] mt-2">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Experience Section */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <Briefcase className="text-[var(--primary-color)]" size={32} />
                  <h2 className="text-3xl font-bold">Professional Experience</h2>
                </div>
                
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2">{exp.title}</h3>
                          <div className="text-[var(--text-secondary)] mb-1">{exp.company}</div>
                          <div className="text-[var(--text-muted)] text-sm">{exp.location}</div>
                        </div>
                        <span className="bg-[var(--secondary-color)]/20 text-[var(--secondary-color)] px-3 py-1 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="text-[var(--text-secondary)] space-y-1">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[var(--primary-color)] mt-2">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Skills & Expertise */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <Award className="text-[var(--primary-color)]" size={32} />
                  <h2 className="text-3xl font-bold">Skills & Expertise</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
                    <h3 className="text-lg font-bold text-[var(--primary-color)] mb-4">Research Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Cybersecurity', 'Dependable Systems', 'Information Flow Tracking', 'Machine Learning Security', 'IoT Security', 'Fuzzing Techniques'].map((skill) => (
                        <span key={skill} className="bg-[var(--primary-color)]/20 text-[var(--primary-color)] px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
                    <h3 className="text-lg font-bold text-[var(--primary-color)] mb-4">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'C/C++', 'Java', 'Security Analysis', 'Threat Research', 'Academic Writing', 'Research Methodology'].map((skill) => (
                        <span key={skill} className="bg-[var(--secondary-color)]/20 text-[var(--secondary-color)] px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}