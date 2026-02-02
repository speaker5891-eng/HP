import React, { useEffect, useState } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
  tx: string; // Target X css variable value
  ty: string; // Target Y css variable value
  color: string;
}

const SparkEffect: React.FC = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSparks: Spark[] = [];
      const count = 12; // Number of sparks per click
      
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 100; // Distance to fly
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        // Randomize color slightly between bright yellow and deep orange
        const colors = ['#fb923c', '#fdba74', '#ea580c', '#fff7ed'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        newSparks.push({
          id: Date.now() + i + Math.random(),
          x: e.clientX,
          y: e.clientY,
          tx: `${tx}px`,
          ty: `${ty}px`,
          color
        });
      }

      setSparks(prev => [...prev, ...newSparks]);

      // Cleanup sparks after animation
      setTimeout(() => {
        setSparks(prev => prev.filter(s => !newSparks.find(ns => ns.id === s.id)));
      }, 600);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="spark"
          style={{
            left: spark.x,
            top: spark.y,
            backgroundColor: spark.color,
            '--tx': spark.tx,
            '--ty': spark.ty,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

export default SparkEffect;