import { HeaderContainer, HeaderButtons } from "./styles";

// Mais a frente fazer uma div para colocar imagem de perfil do usuário logado

function HeaderLogado() {
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
export default HeaderLogado;
