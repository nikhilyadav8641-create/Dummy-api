import { useContext, useRef } from "react";
import { Postlist } from "../store/post-list-store";

const CreatePost = () => {

  const {addPost}=useContext(Postlist)
 const userIdElement= useRef()
 const postTitleElement= useRef()
 const postBodyElement= useRef()
 const postReactionsElement= useRef()
 const tagsElement= useRef()

 const handleSubmit= (event)=>{
  event.preventDefault();
  const userId=userIdElement.current.value;
  const postTitle=postTitleElement.current.value;
  const postBody=postBodyElement.current.value;
  const postReactions=postReactionsElement.current.value;
  const tags=tagsElement.current.value.trim().split(" ");

  addPost(userId,postTitle,postBody,postReactions,tags)
userIdElement.current.value="";
  postTitleElement.current.value="";
 postBodyElement.current.value="";
  postReactionsElement.current.value="";
 tagsElement.current.value="";
 }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter the username 
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your user Id"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
        rows="4"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
          ref={postBodyElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Numer of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to post"
          ref={postReactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space if more than one"
          ref={tagsElement}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
       Post
      </button>
    </form>
  );
};
export default CreatePost;
