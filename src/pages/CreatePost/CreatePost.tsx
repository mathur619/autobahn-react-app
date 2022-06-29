import React from "react";
import Form from "../../components/Form/Form";
import * as S from "./styles";

function CreatePost() {
  return (
    <S.CreatePostContainer>
      <S.Title>CreatePost</S.Title>
      <Form />
    </S.CreatePostContainer>
  );
}

export default CreatePost;
