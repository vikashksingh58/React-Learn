import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemsActions } from "../store/itemsSlice";

const FetchItems = () => {
    const fetchStatus = useSelector(store => store.fetchStatus);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchStatusActions.markFetchingStarted());

        fetch("http://localhost:8080/items", {signal})
        .then((res) => res.json())
        .then(({items})=>{
            dispatch(itemsActions.addInitialItems(items[0]))
            dispatch(fetchStatusActions.markFetchDone());
            dispatch(fetchStatusActions.markFetchingFinished());

        })
        .catch((err) => {
        if (err.name === "AbortError") {
            console.log("Fetch aborted");
        } else {
            console.error("Fetch failed:", err);
        }
        });

    return () => controller.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[fetchStatus]);

    return (
        <>
        </>
    )

}
export default FetchItems;