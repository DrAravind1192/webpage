import React from 'react';
import { Card } from './ui/card';
import { Telescope, Atom, Sparkles, Orbit } from 'lucide-react';
import { currentResearch } from '../data/mock';

const iconMap = {
  0: Sparkles,
  1: Telescope,
  2: Atom,
  3: Orbit
};

const Research = () => {
  return (
    <section id="research" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Current Research
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {currentResearch.title}
            </p>
          </div>

          <Card className="p-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentResearch.description}
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {currentResearch.focusAreas.map((area, index) => {
              const Icon = iconMap[index];
              return (
                <Card
                  key={index}
                  className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {area.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;