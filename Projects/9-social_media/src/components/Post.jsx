import { AiFillDelete } from "react-icons/ai";

function Post({post,onDeletePost}) {
  return (
    <div className="container mt-3">
      <div className="card position-relative" style={{width: "30rem"}} >
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map(tag => <span key={tag} className="badge text-bg-primary mx-1">{tag}</span>)}
          
        </div>
        <span className="btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>onDeletePost(post.id)}>
          <AiFillDelete />
          <span className="visually-hidden">Delete Post</span>
        </span>

        <div className="alert alert-success" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>

      </div>
    </div>



  )
}

export default Post