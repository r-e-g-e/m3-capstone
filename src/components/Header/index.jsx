import { Container, LogadoContainer } from "./styles";
import { Link } from "react-router-dom";
import ButtonHeader from "../ButtonHeader";
import ProfilePicture from "../ProfilePicture";

function Header({ logado = true }) {
  return (
    <Container>
      <img className="logo" src="/assets/Ajude.me.svg" alt="ajude.me logo" />
      {!logado ? (
        <ButtonHeader>voltar</ButtonHeader>
      ) : (
        <LogadoContainer>
          <ul>
            <li>
              <Link to={"/about"}>Sobre</Link>
            </li>
            <li>
              <Link to={"/"}>Sair</Link>
            </li>
          </ul>
          <ProfilePicture width={"60px"} height={"60px"} userName="Testando" />
        </LogadoContainer>
      )}
    </Container>
  );
}
export default Header;
