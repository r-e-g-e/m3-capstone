import { HeaderContainer, HeaderButtons } from "./styles";
import ProfilePicture from "../ProfilePicture";

// Mais a frente fazer uma div para colocar imagem de perfil do usuário logado

function HeaderLogado() {
  return (
    <HeaderContainer>
      <div className="flex">
        <HeaderButtons>Sobre</HeaderButtons>
        <HeaderButtons>Sair</HeaderButtons>
        <ProfilePicture/>
      </div>
    </HeaderContainer>
  );
}
export default HeaderLogado;
