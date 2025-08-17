
import './App.css'
import AppHeader from './components/AppHeader';
import Container from './components/Container';
import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';

function App() {
  let foodItems = ['Dal', 'Roti', 'Rice', 'Milk', 'Curd', 'Banana'];
  return (
    <>
    <Container>
      <AppHeader />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
    <Container >
      <p>The above listed items are healthy food items.</p>
    </Container>
    </>
  )
}

export default App
