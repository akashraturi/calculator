import React from 'react'

const CalculatorButton = ({label, onClick}) => {
    let classNames = `bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 transition shadow-md active:scale-95 
    ${label === '0' ? 'col-span-2' : ''}`;

  return (
    <button className={classNames} onClick={() => onClick(label)}>{label}</button>
  )
}

export default CalculatorButton