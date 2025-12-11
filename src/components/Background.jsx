import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, Briefcase } from 'lucide-react';
import { education, professionalExperience } from '../data/mock';

const Background = () => {
  return (
    <section id="background" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Background
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

                <div className="space-y-6">
                  {education.map((edu) => (
                    <Card
                      key={edu.id}
                      className="relative p-5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 ml-12"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-14 top-6 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900"></div>

                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <span className="flex-shrink-0 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-base font-medium text-slate-700 dark:text-slate-300">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {edu.location}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 pt-2">
                          {edu.details}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Experience Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Professional Experience
                </h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

                <div className="space-y-6">
                  {professionalExperience.map((exp) => (
                    <Card
                      key={exp.id}
                      className="relative p-5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 ml-12"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-14 top-6 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900"></div>

                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {exp.position}
                          </h4>
                          <span className="flex-shrink-0 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-base font-medium text-slate-700 dark:text-slate-300">
                          {exp.institution}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {exp.location}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 pt-2">
                          {exp.details}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;