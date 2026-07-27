import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postList: [],
  addPost: () => {},
   addInitialPosts:()=>{}, 
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
    let newPostList=currPostList
    if(action.type==="DELETE_POST")
    {
        newPostList=currPostList.filter(post=> post.id!==action.payload.postId)
    }
    else if(action.type==="ADD_POST"){
        newPostList = [action.payload, ...currPostList]
    }
      else if(action.type==="ADD_INITIAL_POSTS"){
        newPostList=[...action.payload.posts,...currPostList]
    }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    [],
  );
  const addPost = (userId,postTitle,postBody,postReactions,tags) => {
    // console.log(`${userId} ${postTitle} ${postBody} ${postReactions} ${tags}`)
    dispatchPostList({
      type:"ADD_POST",
      payload:{
         id: Date.now(),
    title: postTitle,
    body: postBody,
    reactions: Number(postReactions),
    userId: userId,
    tags: tags,
      }
    })
  };
  const addInitialPosts = (posts) => {
    // console.log(`${userId} ${postTitle} ${postBody} ${postReactions} ${tags}`)
    dispatchPostList({
      type:"ADD_INITIAL_POSTS",
      payload:{
         posts
      }
    })
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <Postlist.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost ,
         addInitialPosts: addInitialPosts
      }}
    >
      {children}
    </Postlist.Provider>
  );
};
// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "hi friends, I am going to mumbai for vacations . Hope to enjoy a lot  ",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacations", "mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Pass ho gye bhai",
//     body: "char saal ki masti ke baad bhi pass ho gye",
//     reactions: 100,
//     userId: "user-12",
//     tags: ["graduation", "unbelievable"],
//   },
// ];
export default PostListProvider;
