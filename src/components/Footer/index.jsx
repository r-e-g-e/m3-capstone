import { Container } from "./styles";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <Link to={"/sobre"}>sobre</Link>
    </Container>
  );
}

export default Footer;
