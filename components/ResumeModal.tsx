'use client';

import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Check, GraduationCap, Briefcase } from 'lucide-react';
import { USER_INFO, EDUCATION_DATA } from '@/data/portfolio-data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white text-black border-[3px] border-black shadow-[10px_10px_0px_0px_#ffe600] max-h-[92vh] flex flex-col overflow-hidden"
      >
        {/* Top Action Toolbar */}
        <div className="bg-[#181a24] text-white p-3 sm:p-4 flex items-center justify-between border-b-2 border-black shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#ffe600] text-black font-black text-xs uppercase border border-black">
              RESUME
            </span>
            <span className="font-mono text-xs font-bold text-zinc-300">
              Arun_Anand_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#ffe600] text-black hover:bg-yellow-400 font-bold text-xs uppercase border border-black flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print Resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 flex items-center justify-center bg-white text-black hover:bg-[#ff2a85] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 bg-white text-zinc-900 font-sans print:p-0 print:m-0">
          {/* Header */}
          <div className="text-center pb-6 border-b-2 border-zinc-900 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-zinc-950">
              ARUN ANAND
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-zinc-700 font-medium">
              <span className="flex items-center gap-1">
                <strong>Mobile:</strong> {USER_INFO.phone}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <strong>Email:</strong> {USER_INFO.email}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 font-medium">
              <strong>Address:</strong> {USER_INFO.address}
            </p>
          </div>

          {/* CAREER OBJECTIVE */}
          <div className="space-y-2">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 border-l-4 border-zinc-900 pl-2">
              CAREER OBJECTIVE
            </h2>
            <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed pl-3 font-normal">
              {USER_INFO.careerObjective}
            </p>
          </div>

          {/* EDUCATIONAL QUALIFICATIONS */}
          <div className="space-y-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 border-l-4 border-zinc-900 pl-2">
              EDUCATIONAL QUALIFICATIONS
            </h2>
            <div className="overflow-x-auto pl-3">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b-2 border-zinc-900 bg-zinc-100 font-bold text-zinc-900">
                    <th className="py-2 px-3">Qualification</th>
                    <th className="py-2 px-3">Institution / Board</th>
                    <th className="py-2 px-3">Year</th>
                    <th className="py-2 px-3">Score / Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-300">
                  <tr>
                    <td className="py-2.5 px-3 font-bold">BCA - AI</td>
                    <td className="py-2.5 px-3">Jananayak Chandrashekhar University (JNCU), Ballia</td>
                    <td className="py-2.5 px-3">Enrolled This Year</td>
                    <td className="py-2.5 px-3 font-bold text-emerald-800">Currently Pursuing (1st Year)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold">12th (Intermediate) — PCM with CS</td>
                    <td className="py-2.5 px-3">Jawahar Navodaya Vidyalaya, Gorakhpur (CBSE)</td>
                    <td className="py-2.5 px-3">2026</td>
                    <td className="py-2.5 px-3 font-bold">78%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-bold">10th (High School)</td>
                    <td className="py-2.5 px-3">Jawahar Navodaya Vidyalaya, Gorakhpur (CBSE)</td>
                    <td className="py-2.5 px-3">2024</td>
                    <td className="py-2.5 px-3 font-bold">88%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SKILLS & ATTRIBUTES */}
          <div className="space-y-2">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 border-l-4 border-zinc-900 pl-2">
              SKILLS &amp; ATTRIBUTES
            </h2>
            <div className="pl-3 space-y-1.5 text-xs sm:text-sm text-zinc-800">
              <p>
                <strong>Technical Skills:</strong> Python, JavaScript, TypeScript, Kotlin, C, React, Next.js, Node.js, HTML5, CSS3, SCSS, Git &amp; GitHub, Linux/Bash, Android Dev, REST APIs
              </p>
              <p>
                <strong>Core Skills:</strong> Communication Skills, Quick Learner, Teamwork, Adaptability, Time Management
              </p>
              <p>
                <strong>Languages Known:</strong> Hindi, English
              </p>
              <p>
                <strong>Experience Level:</strong> Fresher
              </p>
            </div>
          </div>

          {/* PERSONAL DETAILS */}
          <div className="space-y-2">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 border-l-4 border-zinc-900 pl-2">
              PERSONAL DETAILS
            </h2>
            <div className="pl-3 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-6 text-xs sm:text-sm text-zinc-800">
              <p><strong>Father&apos;s Name:</strong> Late Raj Kumar Gupta</p>
              <p><strong>Gender:</strong> Male</p>
              <p><strong>Mother&apos;s Name:</strong> Soni Gupta</p>
              <p><strong>Marital Status:</strong> Unmarried</p>
              <p><strong>Date of Birth:</strong> 28/08/2007</p>
              <p><strong>Religion &amp; Category:</strong> Hindu (OBC)</p>
            </div>
          </div>

          {/* DECLARATION */}
          <div className="space-y-4 pt-4 border-t-2 border-zinc-900">
            <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 border-l-4 border-zinc-900 pl-2">
              DECLARATION
            </h2>
            <p className="text-xs sm:text-sm text-zinc-800 italic pl-3">
              I hereby declare that the above information is true and correct to the best of my knowledge.
            </p>
            <div className="flex justify-between items-end pt-4 pl-3 text-xs sm:text-sm font-bold text-zinc-900">
              <div>
                <p>Place: Ballia</p>
                <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">(Arun Anand)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
