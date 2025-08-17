import Button from "./Button";
import styles from './ButtonContainer.module.css'
const ButtonContainer = ({buttonNames}) =>{
    return (
        <div className={styles.buttonContainer}>
            {buttonNames.map(buttonName=>
                <Button key={buttonName} buttonName={buttonName} />
            )}
        </div>
    );
}
export default ButtonContainer;