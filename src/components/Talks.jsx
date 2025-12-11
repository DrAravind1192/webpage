import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Calendar, MapPin, Presentation, Eye } from 'lucide-react';
import { talks } from '../data/mock';

const Talks = () => {
  const [selectedTalk, setSelectedTalk] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTalkClick = (talk) => {
    setSelectedTalk(talk);
    setIsDialogOpen(true);
  };

  return (
    <section id="talks" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Talks & Presentations
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
              Invited talks and conference presentations sharing my research findings. Click on any talk to view details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {talks.map((talk) => (
              <Card
                key={talk.id}
                className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer"
                onClick={() => handleTalkClick(talk)}
              >
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Presentation className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {talk.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2 pl-11">
                    <p className="text-base font-medium text-slate-700 dark:text-slate-300">
                      {talk.event}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{talk.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{talk.location}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTalkClick(talk);
                      }}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Talk Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedTalk && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold pr-8">
                  {selectedTalk.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  <div className="space-y-2 mt-2">
                    <p className="font-medium text-slate-700 dark:text-slate-300">
                      {selectedTalk.event}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{selectedTalk.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedTalk.location}</span>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Presentation Image */}
                <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={selectedTalk.image}
                    alt={`${selectedTalk.title} presentation`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Detailed Description */}
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Presentation Overview
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedTalk.description}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Talks;