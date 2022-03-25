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
// import { PontosDeColetaContext } from "../../Providers/PontosDeColeta";

function Coleta() {

  const login = localStorage.getItem("token");
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
    if (city) {
      setCidade(city);
    }
  };
  
  function handleRemoverFiltro(){
    setRemove(true);
    setEstadoEscolhido("");
  }

  // const { pontos } = useContext(PontosDeColetaContext);
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

  return (
    <>
      <Header login={login}/>
      <CollectionContainer>
        <SelectContainer>
          <h2 className="mobile__h2">Busca por pontos de coleta:</h2>
          <div className="select__innerContainer">
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h4 className="select__h4">Busca por pontos de coleta</h4>
              <div className="select__auxDiv">
                <div className="flex">
                  <select
                    {...register("state")}
                    onChange={(e) => setEstadoEscolhido(e.target.value)}
                  >
                    <option>Escolha estado</option>
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
                </div>    
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
            <Link to="/about">entenda</Link>
          </h4>
          {
            estadoEscolhido && <h2 className="filter" onClick={handleRemoverFiltro} >Remover filtro</h2>
          }
          <ListaPontosDeColeta remove={remove} setRemove={setRemove} cidade={cidade}/>
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
