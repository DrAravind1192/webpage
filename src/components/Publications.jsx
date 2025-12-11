import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, BookOpen } from 'lucide-react';
import { publications, profileData } from '../data/mock';

const Publications = () => {
  return (
    <section id="publications" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Publications
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
              Selected publications from my research in cometary science and observational astronomy.
            </p>
          </div>

          <div className="space-y-4">
            {publications.map((pub) => (
              <Card
                key={pub.id}
                className="p-6 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-600"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {pub.authors}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="text-slate-500 dark:text-slate-400">
                        {pub.journal}, {pub.year}
                      </span>
                      {pub.citations > 0 && (
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          {pub.citations} citations
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="rounded-full self-start"
                  >
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full border-slate-300 dark:border-slate-700"
            >
              <a
                href={profileData.socialLinks.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                View All Publications on Google Scholar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;