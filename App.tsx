import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SparkEffect from './components/SparkEffect';
import Home from './pages/Home';
import WorksPage from './pages/WorksPage';
import EquipmentsPage from './pages/EquipmentsPage';

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
            <Route path="/equipments" element={<EquipmentsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;