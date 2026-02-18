// Visual Folha A4
import React from 'react';
import { Header } from './structure/Header';
import { WeekGrid } from './structure/WeekGrid';
import { Footer } from './structure/Footer';

export const PlannerSheet = () => {
  return (
    <div className="bg-white w-[297mm] min-h-[210mm] shadow-2xl p-8 mx-auto relative text-black print:shadow-none print:w-full print:h-full print:m-0 print:p-4">
      <Header />
      <WeekGrid />
      <Footer />
      
      {/* Marca d'água do Plano Grátis */}
      <div className="absolute bottom-2 right-4 text-[10px] text-gray-400 font-medium">
        Criado gratuitamente em planners-saas.vercel.app
      </div>
    </div>
  );
};