import Button from "../../Button";
import { Container, Content } from "./styles";

function ModalExcluirItem() {
  return (
    <Container>
      <h2>Tem certeza que deseja Excluir?</h2>
      <Content>
        <Button bgColor={"orange"} width={"100px"} height={"30px"}>
          Excluir
        </Button>
        <Button bgColor={"orange"} width={"100px"} height={"30px"}>
          Cancelar
        </Button>
      </Content>
    </Container>
  );
}

export default ModalExcluirItem;
