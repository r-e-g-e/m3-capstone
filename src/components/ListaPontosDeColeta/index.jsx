//Bibliotecas
import { useState, useEffect } from "react";
import axios from "axios";
//Componentes
import CardPontoColeta from "../CardPontoColeta";

export default function ListaPontosDeColeta({ cidade, remove}) {
  
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [dadoDosCards, setDadoDosCards] = useState([]);
  const [filter, setFilter] = useState([]);

  function handleChangePage(isPositive = true) {
    if (isPositive) {
      return setPaginaAtual(paginaAtual + 1);
    }
    if (paginaAtual > 0) setPaginaAtual(paginaAtual - 1);
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://m3-capstone-api.herokuapp.com/collect?page=${paginaAtual}&perPage=6`);
      const collects = response.data.collects;

      if(remove) {
        setDadoDosCards(collects);
      }
      
      else if(cidade){
        const collectsFiltrados = collectsFiltrados.filter( item => item.capital === cidade);

        setFilter(collectsFiltrados);
      }
      
      else {
        setDadoDosCards(collects);
      }
     
    })();
  }, [cidade, paginaAtual, remove]);

  useEffect(() => {
    setFilter(dadoDosCards);
  }, [dadoDosCards]);

  return (
    <>
      <ul className="locationsInnerContainer">
        {filter.map((data) => {
          return <CardPontoColeta key={data.id} data={data}/>;
        })}
      </ul>
      <section>
        <button className="move" onClick={() => handleChangePage(false)}>{"<"}</button>
        {paginaAtual}
        <button className="move" onClick={() => handleChangePage(true)}>{">"}</button>
      </section>
    </>
  );
}
