import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  fullWidth?: boolean;
}

const Button: React.FC<IButton> = (props) => {
  const { text, fullWidth = false, ...buttonProps } = props;
  return (
    <>
      <S.Button $fullWidth={fullWidth} {...buttonProps}>
        {text}
      </S.Button>
    </>
  );
};

export default Button;
