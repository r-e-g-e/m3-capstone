import { Container } from "./styles";
import Button from "../Button";
import CardPontoColeta from "../CardPontoColeta";

function CardPerfil({ Cor }) {
  return (
    <>
      <Container>
        <header>
          <span className="perfil">
            <span>
              <h3>Pica-Pau</h3>
              <img
                className="mobile"
                src={process.env.PUBLIC_URL + "/assets/picapau.jpg"}
                alt="foto"
              />
            </span>
          </span>
          {/* <img
          className="desktop"
          src={process.env.PUBLIC_URL + "/assets/picapau.jpg"}
          alt="foto"
        /> */}
        </header>
        <div className="ponto">
          <p>Você não possui nenhum ponto de coleta!</p>
          <Button>CRIAR PONTO DE COLETA</Button>
        </div>
      </Container>
    </>
  );
}

export default CardPerfil;
