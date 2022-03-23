import { useState, useEffect } from "react";
import CardPontoColeta from "../CardPontoColeta";
import axios from "axios";
export default function ListaPontosDeColeta({ cidade, remove, setRemove}) {
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
    (() => {
      axios.get(
        `https://m3-capstone-api.herokuapp.com/collect?page=${paginaAtual}`).then(res=>{
        if(remove){
          setDadoDosCards(res.data.collects);
        }else if(cidade){
          const filtro = res.data.collects.filter((item) => {
            return item.capital === cidade;
          });
          setFilter(filtro);
        }else{
          setDadoDosCards(res.data.collects);  
        }
      });
     
    })();
  }, [cidade, paginaAtual, remove]);

  useEffect(() => {
    setFilter(dadoDosCards);
  }, [dadoDosCards]);

  return (
    <>
      <ul className="locationsInnerContainer">
        {filter.map((data) => {
          return <CardPontoColeta key={data.id} dados={data} />;
        })}
      </ul>
      <section>
        <button onClick={() => handleChangePage(false)}>{"<"}</button>
        {paginaAtual}
        <button onClick={() => handleChangePage(true)}>{">"}</button>
      </section>
    </>
  );
}
