import React, { useCallback, useState } from "react";
import ActionBar from "../ActionBar/ActionBar";
import * as S from "./styles";

export interface IPost {
  id: number;
  body: string;
  title: string;
  userId: number;
}
export interface IPostObject {
  post: IPost;
}

const Post: React.FC<IPostObject> = ({ post }) => {
  const { id, body, title, userId } = post;
  const [loading, setLoading] = useState(false);

  const handleLoading = useCallback((bool: boolean) => {
    setLoading(bool);
  }, []);

  return (
    <S.PostContainer $loading={loading}>
      <S.Title>{title}</S.Title>
      <S.Body>{body}</S.Body>
      <ActionBar id={id} handleLoading={handleLoading} />
    </S.PostContainer>
  );
};

export default Post;
