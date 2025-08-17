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
  return (
    <div className='container containerBorder'>
      <Display />
      <ButtonContainer buttonNames={buttonNames} />
    </div>
  )
}

export default App
