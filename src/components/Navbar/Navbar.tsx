import React from "react";
import { Paths } from "../../app/routes/AppRoutes";
import ButtonLink from "../ButtonLink/ButtonLink";
import * as S from "./styles";

const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <S.H2>AUTOBAHN</S.H2>
      <ButtonLink text="Create Post" link={Paths.CREATE_POST} />
    </S.NavbarContainer>
  );
};

export default Navbar;
