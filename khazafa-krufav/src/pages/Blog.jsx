import React from 'react';
import { blogPosts } from '../data/mockData';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <h2 className="mb-16 text-4xl font-black tracking-tight text-white md:text-6xl">JOURNAL</h2>
      
      <div className="flex flex-col">
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            className="group flex cursor-pointer flex-col gap-4 border-t border-zinc-900 py-12 transition-all hover:bg-zinc-900/30 md:flex-row md:items-start md:gap-12"
          >
            <div className="w-32 shrink-0 pt-1 text-sm font-medium text-zinc-500 group-hover:text-orange-500">
              {post.date}
            </div>
            
            <div className="grow">
              <h3 className="mb-3 flex items-center gap-2 text-2xl font-bold text-zinc-200 transition-colors group-hover:text-white">
                {post.title}
                <ArrowUpRight className="opacity-0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-orange-500" size={24} />
              </h3>
              <p className="text-zinc-400">{post.excerpt}</p>
            </div>
          </article>
        ))}
        {/* Bottom Border */}
        <div className="border-t border-zinc-900"></div>
      </div>
    </div>
  );
};

export default Blog;