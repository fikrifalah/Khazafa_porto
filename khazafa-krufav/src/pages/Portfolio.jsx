import React from 'react';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/mockData';

const Portfolio = () => {
  return (
    <div className="px-6 py-12 md:py-20">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-zinc-900 pb-8 md:flex-row md:items-end">
        <div>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">KARYA SELAMA DI LFM</h2>
          <p className="mt-2 text-zinc-500">Film pendek dan kreasi lainnya</p>
        </div>
        <div className="text-right text-sm font-bold text-orange-500">
          {movies.length} PROJECTS
        </div>
      </div>


      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;