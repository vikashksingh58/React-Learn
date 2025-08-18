
import { useRef, useState } from 'react';
import './App.css'
import AddFood from './components/AddFood';
import AppHeader from './components/AppHeader';
import Container from './components/Container';
import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';

function App() {
  // let foodItems = ['Dal', 'Roti', 'Rice', 'Milk', 'Curd', 'Banana'];
  const [foodItems, setFoodItems] = useState(['Dal', 'Roti']);
  const foodInput = useRef('')
  const handleUpdate = (e) =>{
    e.preventDefault();
    let newfoodItem = foodInput.current.value;
    if(newfoodItem != ''){
      let newItems = [...foodItems,newfoodItem];
      setFoodItems(newItems);
      foodInput.current.value = ''
    }
  
    // if(event.key === 'Enter'){
    //   let newfoodItem = event.target.value;
    //   let newItems = [...foodItems,newfoodItem];
    //   setFoodItems(newItems);

    //   event.target.value = ''
    // }
    
  }
  return (
    <>
    <Container>
      <AppHeader />
      <AddFood handleSubmit={handleUpdate} foodInput={foodInput} />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems}/>
    </Container>
    {/* <Container >
      <p>The above listed items are healthy food items.</p>
    </Container> */}
    </>
  )
}

export default App
