import { Contador, Container, Content } from "./styles";
import Button from "../../Button";

function ModalMaisItem() {
  return (
    <Container>
      <h2>Nome:</h2>
      <input className="input-nome" />
      <Contador>
        <h2>Quantidade</h2>
        <input type="number" />
      </Contador>
      <Content>
        <Button
          bgColor={"orange"}
          width={"100px"}
          height={"30px"}
          type="submit"
        >
          Criar
        </Button>
        <Button bgColor={"orange"} width={"100px"} height={"30px"}>
          Cancelar
        </Button>
      </Content>
    </Container>
  );
}

export default ModalMaisItem;
