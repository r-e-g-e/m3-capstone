import { Container } from "./styles";

function CardPontoColeta() {
  return (
    <Container>
      <div>
        <h2>Ponto Igreja São Pedro</h2>
        {/* <p>Av. dos Pinheiros, 758 - Vila dos Estivadores - Vitória</p> */}
        <img src={process.env.PUBLIC_URL + "/assets/igreja.jpg"} />
      </div>
      <button>Ver</button>
    </Container>
  );
}

export default CardPontoColeta;
