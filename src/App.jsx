import React, { useState } from 'react'
import CalculatorButton from './CalculatorButton';

const App = () => {
  const [value, setValue] = useState('0');
  
  const buttons = [
    'AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='
  ];

  const handleClick = (label) => {
    let newValue='0';
    if(label === 'AC') {
      newValue = '0'
    }
    else if(label === 'DEL') {
      newValue = value.slice(0, -1);
      newValue = newValue === '' ? '0' : newValue;
    }
    else if(isOperator(label) && value === '0') {
      // do nothing
    }
    else if(label === '=') {
      newValue = eval(value).toString();
    }
    else {
      newValue = value === '0' ? label : value + label;
    }
    
    setValue(newValue);
  }

  const isOperator = (label) => {
    return (label === '/' || label === '*' || label === '+' || label === '-' || label === '%' || label === '=');
  }

  return (

    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4'>

      <div className='w-full bg-gray-800 text-white text-right p-4 text-3xl rounded-lg mb-4 shadow-md'>
      {value}
      </div>
      
      <div className='grid grid-cols-4 gap-2 w-full'>

      {buttons.map((btn) => (
        <CalculatorButton label={btn} onClick={handleClick} />
      ))}

      </div>
      

    </div>
  )
}

export default App