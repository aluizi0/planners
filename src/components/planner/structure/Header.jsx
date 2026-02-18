// Títulos e Datas
import React from 'react';
import { CleanInput } from '../ui/CleanInput';

export const Header = () => {
    return (
        <div className="flex justify-between items-end mb-4 border-b-2 border-black pb-2">
        <h1 className="text-3xl font-extrabold tracking-tighter uppercase">Planner Semanal</h1>
        
        <div className="flex gap-4 text-sm font-bold uppercase items-end">
            {/* Bloco da Semana */}
            <div className="flex items-center gap-1">
            <span>SEMANA:</span>
            <CleanInput className="w-10 focus:bg-yellow-100" placeholder="01" />
            <span>A</span>
            <CleanInput className="w-10 focus:bg-yellow-100" placeholder="05" />
            <span>/ 2026</span>
            </div>

            {/* Bloco da Disciplina */}
            <div className="flex items-center gap-1">
            <span>DISCIPLINA:</span>
            <CleanInput className="w-64 text-left focus:bg-yellow-100" />
            </div>
        </div>
        </div>
    )
}