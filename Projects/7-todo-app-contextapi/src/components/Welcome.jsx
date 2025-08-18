import { useContext } from "react";
import { TodoItemsContext } from "../store/toto-items-store";


const Welcome = () => {
    const {todoItems} = useContext(TodoItemsContext)
    return (
        <>
        {!todoItems.length && 
        <p className="mt-2">Enjoy your day.</p>
        }
        </>
    );
}

export default Welcome;