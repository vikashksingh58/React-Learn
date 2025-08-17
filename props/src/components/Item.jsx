import styles from "./Item.module.css";
function Item({ item, handleItemClicked,bought }) {
  // const handleItemClicked = (item) => {
  //     console.log(item+ ' Bought');

  // }
  return (
    <li
      className={`list-group-item ${bought && 'active'} ${styles["kg-item"]}`}
    >
      <span className={styles["kg-span"]}>{item}</span>
      <button className={`btn btn-info ${styles.buyButton}`} onClick={handleItemClicked} >Buy</button>
    </li>
  );
}
export default Item;
