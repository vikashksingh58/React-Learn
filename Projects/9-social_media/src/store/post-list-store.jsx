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
    }else if(action.type == 'DELETE_POST') {
        postList = currentPostList.filter( post => post.id != action.payload.id );
    }
    return postList;
}


const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(postReducerList, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,
            },
        });
    }

    const deletePost = (id) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {id}
        })
    }

    return (
        <PostListContext.Provider value={{postList,addPost,deletePost}} >{children}</PostListContext.Provider>
    )
}

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListProvider