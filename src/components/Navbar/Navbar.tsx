import React from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../app/routes/AppRoutes";
import ButtonLink from "../ButtonLink/ButtonLink";
import * as S from "./styles";

const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <Link to={Paths.HOME}>
        <S.H2>AUTOBAHN</S.H2>
      </Link>
      <ButtonLink text="Create Post" link={Paths.CREATE_POST} />
    </S.NavbarContainer>
  );
};

export default Navbar;
