import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';
import { COMPANY_NAME } from '../constants';

// カスタム溶接トーチアイコン
const WeldingTorchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* ハンドル部分 */}
    <path d="M4 20l7-7" strokeWidth="3" />
    <path d="M3 21l2-2" strokeWidth="3" className="opacity-50" />
    
    {/* トーチ本体・ネック */}
    <path d="M11 13l2-2" />
    
    {/* ノズル・カップ */}
    <path d="M13 11l4 1l1-4l-4-1z" fill="currentColor" fillOpacity="0.2" />
    
    {/* 電極・先端 */}
    <path d="M18 8l2-2" />
    
    {/* 火花（アニメーション） */}
    <path d="M21 3l1-1" className="text-yellow-200 animate-pulse" />
    <path d="M22 6l-1.5-1" className="text-yellow-200 animate-pulse delay-75" />
    <path d="M19 2l1 1.5" className="text-yellow-200 animate-pulse delay-150" />
    
    {/* 溶接アークの輝き */}
    <circle cx="20" cy="6" r="1.5" className="fill-yellow-100 animate-ping opacity-75" stroke="none" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: SectionId.HOME, label: 'トップ' },
    { id: SectionId.ABOUT, label: '会社概要' },
    { id: SectionId.SERVICES, label: '事業内容' },
    { id: SectionId.WORKS, label: '施工実績' },
    { id: SectionId.RECRUIT, label: '採用情報' },
    { id: SectionId.CONTACT, label: 'お問い合わせ' },
  ];

  return (
    <>
        {/* Scroll Progress Bar (Iron Beam Style) */}
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-900">
            <div 
                className="h-full bg-gradient-to-r from-orange-800 via-orange-500 to-yellow-400 shadow-[0_0_10px_rgba(234,88,12,0.5)] transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
            >
                 {/* Spark at the tip of the progress bar */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-white blur-[2px] opacity-80"></div>
            </div>
        </div>

        <nav className={`fixed w-full z-40 transition-all duration-300 top-0 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-4 border-b border-slate-800/50' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo(SectionId.HOME)}>
            <div className="bg-orange-600 p-1.5 rounded text-white group-hover:bg-orange-500 transition-colors shadow-[0_0_15px_rgba(234,88,12,0.4)] group-hover:shadow-[0_0_25px_rgba(234,88,12,0.6)]">
                {/* Custom Welding Torch Icon */}
                <WeldingTorchIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-widest text-white group-hover:text-orange-100 transition-colors">
                {COMPANY_NAME}
            </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-slate-300 hover:text-orange-500 transition-colors tracking-wider relative group"
                >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
            ))}
            <button 
                onClick={() => scrollTo(SectionId.CONTACT)}
                className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-sm font-bold text-sm tracking-wider transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-lg hover:shadow-orange-500/20"
            >
                ご相談・お見積り
            </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
            className="md:hidden text-white hover:text-orange-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-8' : 'max-h-0'}`}>
            <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
                <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-lg font-medium text-slate-300 hover:text-orange-500 transition-colors w-full text-center py-2"
                >
                {link.label}
                </button>
            ))}
            <button 
                onClick={() => scrollTo(SectionId.CONTACT)}
                className="bg-orange-600 text-white px-8 py-3 rounded mt-4 font-bold"
            >
                ご相談・お見積り
            </button>
            </div>
        </div>
        </nav>
    </>
  );
};

export default Navbar;