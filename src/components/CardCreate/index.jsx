import { Container } from "./styles";
import Button from "../Button";

function CardCreate() {
  return (
    <>
      <Container>
        <div className="ponto">
          <p>Você não possui nenhum ponto de coleta!</p>
          <Button width={`${200}px`} height={`${40}px`} bgColor = {"orange"} >CRIAR PONTO DE COLETA</Button>
        </div>
      </Container>
    </>
  );
}
export default CardCreate;
