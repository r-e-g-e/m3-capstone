import { useState, useEffect } from "react";
import CardPontoColeta from "../CardPontoColeta";
import axios from "axios";

export default function ListaPontosDeColeta({ cidade = "" }) {
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
      const response = await axios.get(
        `https://m3-capstone-api.herokuapp.com/collect?page=${paginaAtual}`
      );

      setDadoDosCards(response.data.collects);
    })();
  }, [paginaAtual]);

  useEffect(() => {
    setFilter(dadoDosCards);
  }, [dadoDosCards]);

  useEffect(() => {
    const filtro = dadoDosCards.filter((item) => {
      return item.capital === cidade;
    });
    setFilter(filtro);
  }, [cidade]);

  console.log(filter);

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
