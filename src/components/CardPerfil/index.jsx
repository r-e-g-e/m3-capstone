import { Container } from "./styles";
import Button from "../Button";
import CardPontoColeta from "../CardPontoColeta";

function CardPerfil() {
  return (
    <Container>
      <header>
        <span className="perfil">
          <span>
            <h3>Pica-Pau</h3>
            <img
              className="mobile"
              //process.env.PUBLIC_URL + 
              src={"/assets/picapau.jpg"}
              alt="foto"
            />
          </span>
          <p>
            Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor
          </p>
        </span>
        {/* <img
          className="desktop"
          src={process.env.PUBLIC_URL + "/assets/picapau.jpg"}
          alt="foto"
        /> */}
      </header>
      <h4> Seus pontos de coleta</h4>
      <div>
        <h4>Você não possui nenhum ponto de coleta!</h4>
      </div>
      <Button value={"CRIAR PONTO DE COLETA"} />
    </Container>
  );
}

export default CardPerfil;
