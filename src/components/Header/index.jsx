import { Container } from "./styles";
import ButtonHeader from "../ButtonHeader";

function Header() {
  return (
    <Container>
      <img src={process.env.PUBLIC_URL + "/assets/Ajude.me.png"} alt="Logo " />
      <ButtonHeader value={"voltar"} />
    </Container>
  );
}

export default Header;
