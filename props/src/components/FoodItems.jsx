import { useState } from "react";
import Item from "./Item";
function FoodItems({items}){
    const [activeItems,setActiveItems] = useState([]);
    const handleItemClicked = (value) =>{
        let newItems = [...activeItems,value];
        setActiveItems(newItems)
    }
    return (
        <ul className="list-group">
            {items.map(item =>
                <Item bought={activeItems.includes(item) ? true : false} key={item} item={item} handleItemClicked={() => handleItemClicked(item)
                } />
            )}
        </ul>
    );
}
export default FoodItems;