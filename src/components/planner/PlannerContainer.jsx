import React, { useState } from 'react';
import { Printer, Lock, Plus, Minus } from 'lucide-react'; // Adicionei Plus e Minus
import { PlannerSheet } from './PlannerSheet';

const PlannerContainer = () => {
  // Estado para controlar o número de linhas (Padrão 10, Mínimo 7, Máximo 12)
  const [numLines, setNumLines] = useState(10);

  const handlePrint = () => window.print();

  // Funções para aumentar e diminuir com limites
  const increaseLines = () => {
    if (numLines < 12) setNumLines(numLines + 1);
  };

  const decreaseLines = () => {
    if (numLines > 7) setNumLines(numLines - 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center font-sans print:p-0 print:bg-white">
      
      {/* Barra de Ferramentas */}
      <div className="no-print w-full max-w-[297mm] mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        
        {/* Lado Esquerdo: Título + Controle de Linhas */}
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Planner Semanal</h1>
            <span className="text-xs font-bold bg-gray-200 text-gray-600 px-2 py-1 rounded">FREE</span>
          </div>

          {/* O NOVO CONTROLE DE LINHAS */}
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded border border-gray-200">
            <span className="text-sm font-bold text-gray-500 mr-2">Linhas:</span>
            
            <button 
              onClick={decreaseLines}
              disabled={numLines <= 7}
              className="p-1 hover:bg-white rounded border disabled:opacity-30 transition-all"
            >
              <Minus size={16} />
            </button>
            
            <span className="w-6 text-center font-bold">{numLines}</span>
            
            <button 
              onClick={increaseLines}
              disabled={numLines >= 12} // Trava no 12 pro Grátis
              className="p-1 hover:bg-white rounded border disabled:opacity-30 transition-all"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
        
        {/* Lado Direito: Botões de Ação */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-400 border border-gray-200 rounded cursor-not-allowed text-sm hover:text-gray-500 transition-colors">
            <Lock size={14} /> Personalizar (Premium)
          </button>

          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded font-medium transition-colors shadow-md"
          >
            <Printer size={18} /> Imprimir
          </button>
        </div>
      </div>

      {/* Passamos o numLines para a folha */}
      <PlannerSheet numLines={numLines} />

    </div>
  );
};

export default PlannerContainer;