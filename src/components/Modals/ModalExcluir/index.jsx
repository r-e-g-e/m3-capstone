import Button from "../../Button";
import { Container, Content } from "./styles";
import { useState } from "react";

function ModalExcluir() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <Container>
          <h2>Tem certeza que deseja excluir?</h2>

          <Content>
            <Button
              width={"100px"}
              bgColor={"orange"}
              height={"40px"}
              fontSize={"20px"}
            >
              Sim
            </Button>
            <Button
              width={"100px"}
              bgColor={"orange"}
              height={"40px"}
              fontSize={"20px"}
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </Button>
          </Content>
        </Container>
      )}
    </>
  );
}

export default ModalExcluir;
