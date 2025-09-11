import { useContext } from "react"
import Post from "./Post"
import { PostListContext } from "../store/post-list-store"
import WelcomeMessage from "./WelcomeMessage"
import { useLoaderData } from "react-router-dom"


function PostList() {
  const {deletePost} = useContext(PostListContext)
  const postList = useLoaderData();
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