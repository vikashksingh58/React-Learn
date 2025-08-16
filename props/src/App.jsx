
import './App.css'
import AppHeader from './components/AppHeader';
import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';

function App() {
  let foodItems = ['Dal', 'Roti', 'Rice', 'Milk', 'Curd', 'Banana'];
  return (
    <>
    <AppHeader />
    <ErrorMessage items={foodItems} />
    <FoodItems items={foodItems} />
    
    </>
  )
}

export default App
