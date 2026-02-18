// Inputs limpos para o planner
import React from 'react';

export const CleanInput = ({ className, placeholder, ...props}) => {
    return (
        <input
            type="text"
            className={`bg-transparent outline-none border-b border-gray-300 focus:border-black transition-colors w-full text-center placeholder-gray-300 ${className}`}
            placeholder={placeholder}
            {...props}
        />
    )
}