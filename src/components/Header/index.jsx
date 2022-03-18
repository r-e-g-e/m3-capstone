import { Container } from "./styles";
import ButtonHeader from "../ButtonHeader";

function Header() {
  return (
    <Container>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/assets/Ajude.me.svg"}
        alt="Logo "
      />
      {/* <ButtonHeader className="hidden">voltar</ButtonHeader> */}
    </Container>
  );
}

export default Header;
