import { Container, LogadoContainer } from "./styles";
import { Link } from "react-router-dom";
import ButtonHeader from "../ButtonHeader";

function Header({ logado = false }) {
  return (
    <Container>
      <img className="logo" src="/assets/Ajude.me.svg" alt="ajude.me logo" />
      {!logado ? (
        <ButtonHeader>voltar</ButtonHeader>
      ) : (
        <LogadoContainer>
          <ul>
            <li>
              <Link to={"/sobre"}>Sobre</Link>
            </li>
            <li>
              <Link to={"/"}>Sair</Link>
            </li>
          </ul>
          <img className="foto" src="/assets/picapau.jpg" alt="Logo " />
        </LogadoContainer>
      )}
    </Container>
  );
}

export default Header;
