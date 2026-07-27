import { useContext, useRef, useState } from "react";
import Post from "./Post";
import { Postlist as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LodingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  // console.log(postList)
  const [fetching ,setFetching]=useState(false)
  const [dataFetched, setDataFetched] = useState(false);
  if (!dataFetched) {
    setFetching(true)
    // console.log("fetching started")
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())  // .then(obj=>obj.posts).then(console.log)
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false)
        //  console.log("fetching returned")
      });
    setDataFetched(true);
    //  console.log("fetching ended")
  }
  return (
    <>
    {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage  />
      )}
      { !fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
