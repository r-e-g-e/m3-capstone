import Button from "../../components/Button";
import {
  CollectionContainer,
  SelectContainer,
  LocationsContainer,
  Footer,
} from "./styles";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import CardPontoColeta from "../../components/CardPontoColeta";
import Header from "../../components/Header";

function PagColeta() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //TESTING
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

  const dados = { nome: "asdasd", porcentagem: 70, id: 1 };

  return (
    <>
      <CollectionContainer>
        <Header logado={true} />
        <SelectContainer>
          <h2 className="mobile__h2">Busca por pontos de coleta:</h2>
          <div className="select__innerContainer">
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h4 className="select__h4">Busca por pontos de coleta</h4>
              <div className="select__auxDiv">
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
                  BUSCAR
                </Button>
              </div>
            </form>
          </div>
        </SelectContainer>

        <LocationsContainer>
          <h4 className="h4__about">
            O nivel de necessidade é definido por cores{" "}
            <Link to="/sobre">entenda</Link>
          </h4>
          <div className="locationsInnerContainer">
            {/*<CartaoDeColeta
              width="268px"
              height="186px"
              color={"var(--laranja-escuro)"}
            >*/}

            <CardPontoColeta dados={dados} />
            <CardPontoColeta dados={dados} />
            <CardPontoColeta dados={dados} />
            <CardPontoColeta dados={dados} />
          </div>
        </LocationsContainer>

        <Footer>
          O nivel de necessidade é definido por cores{" "}
          <Link to="/sobre">entenda</Link>
        </Footer>
      </CollectionContainer>
    </>
  );
}

export default PagColeta;

{
  /*isLoggedIn ? (
          <CollectionHeader>
            <h1>
              <span className="ajude">Ajude.</span>
              <span className="me">me</span>
            </h1>

            <div className="loggedin__navContainer">
              <Link to="/about">Sobre</Link>
              <Link to="/">Sair</Link>
              <ProfilePicture
                width={"60px"}
                height={"60px"}
                userName="marco the kid"
              />
            </div>
          </CollectionHeader>
        ) : (
          <CollectionHeader>
            <h1>
              <span className="ajude">Ajude.</span>
              <span className="me">me</span>
            </h1>
            <Button width="100px" height="40px" bgColor="orange">
              Voltar
            </Button>
          </CollectionHeader>
        )*/
}
