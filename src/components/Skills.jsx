import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { skills } from '../data/mock';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
              Technical skills and research expertise developed through years of astronomical research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 text-sm py-1.5 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;