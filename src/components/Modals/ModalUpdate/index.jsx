///Bibliotecas
import { useForm } from "react-hook-form";
import api from "../../../utils/api";
//Componentes
import { Black, Container, StyledForm, DonateDiv, ButtonsDiv } from "./styles";

import Button from "./../../Button/index";

function ModalAtualizarValor({itemId, setModalUpdate, setModal, element}) {

  console.log(itemId);

  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {

    const obj = { "currentAmount":0.1,
      ...data
    };
    api.put(`/card/${itemId}/item/${element.id}`, obj).then(()=>{
      setModalUpdate(false); 
      setModal(true);
    });
    
  };

  return (
    <Black>
      <Container>
        <h2>{element.type}</h2>
        <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
          <DonateDiv>
            <p>Atualize:</p>
            <div>
              <input type="number" {...register("goal")} required />
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
              onClick={()=>{setModalUpdate(false); setModal(true);}}
            >
                Cancelar
            </Button>
          </ButtonsDiv>
        </StyledForm>
      </Container>
    </Black>
  );
}

export default ModalAtualizarValor;