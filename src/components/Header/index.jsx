import React from "react";
import { HeaderContainer, HeaderButtons } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <div>
        <HeaderButtons>Pontos de coleta</HeaderButtons>
        <HeaderButtons>Sobre</HeaderButtons>
        <HeaderButtons>Sair</HeaderButtons>
      </div>
    </HeaderContainer>
  );
}

export default Header;
