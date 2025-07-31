import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Contact() {
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)]"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form 
                action="https://formspree.io/f/YOUR_FORM_ID" 
                method="POST" 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--primary-color)] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--primary-color)] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--primary-color)] transition-colors"
                    placeholder="Research collaboration inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={6}
                    name="message"
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--primary-color)] transition-colors resize-none"
                    placeholder="Tell me about your research interests, collaboration ideas, or any questions you have..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
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