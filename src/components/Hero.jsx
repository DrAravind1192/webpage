import React from 'react';
import { ExternalLink, Linkedin, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { profileData, metrics } from '../data/mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-900" />
      
      {/* Stars effect - Only visible in dark mode */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Large stars */}
        <div className="absolute top-[10%] left-[15%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-[25%] right-[20%] w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[15%] left-[45%] w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[40%] right-[35%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[60%] left-[25%] w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[70%] right-[15%] w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-[20%] left-[60%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[35%] left-[70%] w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
        
        {/* Medium stars */}
        <div className="absolute top-[20%] left-[55%] w-0.5 h-0.5 bg-blue-400/80 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-[50%] right-[45%] w-0.5 h-0.5 bg-blue-300/80 rounded-full animate-pulse" style={{ animationDelay: '2.3s' }} />
        <div className="absolute top-[45%] left-[35%] w-0.5 h-0.5 bg-blue-500/80 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }} />
        <div className="absolute bottom-[35%] right-[25%] w-0.5 h-0.5 bg-blue-400/80 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="absolute top-[75%] left-[80%] w-0.5 h-0.5 bg-blue-300/80 rounded-full animate-pulse" style={{ animationDelay: '2.8s' }} />
        <div className="absolute top-[30%] right-[60%] w-0.5 h-0.5 bg-blue-500/80 rounded-full animate-pulse" style={{ animationDelay: '1.6s' }} />
        
        {/* Small stars */}
        <div className="absolute top-[12%] left-[30%] w-px h-px bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-[22%] right-[50%] w-px h-px bg-blue-300/60 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }} />
        <div className="absolute top-[55%] left-[50%] w-px h-px bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '2.1s' }} />
        <div className="absolute bottom-[40%] right-[55%] w-px h-px bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }} />
        <div className="absolute top-[65%] left-[40%] w-px h-px bg-blue-300/60 rounded-full animate-pulse" style={{ animationDelay: '2.6s' }} />
        <div className="absolute top-[80%] right-[40%] w-px h-px bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '1.3s' }} />
        <div className="absolute top-[18%] left-[75%] w-px h-px bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '2.9s' }} />
        <div className="absolute bottom-[30%] left-[20%] w-px h-px bg-blue-300/60 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-[42%] right-[70%] w-px h-px bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '1.9s' }} />
        <div className="absolute top-[58%] left-[65%] w-px h-px bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '2.4s' }} />
        <div className="absolute bottom-[25%] right-[30%] w-px h-px bg-blue-300/60 rounded-full animate-pulse" style={{ animationDelay: '1.1s' }} />
        <div className="absolute top-[28%] left-[85%] w-px h-px bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '2.7s' }} />
        <div className="absolute top-[72%] right-[65%] w-px h-px bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        <div className="absolute bottom-[45%] left-[10%] w-px h-px bg-blue-300/60 rounded-full animate-pulse" style={{ animationDelay: '1.7s' }} />
        <div className="absolute top-[38%] right-[80%] w-px h-px bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '2.2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wide uppercase text-sm">
                Astrophysicist
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                {profileData.name}
              </h1>
              <p className="text-2xl text-slate-600 dark:text-slate-300 font-light">
                {profileData.title}
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                {profileData.affiliation}
              </p>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {profileData.tagline}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {metrics.citations}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Citations
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {metrics.publications}+
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Publications
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  h-index: {metrics.hIndex}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Research Impact
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full border-slate-300 dark:border-slate-700"
              >
                <a
                  href={profileData.socialLinks.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Publications
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={profileData.socialLinks.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Google Scholar"
              >
                <GraduationCap className="h-5 w-5" />
              </a>
              <a
                href={profileData.socialLinks.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="ResearchGate"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href={profileData.socialLinks.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="ORCID"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.053-1.666 4.053-3.722 0-2.053-1.694-3.722-4.053-3.722h-2.297z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Professional Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-2 rounded-2xl">
                <div className="w-96 h-[28rem] bg-slate-300 dark:bg-slate-700 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={profileData.image}
                    alt={profileData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden text-center text-slate-500 dark:text-slate-400 p-8 flex-col items-center justify-center">
                    <GraduationCap className="h-24 w-24 mx-auto mb-4 opacity-30" />
                    <p className="text-sm">Professional photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;