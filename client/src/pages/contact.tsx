import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:sanoop.mallissery@monash.edu?subject=Research Collaboration Inquiry&body=Dear Dr. Mallissery,%0D%0A%0D%0AI am interested in discussing...';
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Contact Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-[var(--primary-color)]">Touch</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              I'm always interested in discussing research collaborations, speaking opportunities, 
              and academic partnerships. Feel free to reach out for any inquiries related to 
              cybersecurity research, dependable systems security, or academic collaboration.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
              <p className="text-[var(--text-secondary)]">
                Use the form below to get in touch. I'll respond to your message as soon as possible.
              </p>
            </motion.div>

            {/* Email Contact Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[var(--bg-card)] p-12 rounded-2xl border border-[var(--border-color)] text-center"
            >
              <div className="w-24 h-24 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail className="text-[var(--primary-color)]" size={48} />
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
              <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-lg mx-auto">
                Ready to discuss research collaborations, academic partnerships, or cybersecurity innovations? 
                Click below to send me an email directly.
              </p>
              
              <button 
                onClick={handleEmailClick}
                className="inline-flex items-center gap-3 bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail size={24} />
                Send Email to Contact
              </button>
              
              <p className="text-[var(--text-secondary)] text-sm mt-6">
                This will open your default email client with a pre-filled message
              </p>
            </motion.div>
          </div>

          {/* Research Collaboration */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 p-8 rounded-2xl border border-[var(--border-color)]">
              <h3 className="text-2xl font-bold mb-4">Research Collaboration</h3>
              <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
                I'm always interested in collaborating with fellow researchers, industry partners, 
                and academic institutions on cutting-edge projects that push the boundaries of 
                cybersecurity and dependable systems security.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="text-[var(--primary-color)]" size={24} />
                  </div>
                  <h4 className="font-semibold mb-2">Industry Partnerships</h4>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Collaborating with leading technology companies to translate research into real-world solutions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="text-[var(--primary-color)]" size={24} />
                  </div>
                  <h4 className="font-semibold mb-2">Academic Networks</h4>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Building partnerships with top-tier universities and research institutions worldwide.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="text-[var(--primary-color)]" size={24} />
                  </div>
                  <h4 className="font-semibold mb-2">Student Mentorship</h4>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Guiding the next generation of researchers through hands-on project involvement.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}