import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
    const dispatch = useDispatch();

    const handleIncreament = () => {
        dispatch({type: "INCREMENT"})
    }

    const handlePrivacyToggle = () => {
        dispatch({type: "PRIVACY_TOGGLE"})
    }
    const handleDecreament = () => {
        dispatch({type: "DECREMENT"})
    }

    const inputElement = useRef();
    const handleAdd = () => {
        dispatch({type: "ADD", payload: {
            num: inputElement.current.value
        }})
        inputElement.current.value = ""
    }

    const handleSubtract = () => {
        dispatch({type: "SUBTRACT", payload: {
            num: inputElement.current.value
        }})
        inputElement.current.value = ""
    }

    return (
    <>    
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" onClick={handleIncreament} className="btn btn-primary">+1</button>
        <button type="button" onClick={handleDecreament} className="btn btn-success">-1</button>
        <button type="button" onClick={handlePrivacyToggle} className="btn btn-warning">Privacy</button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" ref={inputElement} placeholder="Enter Number" className="Number-input form-control"/>
        <button type="button" onClick={handleAdd} className="btn btn-info">Add</button>
        <button type="button" onClick={handleSubtract} className="btn btn-danger">Subtract</button>
    </div>
    </>
    )
}
export default Controls;