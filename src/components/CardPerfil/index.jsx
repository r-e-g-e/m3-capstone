import { Container } from "./styles";
import Button from "../Button";

function CardPerfil({ Cor }) {
  return (
    <>
      <Container>
        <header>
          <span className="perfil">
            <span>
              <h3>Pica-Pau</h3>
              <img
                className="mobile" src="/assets/picapau.jpg" alt="foto"/>
            </span>
          </span>
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
