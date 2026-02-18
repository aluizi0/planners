import React from 'react';
import { Header } from './structure/Header';
import { WeekGrid } from './structure/WeekGrid';

// Recebendo a prop numLines
export const PlannerSheet = ({ numLines }) => {
  return (
    <div className="bg-white w-[297mm] min-h-[210mm] shadow-2xl p-8 mx-auto relative text-black flex flex-col print:shadow-none print:w-full print:h-full print:m-0 print:p-4">
      
      <Header />
      
      <div className="flex-grow">
        {/* Passando para o Grid */}
        <WeekGrid linhas={numLines} />
      </div>
      
      <div className="absolute bottom-2 right-4 text-[10px] text-gray-400 font-medium">
        Criado gratuitamente em planners-saas.vercel.app
      </div>
    </div>
  );
};