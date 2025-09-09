import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

function CreatePost() {
  const {addPost} = useContext(PostListContext)
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <div className="container mt-4 createPost">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Enter user here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="Enter title here"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postBody" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            className="form-control"
            id="postBody"
            placeholder="Enter post description here"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rections" className="form-label">
            Rections
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="rections"
            placeholder="Enter reactions here"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Enter your tags separated by a space"
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
