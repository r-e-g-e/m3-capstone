import { StyledButton } from "../../Components/Button/styles";
import {
  CollectionContainer,
  CollectionHeader,
  SelectContainer,
} from "./styles";
import { AboutButton } from "../../Components/AboutButton/styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function PagColeta() {
  const formSchema = yup.object().shape({
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({ state, city }) => {
    if (state !== "0" && city !== "0") {
      const data = { city, state };
      console.log(data);
    }
  };

  return (
    <>
      <CollectionContainer>
        <CollectionHeader>
          <h1>
            <span className="ajude">Ajude.</span>
            <span className="me">me</span>
          </h1>
          <StyledButton width="100px" height="40px" bgColor="orange">
            Voltar
          </StyledButton>
        </CollectionHeader>
        <SelectContainer>
          <h2>Busca por pontos de coleta e voluntariado</h2>
          <div className="select__innerContainer">
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <select {...register("state")}>
                <option value="0">Escolha estado</option>
                <option value="Paraná">Paraná</option>
              </select>

              <select {...register("city")}>
                <option value="0">Escolha cidade</option>
                <option value="Campo Mourao">Campo Mourão</option>
              </select>

              <StyledButton
                type="submit"
                bgColor="orange"
                width="100px"
                height="35px"
              >
                Buscar
              </StyledButton>
            </form>
          </div>
        </SelectContainer>
        <AboutButton>Sobre</AboutButton>
      </CollectionContainer>
    </>
  );
}

export default PagColeta;
