import { Container } from "./styles";
import ButtonHeader from "../ButtonHeader";
import Logo from "../../assets/Ajude.me.png";

function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo " />
      <ButtonHeader value={"voltar"} />
    </Container>
  );
}

export default Header;
