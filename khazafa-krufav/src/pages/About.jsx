import React from 'react';
import { bioData } from '../data/mockData';
import { User, Film, Heart, GraduationCap, Camera, MessageSquare, Users } from 'lucide-react';
import { movies } from '../data/mockData';

const About = () => {
  const { details } = bioData;

  // Helper component untuk Section Title
  const SectionTitle = ({ icon: Icon, title }) => (
    <div className="mb-6 flex items-center gap-3 border-b border-zinc-800 pb-2">
      <Icon className="text-orange-500" size={20} />
      <h3 className="text-xl font-bold uppercase tracking-widest text-white">{title}</h3>
    </div>
  );

  return (
    // FIX 1: Added 'w-full' and 'overflow-hidden' here to stop the page from leaking sideways
    <div className="mx-auto max-w-5xl w-full overflow-hidden px-6 py-12 md:py-20">
      
      {/* Header Profile */}
      <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-center">
        <div className="h-40 w-40 shrink-0 overflow-hidden rounded-full border-2 border-orange-600/50 bg-zinc-900">
           <img 
             src="../foto khazafa cu.jpeg" 
             alt="Profile" 
             className="h-full w-full object-cover"
           />
        </div>
        <div>
          {/* FIX 2: Added 'break-words' to Name so long names wrap instead of pushing width */}
          <h1 className="text-4xl font-black uppercase tracking-tighter text-white break-words md:text-6xl">
            {bioData.name}
          </h1>
          <p className="mt-2 text-xl text-orange-500">{bioData.title}</p>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        
        {/* A. BIODATA */}
        <section>
          <SectionTitle icon={User} title="Biodata" />
          <div className="rounded bg-zinc-900/50 p-6">
            <ul className="space-y-4">
              {details.biodata.map((item, idx) => (
                <li key={idx} className="flex flex-col border-b border-zinc-800 pb-2 last:border-0 last:pb-0 sm:flex-row sm:justify-between">
                  <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{item.label}</span>
                  {/* FIX 3: Added 'break-words' to values (like Jurusan) */}
                  <span className="text-zinc-200 font-medium text-right break-words">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* B & C. LFM EXPERIENCE */}
        <section>
          <SectionTitle icon={Film} title="Perjalanan LFM" />
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <div>
              <h4 className="mb-2 font-bold text-white">Momen Paling Memorable</h4>
              <p className="italic text-zinc-400">"{details.memorableLFM}"</p>
            </div>
          </div>
        </section>

        {/* E. KARYA SELAMA LFM */}
        <section>
          <SectionTitle icon={Camera} title="Karya Di LFM" />
          {/* FIX 4: Corrected grid class to 'sm:grid-cols-1' (was broken) */}
          <ul className="grid gap-3 sm:grid-cols-1">
            {movies.map((movie) => (
              <li key={movie.id} className="flex items-center gap-3 rounded bg-zinc-900 p-3 transition-colors hover:bg-zinc-800">
                <div className="h-2 w-2 rounded-full bg-orange-500 shrink-0"></div>
                {/* FIX 5: Added 'truncate' to prevent long titles from breaking layout */}
                <span className="font-medium text-zinc-200 truncate">{movie.title}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* FULL WIDTH SECTIONS */}
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        
        {/* F & G. MESSAGES */}
        <section className="flex flex-col gap-6">
          <div>
            <SectionTitle icon={MessageSquare} title="Pesan Untuk Pewawancara" />
            <blockquote className="border-l-4 border-orange-600 bg-zinc-900/50 p-4 text-lg italic text-zinc-300">
              "{details.messageInterviewer}"
            </blockquote>
          </div>
          <div>
            <SectionTitle icon={Heart} title="Pesan Untuk Ca-Kru 2025" />
            <div className="rounded-lg bg-orange-900/20 p-6 text-orange-200 border border-orange-900/30">
              {details.messageJuniors}
            </div>
          </div>
        </section>

        {/* H. FOTO KRU FAVORIT */}
        <section>
          <SectionTitle icon={Users} title="foto bersama" />
          <div className="group relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-900 h-full">
            <img 
              src="/foto bareng.jpeg"
              alt="Kru Favorit" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-4">
              <p className="text-white font-medium">foto saat wawan.</p>
            </div>
          </div>
        </section>

      </div>

      {/* I. OTHER CONTENT */}
      <div className="mt-16 border-t border-zinc-900 pt-8 text-center">
        <p className="text-zinc-600 text-sm">
          made with love
        </p>
      </div>

    </div>
  );
};

export default About;