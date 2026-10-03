import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, Github, Linkedin, MessageSquare, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'jishnupremms2025@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate swift network submission & save to localStorage for persistence
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('portfolio_messages', JSON.stringify(stored));
      } catch (err) {
        console.error(err);
      }
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#F8F6F0] border-t border-[#E6E1D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D97706]">
            LET'S CONNECT
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1612] tracking-tight">
            Ready to build something <span className="gold-3d-text">extraordinary</span>?
          </h2>
          <p className="mt-3 text-base text-[#4E443A] leading-relaxed">
            Whether you want to discuss an innovative project, explore collaboration opportunities, or simply share ideas on modern technology and entrepreneurship, I'd love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Details & Status */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Availability Status Badge */}
            <div className="p-6 rounded-2xl bg-white border border-[#E6E1D5] shadow-sm">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
                  Open for Opportunities
                </span>
              </div>
              <p className="mt-3 text-sm text-[#4E443A] leading-relaxed">
                Currently open for software engineering internships, technical collaborations, and ambitious venture discussions.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-4">
              {/* Email Card with Copy button */}
              <div className="p-5 rounded-2xl bg-white border border-[#E6E1D5] shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-[#D97706]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#807264] font-medium block">Direct Email</span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-sm font-bold text-[#181410] hover:text-[#D97706] transition-colors"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EFEBE1] text-[#4E443A] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E6E1D5] shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-[#D97706]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#807264] font-medium block">Location</span>
                  <span className="text-sm font-bold text-[#181410]">Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Social Connect Links */}
            <div>
              <span className="text-xs font-bold text-[#807264] uppercase tracking-wider block mb-3">
                Digital Presence
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/jishnupremms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white border border-[#E6E1D5] hover:border-[#D97706] text-xs font-bold text-[#1A1612] flex items-center gap-2 shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/jishnupremms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white border border-[#E6E1D5] hover:border-[#D97706] text-xs font-bold text-[#1A1612] flex items-center gap-2 shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E6E1D5] p-8 sm:p-10 shadow-md">
              <h3 className="font-display text-2xl font-bold text-[#1A1612]">
                Send a Message
              </h3>
              <p className="mt-1 text-sm text-[#574C41]">
                Responses typically delivered within 24 hours.
              </p>

              {submitted ? (
                <div className="mt-8 p-8 rounded-2xl bg-amber-50 border border-amber-200 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1612]">Thank You!</h4>
                  <p className="mt-2 text-sm text-[#4E443A]">
                    Your message has been received. Jishnuprem will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 px-5 py-2 text-xs font-bold text-[#181410] bg-white border border-[#E6E1D5] rounded-full hover:bg-neutral-50 transition-colors"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#4E443A] uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6E1D5] focus:border-[#D97706] focus:bg-white focus:outline-none text-sm text-[#181410] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#4E443A] uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6E1D5] focus:border-[#D97706] focus:bg-white focus:outline-none text-sm text-[#181410] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4E443A] uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Opportunity / Project Idea"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6E1D5] focus:border-[#D97706] focus:bg-white focus:outline-none text-sm text-[#181410] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4E443A] uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your thoughts, project details, or proposed collaboration..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6E1D5] focus:border-[#D97706] focus:bg-white focus:outline-none text-sm text-[#181410] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-[#1A1612] bg-gradient-to-r from-[#FBA438] via-[#F59E0B] to-[#E58814] hover:from-[#F59E0B] hover:to-[#D97706] shadow-[0_4px_18px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.55)] transition-all cursor-pointer disabled:opacity-70"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
