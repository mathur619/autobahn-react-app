import React from "react";
import Post, { IPost } from "../Post/Post";
import * as S from "./styles";

export interface IPostObject {
  postArray: Array<IPost>;
}

const PostList: React.FC<IPostObject> = ({ postArray }) => {
  return (
    <S.PostArrayContainer>
      {postArray?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </S.PostArrayContainer>
  );
};

export default PostList;
