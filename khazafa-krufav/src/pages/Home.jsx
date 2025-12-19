import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { bioData } from '../data/mockData';

const Home = () => {
  return (
    <div className="flex min-h-[85vh] items-center px-6 py-12 md:py-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        
        {/* Left Column: Text */}
        <div className="space-y-8">
          <h1 className="text-5xl font-black leading-none tracking-tighter text-white sm:text-7xl lg:text-8xl">
            KRUFAV KHAZAFA<br />
            <span className="text-zinc-800"></span>
          </h1>
          
          <p className="max-w-xl text-lg text-zinc-400 md:text-xl">
            {bioData.description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link 
              to="/portfolio" 
              className="flex items-center justify-center gap-2 rounded bg-orange-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-900/20"
            >
              View Portfolio
            </Link>
            <Link 
              to="/about" 
              className="flex items-center justify-center gap-2 rounded border border-zinc-800 px-8 py-4 text-sm font-bold uppercase tracking-widest text-zinc-300 transition-colors hover:border-orange-500 hover:text-orange-500"
            >
              More About Me <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right Column: Cinematic Placeholder Image */}
        <div className="relative h-[500px] w-full overflow-hidden rounded-sm bg-zinc-900 shadow-2xl lg:h-[700px]">
           <img 
             src="../foto khazafa.jpeg" 
             alt="Featured Work" 
             className="h-full w-full object-cover opacity-80 transition-transform duration-1000 hover:scale-105"
           />
           {/* Overlay Gradient */}
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        </div>

      </div>
    </div>
  );
};

export default Home;