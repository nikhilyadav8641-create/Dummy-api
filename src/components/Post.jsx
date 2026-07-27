import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { Postlist } from "../store/post-list-store";
const Post = ({ post }) => {
 const {deletePost} =useContext(Postlist)
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
            <TiDeleteOutline />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag" key={tag}>{tag}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions?.likes??post.reactions} people
        </div>
      </div>
    </div>
  );
};
export default Post;
