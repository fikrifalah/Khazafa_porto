import React from 'react';
import { Clock, Film, Play } from 'lucide-react';

const MovieCard = ({ movie }) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-sm bg-zinc-900 shadow-xl transition-all duration-500 hover:shadow-orange-900/20">
      {/* Image Container */}
      <div className="aspect-2/3 w-full overflow-hidden">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
        />
      </div>

      {/* Default State (Visible initially) */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-bold text-white text-lg">{movie.title}</h3>
        <p className="text-orange-500 text-sm font-medium">{movie.year}</p>
      </div>

      {/* Hover State (Overlay) */}
      <div className="absolute inset-0 flex flex-col justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/80 backdrop-blur-sm border border-orange-500/30">
        <div className="mb-4 space-y-2">
          <h3 className="text-2xl font-bold leading-tight text-white">{movie.title}</h3>
          <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
            <span className="flex items-center gap-1"><Clock size={12} /> {movie.duration}</span>
            <span className="flex items-center gap-1"><Film size={12} /> {movie.genre}</span>
          </div>
        </div>
        
        <p className="mb-6 line-clamp-4 text-sm leading-relaxed text-zinc-300">
          {movie.synopsis}
        </p>
        
      <a href={movie.link}>
        <button className="flex w-full items-center justify-center gap-2 rounded bg-orange-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-  500 cursor-pointer">
          <Play size={16} fill="currentColor" /> WATCH 
        </button>
      </a>
      </div>
    </div>
  );
};

export default MovieCard;