import React from "react";
import LogoAjudaMe from "../Logo";
import { HeaderButtons, HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoAjudaMe />
      <div>
        <HeaderButtons>Pontos de coleta</HeaderButtons>
        <HeaderButtons>Sobre</HeaderButtons>
        <HeaderButtons>Sair</HeaderButtons>
      </div>
    </HeaderContainer>
  );
};

export default Header;
