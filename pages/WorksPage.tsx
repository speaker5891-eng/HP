import React, { useState, useEffect } from 'react';
import { WORKS } from '../constants';
import { ArrowLeft, Filter, X, ZoomIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorksPage: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);
  
  // 3つの固定カテゴリ
  const fixedCategories = ["鉄骨工事", "膜構造鉄骨工事", "特殊鉄骨・金物"];
  const categories = ['All', ...fixedCategories];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (url: string, title: string) => {
    setSelectedImage({ url, title });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Masonry-like Layout
  const renderMasonry = (items: typeof WORKS) => (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {items.map((work) => (
        <div 
            key={work.id} 
            className="break-inside-avoid group relative overflow-hidden rounded-xl bg-slate-900 shadow-2xl cursor-pointer"
            onClick={() => openLightbox(work.imageUrl, work.title)}
        >
          {/* Image */}
          <img 
            src={work.imageUrl} 
            alt={work.title} 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          
          {/* Overlay Gradient on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>

          {/* Zoom Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
             <div className="bg-orange-600/90 p-3 rounded-full text-white shadow-lg backdrop-blur-sm">
                <ZoomIn className="w-6 h-6" />
             </div>
          </div>
          
          {/* Category Tag (Overlay Bottom Left) */}
          <div className="absolute bottom-4 left-4 pointer-events-none">
             <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-orange-600/90 backdrop-blur-md rounded shadow-lg border border-orange-500/50">
                {work.category}
             </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-24 pb-16 bg-slate-950 min-h-screen relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            トップページへ戻る
          </button>
          
          <span className="text-orange-500 font-bold text-xs tracking-[0.2em] uppercase block mb-3">WORKS GALLERY</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">施工・製作実績一覧</h1>
        </div>

        {/* Filter */}
        <div className="mb-12 flex flex-wrap gap-3 items-center sticky top-24 z-30 bg-slate-950/90 backdrop-blur py-4 border-b border-slate-800/50">
            <div className="flex items-center gap-2 text-slate-500 mr-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-bold">CATEGORY:</span>
            </div>
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => {
                        setFilter(cat);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                        filter === cat 
                        ? 'bg-orange-600 border-orange-500 text-white shadow-[0_0_15px_rgba(234,88,12,0.4)]' 
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                    }`}
                >
                    {cat === 'All' ? 'すべて' : cat}
                </button>
            ))}
        </div>

        {/* Content */}
        <div className="min-h-[500px]">
            {filter === 'All' ? (
                // Group by Category but maintain Masonry feel by just showing everything sorted or sectioned
                renderMasonry(WORKS)
            ) : (
                renderMasonry(WORKS.filter(item => item.category === filter))
            )}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
            <div 
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up"
                onClick={closeLightbox}
            >
                <button 
                    onClick={closeLightbox}
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
                >
                    <X className="w-8 h-8" />
                </button>
                
                <div 
                    className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                >
                    <img 
                        src={selectedImage.url} 
                        alt={selectedImage.title} 
                        className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
                    />
                    <div className="mt-4 text-center">
                        <p className="text-white font-bold text-lg tracking-wide">{selectedImage.title}</p>
                    </div>
                </div>
            </div>
        )}

        {/* Footer Link */}
        <div className="mt-24 text-center">
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 inline-block max-w-2xl">
                <h3 className="text-xl font-bold text-white mb-4">お問い合わせ</h3>
                <p className="text-slate-400 mb-6 text-sm">
                    掲載されていない実績も多数ございます。<br/>
                    詳細な実績や技術的なご相談は、お気軽にお問い合わせください。
                </p>
                <button 
                    onClick={() => navigate('/', { state: { targetId: 'contact' } })}
                    className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded transition-all shadow-lg hover:shadow-orange-500/30"
                >
                    お問い合わせフォームへ
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default WorksPage;