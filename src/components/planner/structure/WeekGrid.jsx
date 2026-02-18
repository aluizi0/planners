// Títulos e Datas
import React from 'react';

export const WeekGrid = () => {
    const dias = ['SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA'];
    const linhas = 6;

    return (
        <div className="w-full border-2 border-black mb-6">
            {/* Cabeçalho Amarelo (Marca-texto) */}
            <div className="grid grid-cols-6 bg-[#FFD700] border-b-2 border-black font-bold text-center divide-x-2 divide-black print:bg-[#FFD700] print:print-color-adjust-exact">
                <div className="p-2 flex flex-col justify-center">
                <span>HORÁRIO</span>
                </div>
                {dias.map(dia => (
                <div key={dia} className="p-2 flex items-center justify-center uppercase">
                    {dia}
                </div>
                ))}
            </div>

            {/* Corpo da Tabela */}
            {[...Array(linhas)].map((_, i) => (
                <div key={i} className="grid grid-cols-6 divide-x-2 divide-black border-b border-gray-400 last:border-b-0 min-h-[60px]">
                {/* Coluna de Horário */}
                <div className="p-1">
                    <input type="text" className="w-full h-full text-center outline-none bg-transparent font-bold placeholder-gray-300 focus:bg-yellow-50" placeholder="00:00" />
                </div>
                {/* Colunas dos Dias */}
                {[...Array(5)].map((_, j) => (
                    <div key={j} className="p-1 relative group hover:bg-gray-50 transition-colors">
                    <textarea className="w-full h-full resize-none outline-none bg-transparent text-sm p-1 leading-tight focus:bg-yellow-50" />
                    </div>
                ))}
                </div>
            ))}
        </div>
    )
}