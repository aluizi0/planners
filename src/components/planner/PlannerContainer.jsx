// Lógica do estado e da impressão do planner
import React, { useState } from 'react';
import { Printer, Lock } from 'lucide-react';
import { PlannerSheet } from './PlannerSheet';

const PlannerContainer = () => {
    const handlePrint = () => window.print();

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center font-sans print:p-0 print:bg-white">
            {/* Barra de Ferramentas (Simples para o Grátis) */}
            <div className="no-print w-full max-w-[297mm] mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div>
                <h1 className="text-xl font-bold text-gray-800">Planner Semanal</h1>
                <span className="text-xs font-bold bg-gray-200 text-gray-600 px-2 py-1 rounded ml-2">FREE</span>
                </div>
                
                <div className="flex gap-3">
                {/* Botão Fake do Premium (Marketing) */}
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
            {/* A Folha */}
            <PlannerSheet />
        </div>
    )
}

export default PlannerContainer;