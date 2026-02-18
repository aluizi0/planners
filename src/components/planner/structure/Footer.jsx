// 3 colunas de anotação, tarefas e horários
import React from 'react';

export const Footer = () => {
    const secoes = [
        "ATIVIDADES / EXERCÍCIOS",
        "RECURSOS NECESSÁRIOS",
        "FEEDBACK PÓS-AULA"
    ];

    return (
        <div className="grid grid-cols-3 gap-6">
            {secoes.map((titulo) => (
                <div key={titulo} className="flex flex-col gap-2">
                {/* Título com fundo Amarelo */}
                <div className="bg-[#FFD700] font-bold text-center py-1 text-sm border border-transparent print:bg-[#FFD700] print:print-color-adjust-exact">
                    {titulo}
                </div>
                {/* Linhas pautadas */}
                <div className="flex flex-col gap-3 mt-1">
                    {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-b border-black h-6 w-full relative">
                        <input type="text" className="absolute bottom-0 w-full bg-transparent outline-none text-sm focus:bg-yellow-50 px-1" />
                    </div>
                    ))}
                </div>
                </div>
            ))}
        </div>
    )
}