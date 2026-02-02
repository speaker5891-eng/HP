import React from 'react';
import { SectionId } from '../types';
import { WORKS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Works: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id={SectionId.WORKS} className="py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
          <div>
            <span className="text-orange-500 font-bold text-xs tracking-[0.2em] uppercase block mb-3">WORKS</span>
            <h3 className="text-2xl md:text-5xl font-bold text-white">施工・製作実績</h3>
          </div>
          <button 
            onClick={() => navigate('/works')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-slate-700 active:scale-95"
          >
            <span className="text-sm">すべての実績を見る</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-500" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {WORKS.slice(0, 6).map((work) => (
            <div 
                key={work.id} 
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-2xl border border-slate-800/50 
                           hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(234,88,12,0.2)] transition-all duration-500"
                onClick={() => navigate('/works')}
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img 
                  src={work.imageUrl} 
                  alt={work.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Hot Metal Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/10 transition-colors duration-500 mix-blend-overlay"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold text-orange-400 border border-orange-500/30 bg-orange-500/90 text-white rounded uppercase tracking-wider backdrop-blur-sm shadow-lg group-hover:bg-white group-hover:text-orange-600 transition-colors">
                  {work.category}
                </span>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-md group-hover:text-orange-50 transition-colors">
                  {work.title}
                </h4>
                {/* Glowing Bar */}
                <div className="h-0.5 w-0 bg-gradient-to-r from-orange-500 to-yellow-300 group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_10px_#f97316]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;