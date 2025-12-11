import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { FileText, BookOpen, Download, List } from 'lucide-react';
import { downloads } from '../data/mock';

const iconMap = {
  'file-text': FileText,
  'book-open': BookOpen,
  'list': List,
};

const Downloads = () => {
  const handleDownload = (download) => {
    if (!download.filePath) {
      alert('File not available. Please request the file via the contact form.');
      return;
    }

    const link = document.createElement('a');
    link.href = download.filePath;
    link.download = download.fileName;
    link.click();
  };

  return (
    <section id="downloads" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Documents & Resources
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
              Download my curriculum vitae, research documents, and publication lists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {downloads.map((download) => {
              const Icon = iconMap[download.icon] || FileText;
              return (
                <Card
                  key={download.id}
                  className="p-6 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        {download.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {download.description}
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleDownload(download)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full mt-auto"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
