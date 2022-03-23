import { Container, CloseModalButton, StyledLabel } from "./styles";
import { useState } from "react";
import Button from "../../Button";

function CriacaoPontoDeColeta() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <Container>
          <CloseModalButton onClick={() => setShowModal(false)}>X</CloseModalButton>
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
export default CriacaoPontoDeColeta;
