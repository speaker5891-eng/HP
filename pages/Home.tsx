import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Works from '../components/Works';
import Recruit from '../components/Recruit';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const location = useLocation();

  // 別ページから戻ってきたときに指定セクションへスクロールする
  useEffect(() => {
    if (location.state && location.state.targetId) {
      const targetId = location.state.targetId;
      // 少し遅延させてDOMの描画を待つ
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
      // stateをクリアする処理はhistory APIを直接操作する必要があるため省略
      // ユーザー体験的には大きな問題はない
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Recruit />
      <Contact />
    </>
  );
};

export default Home;