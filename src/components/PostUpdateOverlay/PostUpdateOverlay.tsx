import React from "react";
import Form from "../Form/Form";
import { IFormInitialState } from "../Form/formUtils";
import MemoCloseSVG from "../SVGIcons/CloseSVG";
import * as S from "./styles";

interface IPostUpdateOverlay {
  updateInitialState: IFormInitialState;
  handleShowUpdateOverlay: (bool: boolean) => void;
}

const PostUpdateOverlay: React.FC<IPostUpdateOverlay> = ({
  updateInitialState,
  handleShowUpdateOverlay,
}) => {
  return (
    <>
      <S.PostUpdateOverlay>
        <S.CloseDiv>
          <MemoCloseSVG
            fontSize="24px"
            onClick={() => handleShowUpdateOverlay(false)}
          />
        </S.CloseDiv>
        <Form initialState={updateInitialState} />
      </S.PostUpdateOverlay>
    </>
  );
};

export default PostUpdateOverlay;
