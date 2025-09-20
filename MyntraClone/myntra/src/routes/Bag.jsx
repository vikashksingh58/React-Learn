import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector} from "react-redux"


const Bag = () => {
  const items = useSelector(store => store.items)
  const bagItems = useSelector(store => store.bag)
  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  })

    return (
      <main>
        <div class="bag-page">
          <div class="bag-items-container">
          {finalItems.map(item =><BagItem item={item} key={item.id}/>)}
          </div>
          <BagSummary />
        </div>
      </main>
    )
}
export default Bag;