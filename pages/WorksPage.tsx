import React, { useState, useEffect } from 'react';
import { WORKS } from '../constants';
import { ArrowLeft, Filter, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorksPage: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('All');
  
  // カテゴリ一覧を抽出（重複排除）
  // 優先表示順序を定義する場合はここでソートする
  const rawCategories = Array.from(new Set(WORKS.flatMap(w => w.category.split('　'))));
  const categoryOrder = [
    "大型鉄骨",
    "膜構造（テント）鉄骨工事",
    "特殊鉄骨",
    "建築鉄骨",
    "特殊金物",
    "品質管理",
    "工場製作・品質管理"
  ];
  
  const categories = ['All', ...categoryOrder.filter(c => rawCategories.includes(c)), ...rawCategories.filter(c => !categoryOrder.includes(c))];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderGrid = (items: typeof WORKS) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((work) => (
        <div 
            key={work.id} 
            className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 
                       hover:border-orange-500/50 shadow-xl transition-all duration-500 animate-fade-in-up"
        >
          <div className="aspect-[4/3] overflow-hidden relative">
            <img 
              src={work.imageUrl} 
              alt={work.title} 
              className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
          </div>
          
          <div className="p-4">
            <div className="flex flex-wrap gap-2">
                {work.category.split('　').map((cat, i) => (
                    <span key={i} className="inline-block px-2 py-1 text-[10px] font-bold text-orange-400 border border-orange-500/20 bg-orange-950/30 rounded uppercase tracking-wider">
                        {cat}
                    </span>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-24 pb-16 bg-slate-950 min-h-screen">
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
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            林鐵工所がこれまでに手掛けた施工実績の一部をご紹介します。<br/>
            大型の物流倉庫から特殊な金物製作まで、幅広いニーズに対応しています。
          </p>
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
        <div>
            {filter === 'All' ? (
                // Group by Category
                <div className="space-y-20">
                    {categories.filter(c => c !== 'All').map((cat) => {
                        const items = WORKS.filter(item => item.category.includes(cat));
                        if (items.length === 0) return null;
                        
                        return (
                            <div key={cat} className="scroll-mt-32" id={cat}>
                                <div className="flex items-center gap-3 mb-8 border-l-4 border-orange-500 pl-4">
                                    <Tag className="text-orange-500 w-6 h-6" />
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">{cat}</h2>
                                </div>
                                {renderGrid(items)}
                            </div>
                        );
                    })}
                </div>
            ) : (
                // Single Category View
                <div>
                     <div className="flex items-center gap-3 mb-8 border-l-4 border-orange-500 pl-4">
                        <Tag className="text-orange-500 w-6 h-6" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{filter}</h2>
                    </div>
                    {renderGrid(WORKS.filter(item => item.category.includes(filter)))}
                </div>
            )}
        </div>

        {WORKS.length === 0 && (
            <div className="py-20 text-center text-slate-500 border border-dashed border-slate-800 rounded-xl">
                該当する実績は見つかりませんでした。
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