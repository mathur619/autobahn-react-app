import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

interface IButton {
  text: string;
  handleClick?: any;
}

const Button: React.FC<IButton> = ({ text, handleClick }) => {
  return (
    <>
      <S.Button onClick={handleClick}>{text}</S.Button>
    </>
  );
};

export default Button;
