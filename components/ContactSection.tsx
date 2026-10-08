'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Twitter, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { USER_INFO } from '@/data/portfolio-data';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.senderName || !formData.message) return;

    // Build mailto query
    const subjectParam = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.senderName}`
    );
    const bodyParam = encodeURIComponent(
      `Name: ${formData.senderName}\nEmail: ${formData.senderEmail}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${USER_INFO.email}?subject=${subjectParam}&body=${bodyParam}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ffe600', '#00f0ff', '#ff2a85', '#10b981'],
    });
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="space-y-3 pb-8 border-b-[2.5px] border-black dark:border-white">
        <div className="inline-block px-3 py-1 text-xs font-black uppercase bg-[#FFE600] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          06. CONNECT &amp; COLLABORATE
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black dark:text-white">
          GET IN TOUCH
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium max-w-xl">
          Interested in hiring Arun for full-stack, Android, Python, or open-source projects? Drop a note or reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Column: Direct Coordinate Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="bg-white dark:bg-[#181a20] border-[2.5px] border-black dark:border-white p-5 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ffe600] border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000]">
                <Mail className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-zinc-500">
                  Direct Email
                </span>
                <p className="text-xs sm:text-sm font-bold text-black dark:text-white break-all">
                  {USER_INFO.email}
                </p>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(USER_INFO.email, 'email')}
              className="p-2 border-2 border-black dark:border-white hover:bg-[#ffe600] hover:text-black transition-colors cursor-pointer shrink-0"
              title="Copy Email Address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className="bg-white dark:bg-[#181a20] border-[2.5px] border-black dark:border-white p-5 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00f0ff] border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000]">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-zinc-500">
                  Mobile / Phone
                </span>
                <p className="text-xs sm:text-sm font-bold text-black dark:text-white">
                  {USER_INFO.phone}
                </p>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(USER_INFO.phone, 'phone')}
              className="p-2 border-2 border-black dark:border-white hover:bg-[#00f0ff] hover:text-black transition-colors cursor-pointer shrink-0"
              title="Copy Phone Number"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location Card */}
          <div className="bg-white dark:bg-[#181a20] border-[2.5px] border-black dark:border-white p-5 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] flex items-center gap-3">
            <div className="w-10 h-10 bg-[#ff2a85] border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000]">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-zinc-500">
                Location &amp; Address
              </span>
              <p className="text-xs sm:text-sm font-bold text-black dark:text-white">
                {USER_INFO.address}
              </p>
            </div>
          </div>

          {/* Social Profiles Bento */}
          <div className="bg-[#f7f5ee] dark:bg-[#1a1c26] border-[2.5px] border-black dark:border-white p-5 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-black dark:text-white block">
              Social Profiles &amp; Handles
            </span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={USER_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white dark:bg-[#222532] border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] hover:bg-[#ffe600] hover:text-black transition-colors flex items-center gap-2 text-xs font-bold"
              >
                <Github className="w-4 h-4 shrink-0" />
                <span className="truncate">GitHub</span>
              </a>
              <a
                href={USER_INFO.twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white dark:bg-[#222532] border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] hover:bg-[#00f0ff] hover:text-black transition-colors flex items-center gap-2 text-xs font-bold"
              >
                <Twitter className="w-4 h-4 shrink-0" />
                <span className="truncate">Twitter / X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Message Composer Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#181a20] border-[2.5px] border-black dark:border-white p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] space-y-5"
          >
            <div className="border-b-2 border-black dark:border-white pb-3 flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-black uppercase text-black dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-500" />
                <span>Send a Direct Message</span>
              </h3>
              <span className="text-[11px] font-mono text-zinc-500">Fast Response</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-black dark:text-zinc-200">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.senderName}
                  onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                  placeholder="e.g. John Doe / Tech Recruiter"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-[#fcfbf7] dark:bg-[#232733] text-black dark:text-white border-2 border-black dark:border-zinc-400 focus:outline-none focus:bg-[#ffe600]/20"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-black dark:text-zinc-200">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.senderEmail}
                  onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-[#fcfbf7] dark:bg-[#232733] text-black dark:text-white border-2 border-black dark:border-zinc-400 focus:outline-none focus:bg-[#ffe600]/20"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-black dark:text-zinc-200">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Software Engineering Opportunity / Project Inquiry"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-[#fcfbf7] dark:bg-[#232733] text-black dark:text-white border-2 border-black dark:border-zinc-400 focus:outline-none focus:bg-[#ffe600]/20"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-black dark:text-zinc-200">
                Message *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell Arun about your team, role or project..."
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-[#fcfbf7] dark:bg-[#232733] text-black dark:text-white border-2 border-black dark:border-zinc-400 focus:outline-none focus:bg-[#ffe600]/20 resize-y"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="neo-btn w-full sm:w-auto px-7 py-3 bg-[#ffe600] text-black font-black text-xs sm:text-sm uppercase border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Dispatch Email &gt;</span>
                <Send className="w-4 h-4" />
              </button>

              {submitted && (
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Mail client launched!
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
