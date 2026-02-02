import React, { useEffect } from 'react';
import { ArrowLeft, Settings, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { EQUIPMENTS_LIST } from '../constants';

const EquipmentsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-slate-950 min-h-screen relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors mb-6 group w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            トップページへ戻る
          </button>
          
          <span className="text-orange-500 font-bold text-xs tracking-[0.2em] uppercase block mb-3 pl-1">Equipment List</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">主要設備機器一覧</h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            高品質・短納期を実現するため、最新鋭の加工機から熟練の技を支える専用機まで、<br className="hidden md:block"/>
            多種多様な設備を保有しています。
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {EQUIPMENTS_LIST.map((item, index) => (
                <div 
                    key={index}
                    className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:border-orange-500/50 hover:bg-slate-800 transition-all duration-300 group flex items-center gap-4"
                >
                    <div className="w-10 h-10 rounded-sm bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-orange-500/30 transition-colors flex-shrink-0">
                        <Settings className="w-5 h-5 text-slate-500 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <span className="text-white font-bold text-lg tracking-wide group-hover:text-orange-50 transition-colors">
                        {item}
                    </span>
                </div>
            ))}
        </div>

        {/* Footer Link */}
        <div className="mt-24 text-center">
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 inline-block max-w-2xl">
                <h3 className="text-xl font-bold text-white mb-4">設備に関するお問い合わせ</h3>
                <p className="text-slate-400 mb-6 text-sm">
                    特殊な加工や対応サイズについてのご質問も承っております。<br/>
                    お気軽にお問い合わせください。
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

export default EquipmentsPage;