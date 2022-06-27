import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

interface IButtonLink {
  text: string;
  link: string;
  handleClick?: any;
}

const ButtonLink: React.FC<IButtonLink> = ({ text, handleClick, link }) => {
  return (
    <>
      <Link to={link}>
        <S.Button onClick={handleClick}>{text}</S.Button>
      </Link>
    </>
  );
};

export default ButtonLink;
