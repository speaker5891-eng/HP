import React, { useState } from 'react';
import { SectionId } from '../types';
import { MapPin, Phone, Printer, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { company, name, email, message } = formData;
    
    // メール件名と本文の作成
    const subject = `【お問い合わせ】${name}様より（ウェブサイト経由）`;
    const body = `
--------------------------------------------------
会社名: ${company}
お名前: ${name}
メールアドレス: ${email}
--------------------------------------------------

お問い合わせ内容:
${message}
    `.trim();

    // mailtoリンクの作成と実行
    window.location.href = `mailto:hayashitekkoujyo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id={SectionId.CONTACT} className="pt-16 md:pt-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6 mb-16 md:mb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-orange-500 font-bold text-sm tracking-widest mb-2">ご連絡</h2>
            <h3 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-8">お問い合わせ</h3>
            <p className="text-slate-400 mb-8 md:mb-12 leading-relaxed text-sm md:text-base">
              加工のご相談、お見積り依頼、採用への応募など、お気軽にお問い合わせください。<br/>
              熟練のスタッフが丁寧に対応いたします。
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded text-orange-500 border border-slate-800 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">住所</h4>
                  <p className="text-slate-400 text-sm md:text-base">〒379-1207<br/>群馬県利根郡昭和村赤城原992-1</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded text-orange-500 border border-slate-800 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">電話番号</h4>
                  <p className="text-slate-400 text-sm md:text-base">0278-21-2588</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded text-orange-500 border border-slate-800 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">メールアドレス</h4>
                  <p className="text-slate-400 text-sm md:text-base">hayashitekkoujyo@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded text-orange-500 border border-slate-800 flex-shrink-0">
                  <Printer size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">FAX</h4>
                  <p className="text-slate-400 text-sm md:text-base">0278-24-7460</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded text-orange-500 border border-slate-800 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">営業時間</h4>
                  <p className="text-slate-400 text-sm md:text-base">8:30 ～ 17:30 (定休日：土日祝)</p>
                </div>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="bg-slate-900 p-6 md:p-10 rounded-lg border border-slate-800 shadow-2xl h-fit">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">会社名（個人の場合は不要）</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" 
                    placeholder="株式会社 〇〇" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">お名前 <span className="text-orange-500">*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" 
                    placeholder="山田 太郎" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">メールアドレス <span className="text-orange-500">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" 
                  placeholder="email@example.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">お問い合わせ内容 <span className="text-orange-500">*</span></label>
                <textarea 
                  name="message"
                  required 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" 
                  placeholder="ご用件・求人への応募などをご記入ください..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded transition-all transform active:scale-95 shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]">
                メール作成画面を起動する
              </button>
            </form>
          </div>

        </div>
      </div>
      
      {/* Google Maps Embed - Full Width */}
      <div className="w-full h-[400px] md:h-[500px] relative bg-slate-900 border-t border-slate-800">
         <iframe 
          src="https://maps.google.com/maps?q=379-1207%20%E7%BE%A4%E9%A6%AC%E7%9C%8C%E5%88%A9%E6%A0%B9%E9%83%A1%E6%98%AD%E5%92%8C%E6%9D%91%E8%B5%A4%E5%9F%8E%E5%8E%9F992-1&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          className="filter grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;