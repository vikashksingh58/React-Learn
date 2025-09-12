import { useEffect } from "react";
import { createContext, useReducer } from "react";


export const PostListContext = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
})

const postReducerList = (currentPostList, action) => {
    let postList = currentPostList;

    if(action.type == 'ADD_POST') {
        postList = [action.payload, ...currentPostList]
    }else if(action.type == 'ADD_POSTS') {
        postList = action.payload.posts; 
    }else if(action.type == 'DELETE_POST') {
        postList = currentPostList.filter( post => post.id != action.payload.id );
    }

    return postList;
}


const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(postReducerList, []);

    const addPost = (post) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: post,
        });
    }

    // const addInitialPosts = (posts) => {
    //     // console.log(posts);
        
    //     dispatchPostList({
    //         type: "ADD_POSTS",
    //         payload: {posts},
    //     });
    // }

    const deletePost = (id) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {id}
        })
    }

    // useEffect(() => {
    // const controller = new AbortController();
    // fetch('https://dummyjson.com/posts', {signal: controller.signal})
    //         .then(res => res.json())
    //         .then(data => addInitialPosts(data.posts))
    //         .catch((err) => {
    //         if(err.name !== "AbortError") throw err;
    //         });
    //         return () => controller.abort();
    // },[]);

    return (
        <PostListContext.Provider value={{postList,addPost,deletePost}} >{children}</PostListContext.Provider>
    )
}

//const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
//     views: 2,
//     userId: "user-9",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Paas ho bhai",
//     body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
//     views: 15,
//     userId: "user-12",
//     tags: ["Graduating", "Unbelievable"],
//   },
//];

export default PostListProvider