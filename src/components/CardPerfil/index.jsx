import { Container } from "./styles";
import Foto from "../../assets/picapau.jpg";

function CardPerfil() {
  return (
    <Container>
      <header>
        <span>
          <h3>Pica-Pau</h3>
          <p>
            Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor
          </p>
        </span>
        <img src={Foto} alt="foto" />
      </header>
    </Container>
  );
}

export default CardPerfil;
