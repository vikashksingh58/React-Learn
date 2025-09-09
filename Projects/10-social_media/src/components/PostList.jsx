import { useContext, useEffect } from "react"
import Post from "./Post"
import { PostListContext } from "../store/post-list-store"
import WelcomeMessage from "./WelcomeMessage"


function PostList() {
  const {postList,deletePost,addInitialPosts} = useContext(PostListContext)

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://dummyjson.com/posts', {signal: controller.signal})
        .then(res => res.json())
        .then(data => addInitialPosts(data.posts))
        .catch((err) => {
          if(err.name !== "AbortError") throw err;
        });

        return () => controller.abort();

  },[]);
  const addPosts = () => {
      // fetch('https://dummyjson.com/posts')
      //   .then(res => res.json())
      //   .then(data => addInitialPosts(data.posts));
  }
 
  return (
    <>
    {postList.length === 0 && <WelcomeMessage addPosts={addPosts} /> }
    {postList.map(post => <Post key={post.id} post={post} onDeletePost={deletePost} />)}
    </>
    
  )
}

export default PostList