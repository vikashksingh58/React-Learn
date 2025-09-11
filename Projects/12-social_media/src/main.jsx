import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, //common layout
    children: [
      {path: "/", loader: getPostList, element: <PostList />},
      {path: "/create-post", element: <CreatePost />},
    ]
  }
]);

async function getPostList() {
  return await fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(data => data.posts);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
