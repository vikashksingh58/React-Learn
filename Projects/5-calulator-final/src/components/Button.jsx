import styles from './Button.module.css';

const Button = ({buttonName,handleClick}) =>{
    return <button className={styles.buttonKey} onClick={handleClick} value={buttonName}>{buttonName}</button>;
}
export default Button;