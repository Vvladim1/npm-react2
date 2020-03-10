import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./profile/Profile";

const Content = props => {
  
  return (
    <div>
      <Profile />
      <MyPostsContainer
        store={props.store}
      />
    </div>
  );
};

export default Content;
