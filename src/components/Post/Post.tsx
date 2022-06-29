import React, { useCallback, useState } from "react";
import ActionBar from "../ActionBar/ActionBar";
import {
  IFormInitialState,
  FormNames,
  FormActionTypes,
} from "../Form/formUtils";
import PostUpdateOverlay from "../PostUpdateOverlay/PostUpdateOverlay";
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
  const [showUpdateOverlay, setShowUpdateOverlay] = useState(false);

  const handleLoading = useCallback((bool: boolean) => {
    setLoading(bool);
  }, []);

  const handleShowUpdateOverlay = useCallback((bool: boolean) => {
    setShowUpdateOverlay(bool);
  }, []);

  const updateInitialState: IFormInitialState = {
    body: {
      name: FormNames.BODY,
      value: body,
      touched: false,
      hasError: true,
      error: "",
    },
    title: {
      name: FormNames.TITLE,
      value: title,
      touched: false,
      hasError: true,
      error: "",
    },
    id: {
      name: FormNames.ID,
      value: id,
      touched: false,
      hasError: true,
      error: "",
    },
    isFormValid: true,
    type: FormActionTypes.UPDATE,
  };

  return (
    <S.PostContainer $loading={loading}>
      {showUpdateOverlay ? (
        <PostUpdateOverlay
          updateInitialState={updateInitialState}
          handleShowUpdateOverlay={handleShowUpdateOverlay}
        />
      ) : (
        <> </>
      )}
      <S.Title>{title}</S.Title>
      <S.Body>{body}</S.Body>
      <ActionBar
        id={id}
        handleLoading={handleLoading}
        handleShowUpdateOverlay={handleShowUpdateOverlay}
      />
    </S.PostContainer>
  );
};

export default Post;
