import { Container, CloseModalButton, StyledLabel } from "./styles";
import api from "./../../../utils/api";
import Button from "../../Button";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";

function CriaçãoPontoDeColeta({ showModal, setShowModal }) {
  const closeModal = () => setShowModal(false);

  const formSchema = yup.object().shape({
    nome: yup.string().required("Este campo é obrigatório!"),
    estado: yup.string().required("Este campo é obrigatório!"),
    capital: yup.string().required("Este campo é obrigatório!"),
    link: yup.string().required("Este campo é obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) =>
    api
      .post("/collect", data)
      .then((_) => {
        toast.success("Cadastrado com sucesso");
        setShowModal(false);
      })
      .catch((_) => {
        toast.error("Ocorreu algum erro, tente novamente");
      });

  return (
    <>
      {showModal && (
        <Container>
          <CloseModalButton onClick={closeModal}>X</CloseModalButton>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <StyledLabel>
              Nome {errors.nome?.message}
              <input type="text" {...register("nome")} />
            </StyledLabel>
            <StyledLabel>
              Estado {errors.estado?.message}
              <input type="text" {...register("estado")} />
            </StyledLabel>
            <StyledLabel>
              Capital {errors.capital?.message}
              <input type="text" {...register("capital")} />
            </StyledLabel>
            <StyledLabel>
              Link do Maps {errors.link?.message}
              <input type="url" {...register("link")} />
            </StyledLabel>

            <Button
              width={"270px"}
              bgColor={"orange"}
              height={"40px"}
              fontSize={"24px"}
              type="submit"
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
