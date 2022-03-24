//Bibliotecas
import axios from "axios";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { LocaisContext } from "../../Providers/Locais";
//Componentes
import { CollectionContainer, SelectContainer, LocationsContainer, Footer} from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ListaPontosDeColeta from "../../components/ListaPontosDeColeta";
import { PontosDeColetaContext } from "../../Providers/PontosDeColeta";

function Coleta() {

  const login = localStorage.getItem("token");

  const paginaController = useState(0);

  const { cidadeState, estadoState } = useContext(PontosDeColetaContext);
  const [ setCidade ] = cidadeState;
  const [ estado, setEstado ] = estadoState;

  const [ estadoSelect, setEstadoSelect ] = useState("");
  const [ cidadesSelect, setCidadesSelect ] = useState([]);

  const formSchema = yup.object().shape({
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({state, city}) => {
    setEstado(state);
    setCidade(city);
    
    //o mesmo que setPagina para 0
    paginaController[1](0);
  };
  
  function handleRemoverFiltro(){
    setEstado("");
    setCidade("");
    //limpar Estados
    document.querySelector("#ColetaEstadoSelect").value = "";

    //limpar cidades
    document.querySelector("#ColetaCidadeSelect").value = "";
    setCidadesSelect([]);
  }

  // const { pontos } = useContext(PontosDeColetaContext);
  const { estados: estadosValue } = useContext(LocaisContext);

  useEffect(() => {   
    if(!estadoSelect) return;
    
    (async () => {
      const { id } = estadosValue.find( estado => estado.name === estadoSelect);

      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/microrregioes`
      );
      const cidades = response.data.map(({ nome, id }) => ({ nome, id }));
      const ordemAlpha = cidades.sort(({ nome: nome1 }, { nome: nome2 }) =>
        nome1 < nome2 ? -1 : nome1 > nome2 ? 1 : 0
      );

      setCidadesSelect(ordemAlpha);
    })();
  }, [estadoSelect]);

  return (
    <>
      <CollectionContainer>
        <Header login={login}/>
        <SelectContainer>
          <h2 className="mobile__h2">Busca por pontos de coleta:</h2>
          <div className="select__innerContainer">
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h4 className="select__h4">Busca por pontos de coleta</h4>
              <div className="select__auxDiv">
                <div className="flex">
                  <select
                    {...register("state")}
                    onChange={e => setEstadoSelect(e.target.value)}
                    id="ColetaEstadoSelect"
                  >
                    <option>Escolha estado</option>
                    {estadosValue.map(({ name, id }) => (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  <select 
                    {...register("city")} 
                    id="ColetaCidadeSelect" 
                  >
                    <option>Escolha cidade</option>
                    {cidadesSelect.map(({ id, nome }) => (
                      <option key={id} value={nome}>
                        {nome}
                      </option>
                    ))}
                  </select>
                </div>    
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
            <Link to="/about">entenda</Link>
          </h4>
          {
            estado && <h2 className="filter" onClick={handleRemoverFiltro} >Remover filtro</h2>
          }
          <ListaPontosDeColeta 
            paginaController={paginaController}
          />
        </LocationsContainer>
        <Footer>
          O nivel de necessidade é definido por cores{" "}
          <Link to="/about">entenda</Link>
        </Footer>
      </CollectionContainer>
    </>
  );
}
export default Coleta;
