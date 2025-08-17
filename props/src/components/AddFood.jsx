import styles from './AddFood.module.css'

const AddFood = ({handleOnKeyDown}) => {
    return <input type="text" placeholder="Food to enter" className={`${styles.foodInput}`} onKeyDown={handleOnKeyDown} />
}
export default AddFood;