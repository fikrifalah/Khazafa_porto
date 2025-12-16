import React from 'react';
import { bioData } from '../data/mockData';

const About = () => {
  return (
    <div className="px-6 py-12 md:py-20">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative order-2 lg:order-1">
          <div className="aspect-4/5 w-full overflow-hidden rounded bg-zinc-900 grayscale transition-all hover:grayscale-0">
             <img 
               src="https://placehold.co/800x1000/18181b/f97316?text=Director+Portrait" 
               alt="Marcus Thorne" 
               className="h-full w-full object-cover"
             />
          </div>
          <div className="absolute -left-4 -top-4 -z-10 h-full w-full border border-zinc-800"></div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-orange-900/50"></div>
        </div>

        {/* Text Side */}
        <div className="order-1 flex flex-col justify-center lg:order-2">
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-white md:text-5xl">
            {bioData.name}
          </h2>
          <h3 className="mb-8 text-xl text-orange-500">{bioData.title}</h3>
          
          <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              Filmmaking is not just about capturing reality, but about constructing a truth that feels more real than the world outside the theater.
            </p>
            <p>
              {bioData.description}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-zinc-900 pt-8">
            {bioData.stats.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <span className="block text-4xl font-black text-white">{stat.value}</span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-widest text-zinc-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;