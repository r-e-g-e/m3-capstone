import { useState, useEffect } from "react";
import CardPontoColeta from "../CardPontoColeta";
import axios from "axios";

export default function ListaPontosDeColeta({ cidade = "" }) {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [dadoDosCards, setDadoDosCards] = useState([]);
  console.log(
    dadoDosCards
      .filter(({ capital }) => capital === "São Mateus Do Sul")
      .map((data) => console.log(data))
  );
  function handleChangePage(isPositive = true) {
    if (isPositive) {
      return setPaginaAtual(paginaAtual + 1);
    }
    if (paginaAtual > 0) setPaginaAtual(paginaAtual - 1);
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://m3-capstone-api.herokuapp.com/collect?page=${paginaAtual}&perPage=2`
      );

      setDadoDosCards(response.data.collects);
    })();
  }, [paginaAtual]);

  return (
    <>
      <ul className="locationsInnerContainer">
        {dadoDosCards.length > 0 &&
          dadoDosCards
            .filter(({ capital }) => capital === cidade)
            .map((data) => {
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
