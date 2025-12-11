import React from 'react';
import { Card } from './ui/card';
import { profileData } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          </div>

          <Card className="p-8 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {profileData.bio}
            </p>
          </Card>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Comets, those celestial marvels composed of dust, rock, and ice, hold paramount 
              importance in the field of astronomy and space exploration. Observing comets provides 
              us with invaluable insights into the early stages of our solar system's formation, 
              offering a glimpse into the primordial material from which planets and other celestial 
              bodies emerged.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
              The study of comets also plays a pivotal role in understanding the intricate interplay 
              between the Sun and its surroundings, shedding light on the dynamic processes occurring 
              in the outer reaches of our cosmic neighbourhood. Furthermore, comets' mesmerizing tails, 
              created as they approach the Sun, serve as captivating cosmic laboratories, revealing 
              crucial information about the solar wind and the composition of the interplanetary medium.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
              Beyond my research, my passion for sports is an unstoppable force. Whether it's the thrill 
              of a perfectly executed football goal, the lightning-fast reflexes required in badminton, 
              the camaraderie of a competitive volleyball match, or the precision and finesse of table 
              tennis, each sport ignites a fire within me. I am also trained in playing the Mrudangam, 
              an ancient Indian percussion instrument, and well-versed in yoga, nurturing a harmonious 
              balance between rhythm and inner peace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;