import './App.css'
import Clock from './components/Clock'
import ClockHeader from './components/ClockHeader'
import ClockSlogan from './components/ClockSlogan'


function App() {

  return (
    <div className="container text-center">
    <ClockHeader />
    <ClockSlogan />
    <Clock />
    </div>
  )
}

export default App
