//Bibliotecas
import { useEffect } from "react";
import api from "../../utils/api";
import { useContext } from "react";
//Componentes
import CardPontoColeta from "../CardPontoColeta";
import { PontosDeColetaContext } from "../../Providers/PontosDeColeta";

export default function ListaPontosDeColeta({ paginaController }) {
  
  const [paginaAtual, setPaginaAtual] = paginaController;
  const { pontosState, cidadeState, estadoState } = useContext(PontosDeColetaContext);
  
  const [pontos, setPontos] = pontosState;
  const [ cidade ] = cidadeState;
  const [ estado ] = estadoState;

  function handleChangePage(isPositive = true) {
    if (isPositive) {
      return setPaginaAtual(paginaAtual + 1);
    }
    if (paginaAtual > 0) setPaginaAtual(paginaAtual - 1);
  }

  async function handleChangeFiltro(){
    const response = await api("/collect",{
      data:{
        "filter":"*"
      }
    });
    
    let { collects } = response.data;

    if(estado && estado !== "Escolha estado"){
      collects = collects.filter(collect => collect.state === estado);
    }

    if(cidade && cidade !== "Escolha cidade"){
      collects = collects.filter(collect => collect.capital === cidade);
    }

    setPontos(collects);
  }

  useEffect(() => {
    if(cidade || estado) return handleChangeFiltro();

    (async () => {
      const response = await api.get(`/collect?page=${paginaAtual}&perPage=6`);
      const collects = response.data.collects;

      setPontos(collects);
    })();
  }, [paginaAtual, cidade, estado]);

  return (
    <>
      <ul className="locationsInnerContainer">
        {pontos.map((data) => (
          <CardPontoColeta key={data.id} data={data}/>
        ))}
      </ul>

      {
        !cidade && !estado && (
          <section>
            <button className="move" onClick={() => handleChangePage(false)}>{"<"}</button>
            {paginaAtual}
            <button className="move" onClick={() => handleChangePage(true)}>{">"}</button>
          </section>
        )
      }
    </>
  );
}
