import { useState } from 'react';
import './App.css'
import ButtonContainer from './components/ButtonContainer';
import Display from './components/Display';

function App() {
  const buttonNames = [
        "C",
        "1",
        "2",
        "+",
        "3",
        "4",
        "-",
        "5",
        "6",
        "*",
        "7",
        "8",
        "/",
        "=",
        "9",
        "0",
        ".",
      ];
  const [displayValue,setDisplayValue] = useState('')
  // const [operatorValue,setOperatorValue] = useState('')


  const handleButtonClick = (e) => {
    let newValue = e.target.value;
    if(newValue === 'C') {
      setDisplayValue('')
    }else if(newValue === '=') {
      setDisplayValue(eval(displayValue))
    }else {
      newValue= displayValue+newValue
      setDisplayValue(newValue)
    }   
  } 
  return (
    <div className='container containerBorder'>
      <Display displayValue={displayValue} />
      <ButtonContainer buttonNames={buttonNames} handleButtonClick={handleButtonClick} />
    </div>
  )
}

export default App;
