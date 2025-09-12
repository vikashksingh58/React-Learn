
import { Form, useActionData } from "react-router-dom";

function CreatePost() {

  const addPost = useActionData();

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
      {addPost && <p>{addPost.message}</p>}
    </div>
  );
}

export default CreatePost;
