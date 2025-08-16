import Item from "./Item";
function FoodItems({items}){
    return (
        <ul className="list-group text-center container">
            {items.map(item =>
                <Item key={item} item={item} />
            )}
        </ul>
    );
}
export default FoodItems;