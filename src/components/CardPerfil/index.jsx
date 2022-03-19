import { Container } from "./styles";
import Button from "../Button";
import CardPontoColeta from "../CardPontoColeta";

function CardPerfil() {
  return (
    <>
      <Container>
        <section>
          <h3>Pica-Pau</h3>
          <img src={"/assets/picapau.jpg"} alt="foto" />
        </section>
        <div className="ponto">
          <p>Você não possui nenhum ponto de coleta!</p>
          <Button>CRIAR PONTO DE COLETA</Button>
        </div>
      </Container>
    </>
  );
}

export default CardPerfil;
