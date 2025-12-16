import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { bioData } from '../data/mockData';

const Home = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-start justify-center px-6 py-12 md:py-0">
      <div className="max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-orange-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
          </span>
          Available for Hire
        </div>
        
        <h1 className="text-5xl font-black leading-none tracking-tighter text-white sm:text-7xl lg:text-9xl">
          VISUAL <br />
          <span className="text-zinc-800">STORYTELLING</span>
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
            Read Bio <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;    