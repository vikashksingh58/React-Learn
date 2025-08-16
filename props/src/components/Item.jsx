import styles from './Item.module.css';
function Item({item}){
    return <li className={`list-group-item ${styles['kg-item']}`}><span className={styles['kg-span']}>{item}</span></li>;
}
export default Item;