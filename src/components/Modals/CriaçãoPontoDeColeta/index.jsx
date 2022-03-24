//Bibliotecas
import api from "./../../../utils/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
//Componentes
import Button from "../../Button";
import { Container, CloseModalButton, StyledLabel } from "./styles";

function CriaçãoPontoDeColeta({ showModal, setShowModal, setClose }) {
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
      .then(res => {
        const email = localStorage.getItem("email");
        localStorage.setItem("name", res.data.name);
        localStorage.setItem(`ID${email}`, res.data.id);
        localStorage.setItem("OFF", res.data.id);
        localStorage.setItem(`MAPS${email}`, JSON.stringify(res.data.mapsLink));
        toast.success("Cadastrado com sucesso");
        setShowModal(false);
        setClose(true);
      })
      .catch(() => {
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
