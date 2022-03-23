import { Contador, Container, Content } from "./styles";
import Button from "../../Button";
import { useState } from "react";

function ModalMaisItem() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => setShowModal(false);
  return (
    <>
      {showModal && (
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
            <Button
              bgColor={"orange"}
              width={"100px"}
              height={"30px"}
              onClick={closeModal}
            >
              Cancelar
            </Button>
          </Content>
        </Container>
      )}
    </>
  );
}

export default ModalMaisItem;
