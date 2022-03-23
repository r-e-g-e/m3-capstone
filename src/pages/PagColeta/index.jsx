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
import { useContext, useEffect, useState } from "react";
import ListaPontosDeColeta from "../../components/ListaPontosDeColeta";
import Header from "../../components/Header";
import { PontosDeColetaContext } from "../../Providers/PontosDeColeta";
import { LocaisContext } from "../../Providers/Locais";
import axios from "axios";

function PagColeta() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //TESTING
  const [estadoEscolhido, setEstadoEscolhido] = useState("");
  const [cidades, setCidades] = useState([]);
  const [cidade, setCidade] = useState("");
  const [remove, setRemove] = useState(false);

  const formSchema = yup.object().shape({
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({ city }) => {
    if (city !== "0") {
      setCidade(city);
    }
  };

  //https://servicodados.ibge.gov.br/api/v1/localidades/estados/41/microrregioes
  const { pontos } = useContext(PontosDeColetaContext);
  const { estados } = useContext(LocaisContext);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoEscolhido}/microrregioes`
      );
      const cidades = response.data.map(({ nome, id }) => ({ nome, id }));
      const ordemAlpha = cidades.sort(({ nome: nome1 }, { nome: nome2 }) =>
        nome1 < nome2 ? -1 : nome1 > nome2 ? 1 : 0
      );
      setCidades(ordemAlpha);
    })();
  }, [estadoEscolhido]);

  //setCidades(res.data.map(({nome , id}) => ({ nome, id}))))

  //const dados = { nome: "asdasd", porcentagem: 70, id: 1 };
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
                <select
                  {...register("state")}
                  onChange={(e) => setEstadoEscolhido(e.target.value)}
                >
                  <option value="0">Escolha estado</option>
                  {estados.map(({ name, id }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                </select>
                <select {...register("city")}>
                  <option>Escolha cidade</option>
                  {cidades.map(({ id, nome }) => (
                    <option key={id} value={nome}>
                      {nome}
                    </option>
                  ))}
                </select>

                <Button
                  type="submit"
                  bgColor="orange"
                  width="100px"
                  height="35px"
                  onClick={()=>setRemove(false)}
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
          <h2 className="filter" onClick={()=>setRemove(true)} >Remover filtro</h2>
          <ListaPontosDeColeta remove={remove} setRemove={setRemove} cidade={cidade} />
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
