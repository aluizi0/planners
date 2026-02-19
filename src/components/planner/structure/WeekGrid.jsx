import React from 'react';

export const WeekGrid = ({ linhas }) => {
  const dias = ['SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO', 'DOMINGO'];
  
  const handleTimeChange = (e) => {
    let val = e.target.value.replace(/\D/g, ''); 
    if (val.length >= 1 && parseInt(val[0]) > 2) val = val.slice(0, 0);
    if (val.length >= 2 && val[0] === '2' && parseInt(val[1]) > 3) val = val.slice(0, 1);
    if (val.length >= 3 && parseInt(val[2]) > 5) val = val.slice(0, 2);
    if (val.length > 4) val = val.slice(0, 4);
    if (val.length > 2) val = `${val.slice(0, 2)}:${val.slice(2)}`;
    e.target.value = val;
  };

  return (
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
        <div key={i} className="grid grid-cols-8 divide-x-2 divide-black border-b-2 border-black last:border-b-0 h-15">
          
          <div className="p-0 h-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
                <input 
                type="text" 
                className="w-full text-center outline-none bg-transparent font-bold placeholder-gray-300 text-sm p-1" 
                placeholder="00:00"
                maxLength={5} 
                onChange={handleTimeChange}
                />
            </div>
          </div>
          
          {[...Array(7)].map((_, j) => (
            <div key={j} className="p-0 h-full relative group transition-colors">
              <textarea 
                className="w-full h-full resize-none outline-none bg-transparent text-sm leading-snug overflow-hidden absolute inset-0 p-2" 
                maxLength={55} // MUDANÇA: Trava exata para não transbordar
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};