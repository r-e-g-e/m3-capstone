import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Container, StyledForm, DonateDiv, ButtonsDiv } from "./styles";
import { useState } from "react";
import Button from "./../../Button/index";

function ModalAtualizarValor({ produto = "Água desmineralizada" }) {
  const [showModal, setShowModal] = useState(true);
  const [valorAtual, setValorAtual] = useState(0);

  const hideModal = () => setShowModal(false);

  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => setValorAtual(Number(data.value));

  return (
    <>
      {showModal && (
        <Container>
          <h2>{produto}</h2>
          <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
            <DonateDiv>
              <p>Atualize:</p>
              <div>
                <input type="number" {...register("value")} required />
                <p>R$</p>
              </div>
            </DonateDiv>
            <ButtonsDiv>
              <Button
                type="submit"
                bgColor="orange"
                height="30px"
                width="80px"
                fontSize="16px"
              >
                Atualizar
              </Button>
              <Button
                type="button"
                bgColor="orange"
                height="30px"
                width="80px"
                fontSize="16px"
                onClick={hideModal}
              >
                Cancelar
              </Button>
            </ButtonsDiv>
          </StyledForm>
        </Container>
      )}
    </>
  );
}

export default ModalAtualizarValor;
