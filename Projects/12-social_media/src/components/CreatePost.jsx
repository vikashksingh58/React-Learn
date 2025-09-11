import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { Form, useNavigate } from "react-router-dom";

function CreatePost() {
  // const { addPost } = useContext(PostListContext);
  // const navigate = useNavigate();
  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const viewsElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const postTitle = postTitleElement.current.value;
  //   const postBody = postBodyElement.current.value;
  //   const views = viewsElement.current.value;
  //   const tags = tagsElement.current.value.split(" ");

  //   userIdElement.current.value = "";
  //   postTitleElement.current.value = "";
  //   postBodyElement.current.value = "";
  //   viewsElement.current.value = "";
  //   tagsElement.current.value = "";

  //   fetch("https://dummyjson.com/posts/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //         title: postTitle,
  //         body: postBody,
  //         views: views,
  //         userId: userId,
  //         tags: tags
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((post) => {
  //       addPost(post)
  //       navigate("/")
  //     });

    
  // };

  return (
    <div className="container mt-4 createPost">
      <Form method="POST">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User
          </label>
          <input
            type="text"
            name="userId"
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
            name="title"
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
            name="body"
            className="form-control"
            id="postBody"
            placeholder="Enter post description here"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="views" className="form-label">
            Views
          </label>
          <input
            type="text"
            name="views"
            className="form-control"
            id="views"
            placeholder="Enter views here"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            className="form-control"
            id="tags"
            placeholder="Enter your tags separated by a space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
}

export default CreatePost;
