import React from 'react';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-slate-600 dark:text-slate-400">
            My academic background and professional credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Box */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-xl text-blue-600 dark:text-blue-400">
                <HiAcademicCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <h4 className="font-medium text-slate-900 dark:text-slate-100">B.Tech in Computer Science & Engineering</h4>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">Dev Bhoomi Uttarakhand University, Dehradun</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">CGPA: 7.0 / 10</p>
          </div>

          {/* Certifications Box */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-xl text-blue-600 dark:text-blue-400">
                <HiBadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <strong className="text-slate-900 dark:text-slate-100 block">Deloitte Technology Job Simulation</strong>
                <span>Forage</span>
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-100 block">Digital Productivity with AI</strong>
                <span>UNICEF (Passport to Earning)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}