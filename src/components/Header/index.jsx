import { Container, LogadoContainer } from "./styles";
import { Link } from "react-router-dom";
import ButtonHeader from "../ButtonHeader";
import logo from "../../assets/Ajude.me.svg";
import ProfilePicture from "../ProfilePicture";

function Header({ logado = false }) {
  return (
    <Container>
      <img className="logo" src={logo} alt="ajude.me logo" />
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
          <ProfilePicture width={"60px"} height={"60px"} userName="Testando" />
        </LogadoContainer>
      )}
    </Container>
  );
}

export default Header;
