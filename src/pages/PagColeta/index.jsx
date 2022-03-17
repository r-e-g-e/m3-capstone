import Button from "../../Components/Button";
import {
  CollectionContainer,
  CollectionHeader,
  SelectContainer,
  CarrouselContainer,
  LocationsContainer,
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
          <Button width="100px" height="40px" bgColor="orange">
            Voltar
          </Button>
        </CollectionHeader>
        <CarrouselContainer></CarrouselContainer>
        <SelectContainer>
          <h2>Busca por pontos de coleta e voluntariado</h2>
          <div className="select__innerContainer">
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h4>Busca por pontos de coleta e voluntariado</h4>
              <div className="selectBtnAuxContainer">
                <select {...register("state")}>
                  <option value="0">Escolha estado</option>
                  <option value="Paraná">Paraná</option>
                </select>

                <select {...register("city")}>
                  <option value="0">Escolha cidade</option>
                  <option value="Campo Mourao">Campo Mourão</option>
                </select>

                <Button
                  type="submit"
                  bgColor="orange"
                  width="100px"
                  height="35px"
                >
                  Buscar
                </Button>
              </div>
              <LocationsContainer>
                <span>
                  orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </span>
              </LocationsContainer>
            </form>
          </div>
        </SelectContainer>
        <AboutButton>Sobre</AboutButton>
      </CollectionContainer>
    </>
  );
}

export default PagColeta;
