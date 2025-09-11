import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import "./App.css"
import PostListProvider from "./store/post-list-store"
import { Outlet } from "react-router-dom"


function App() {
  return (
    <PostListProvider >
      <div className="appContainer">
        <Sidebar />
        <div className="content">
            <Header />
            <Outlet /> 
            <Footer />
        </div>
      </div>
    </PostListProvider>
    
  )
}

export default App
