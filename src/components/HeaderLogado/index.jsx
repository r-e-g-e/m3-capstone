import { Container } from "./styles";
import { Link } from "react-router-dom";

function HeaderLogado() {
  return (
    <Container>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/assets/Ajude.me.svg"}
        alt="Logo "
      />
      <span>
        <div>
          <Link to={"/sobre"}>Sobre</Link>
          <Link to={"/"}>Sair</Link>
        </div>
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
