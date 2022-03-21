import Button from "../../Button";
import { Container } from "./styles";
import { useState } from "react";

function ModalExcluir() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <Container>
          <h2>Tem certeza que deseja excluir?</h2>

          <div>
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
              onClick={closeModal}
            >
              Cancelar
            </Button>
          </div>
        </Container>
      )}
    </>
  );
}

export default ModalExcluir;
