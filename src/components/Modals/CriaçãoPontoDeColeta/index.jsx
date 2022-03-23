import { Container, CloseModalButton, StyledLabel } from "./styles";
import { useState } from "react";
import Button from "../../Button";

function CriaçãoPontoDeColeta() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <Container>
          <CloseModalButton onClick={closeModal}>X</CloseModalButton>
          <form>
            <StyledLabel>
              Nome
              <input type="text" />
            </StyledLabel>
            <StyledLabel>
              Estado
              <input type="text" />
            </StyledLabel>
            <StyledLabel>
              Capital
              <input type="text" />
            </StyledLabel>
            <StyledLabel>
              Link do Maps
              <input type="text" />
            </StyledLabel>

            <Button
              width={"270px"}
              bgColor={"orange"}
              height={"40px"}
              fontSize={"24px"}
            >
              Criar
            </Button>
          </form>
        </Container>
      )}
    </>
  );
}
export default CriaçãoPontoDeColeta;
