import styles from "./AddFood.module.css";

const AddFood = ({ handleSubmit,foodInput }) => {
  return (
    <form >
    <input
      type="text"
      placeholder="Food to enter"
      className={`${styles.foodInput}`}
      ref={foodInput}
    />
    <button type="submit" className={`btn btn-success ${styles.addButton}`} onClick={handleSubmit} >Add</button>
    </form>
  );
};
export default AddFood;
