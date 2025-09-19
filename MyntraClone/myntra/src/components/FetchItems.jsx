import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
    const fetchStatus = useSelector(store => store.fetchStatus);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if(fetchStatus.fetchDone) return;

    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     dispatch(fetchStatusActions.markFetchingStarted());

    //     fetch("https://cautious-journey-wgxwgjggggjh66v-8080.app.github.dev/items", {signal})
    //     .then((res) => res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         dispatch(fetchStatusActions.markFetchDone());
    //         dispatch(fetchStatusActions.markFetchingFinished());
    //         return () => {
    //             controller.abort();
    //         };
    //     });

    // },[fetchStatus, dispatch]);

    return (
        <div>
            Fetch Done : {fetchStatus.fetchDone}
            Currently Fetching : {fetchStatus.currentlyFetiching}
        </div>
    )

}
export default FetchItems;