import styles from './Button.module.css';

const Button = ({buttonName}) =>{
    return <button className={styles.buttonKey}>{buttonName}</button>;
}
export default Button;