// src/store/post-list-store.jsx
import { createContext, useContext, useState } from "react";

const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);

  const addPost = (post) => {
    setPostList((prevList) => [post, ...prevList]);
  };

  const deletePost = (postId) => {
    setPostList((prevList) =>
      prevList.filter((post) => post.id !== postId)
    );
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const usePostList = () => {
  return useContext(PostListContext);
};

export { PostListProvider, usePostList };