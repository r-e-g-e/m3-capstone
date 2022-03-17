import { Container } from "./styles";
import { Link } from "react-router-dom";

function HeaderLogado() {
  return (
    <Container>
      <img src={process.env.PUBLIC_URL + "/assets/Ajude.me.svg"} alt="Logo " />
      <span>
        <Link to={"/sobre"}>Sobre</Link>
        <Link to={"/"}>Sair</Link>
        <img
          className="foto"
          src={process.env.PUBLIC_URL + "/assets/picapau.jpg"}
          alt="Logo "
        />
      </span>
    </Container>
  );
}

export default HeaderLogado;
