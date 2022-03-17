import { Container } from "./styles";
import ButtonHeader from "../ButtonHeader";

function Header() {
  return (
    <Container>
      <img src={"/assets/Ajude.me.png"} alt="Logo " />
      <ButtonHeader value={"voltar"} />
    </Container>
  );
}

export default Header;
