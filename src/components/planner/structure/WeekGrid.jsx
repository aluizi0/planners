import React from 'react';

export const WeekGrid = ({ linhas }) => {
  const dias = ['SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO', 'DOMINGO'];
  
  // Função de Máscara para o Horário (00:00)
  const handleTimeChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número

    if (value.length > 4) value = value.slice(0, 4); // Limita a 4 números

    if (value.length > 2) {
      value = `${value.slice(0, 2)}:${value.slice(2)}`; // Adiciona os dois pontos
    }

    e.target.value = value;
  };

  return (
    // ADICIONADO: overflow-hidden para corrigir linhas vazando da borda
    <div className="w-full border-2 border-black mb-6 overflow-hidden rounded-sm">
      <div className="grid grid-cols-8 bg-[#FFD700] border-b-2 border-black font-bold text-center divide-x-2 divide-black print:bg-[#FFD700] print:print-color-adjust-exact">
        <div className="p-2 flex flex-col justify-center">
          <span>HORÁRIO</span>
        </div>
        {dias.map(dia => (
          <div key={dia} className="p-2 flex items-center justify-center uppercase text-sm sm:text-base">
            {dia}
          </div>
        ))}
      </div>

      {[...Array(linhas)].map((_, i) => (
        <div key={i} className="grid grid-cols-8 divide-x-2 divide-black border-b border-gray-400 last:border-b-0 h-12">
          
          <div className="p-1 h-full">
            <input 
              type="text" 
              className="w-full h-full text-center outline-none bg-transparent font-bold placeholder-gray-300 focus:bg-yellow-50 text-sm" 
              placeholder="00:00"
              maxLength={5} // Limita o tamanho total (00:00)
              onChange={handleTimeChange} // Aplica a formatação
            />
          </div>
          
          {[...Array(7)].map((_, j) => (
            <div key={j} className="p-1 h-full relative group hover:bg-gray-50 transition-colors">
              <textarea className="w-full h-full resize-none outline-none bg-transparent text-sm p-1 leading-tight focus:bg-yellow-50 overflow-hidden" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};