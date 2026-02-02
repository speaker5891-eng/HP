import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import SparkEffect from './components/SparkEffect';
import Home from './pages/Home';
import WorksPage from './pages/WorksPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-[100dvh] bg-slate-950 text-slate-200">
        <SparkEffect />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<WorksPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </HashRouter>
  );
};

export default App;