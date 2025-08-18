import { useContext } from "react";
import { TodoItemsContext } from "../store/toto-items-store";


const Welcome = () => {
    const {todoItems} = useContext(TodoItemsContext)
    return (
        <>
        {!todoItems.length && 
        <p className="mt-5 fs-1 bg-info-subtle rounded-pill container">Enjoy your day.</p>
        }
        </>
    );
}

export default Welcome;