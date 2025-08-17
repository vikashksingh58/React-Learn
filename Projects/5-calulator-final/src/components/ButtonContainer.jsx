import Button from "./Button";
import styles from './ButtonContainer.module.css'
const ButtonContainer = ({buttonNames,handleButtonClick}) =>{
    return (
        <div className={styles.buttonContainer}>
            {buttonNames.map(buttonName=>
                <Button key={buttonName} buttonName={buttonName} handleClick={handleButtonClick} />
            )}
        </div>
    );
}
export default ButtonContainer;