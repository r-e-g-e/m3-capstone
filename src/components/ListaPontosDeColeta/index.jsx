import { useState, useEffect } from "react";
import CardPontoColeta from "../CardPontoColeta";
import axios from "axios";

export default function ListaPontosDeColeta() {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [dadoDosCards, setDadoDosCards] = useState([]);

  function handleChangePage(isPositive = true) {
    if (isPositive) {
      return setPaginaAtual(paginaAtual + 1);
    }
    if (paginaAtual > 0) setPaginaAtual(paginaAtual - 1);
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://m3-capstone-api.herokuapp.com/collect?page=${paginaAtual}&perPage=6`
      );
      setDadoDosCards(response.data.collects);
    })();
  }, [paginaAtual]);

  return (
    <>
      <ul>
        {dadoDosCards.length > 0 &&
          dadoDosCards.map((data, index) => (
            <CardPontoColeta key={data.id} dados={data} />
          ))}
      </ul>

      <section>
        <button onClick={() => handleChangePage(false)}>{"<"}</button>
        {paginaAtual}
        <button onClick={() => handleChangePage(true)}>{">"}</button>
      </section>
    </>
  );
}
