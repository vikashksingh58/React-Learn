import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
name: 'fetchStatus',
initialState: {
    fetchDone: false, //false:PENDING and true:DONE
    currentlyFetiching: false
},
reducers: {
    markFetchDone: (state) => {
         state.fetchDone = true;
    },
    markFetchingStarted: (state) =>{
         state.currentlyFetiching = true;
    },
    markFetchingFinished: (state) => {
         state.currentlyFetiching = false;
    }
}

});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;