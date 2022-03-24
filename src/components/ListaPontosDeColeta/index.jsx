//Bibliotecas
import { useState, useEffect } from "react";
import axios from "axios";
//Componentes
import CardPontoColeta from "../CardPontoColeta";

export default function ListaPontosDeColeta({ cidade, remove }) {
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
      const collects = response.data.collects;
      setDadoDosCards(collects);

      if (remove) {
        setDadoDosCards(collects);
        return 0;
      } else if (cidade.length > 0) {
        setDadoDosCards(
          collects.filter(
            (item) =>
              item.capital.toLowerCase().trim() === cidade.toLowerCase().trim()
          )
        );
        return 0;
      }
    })();
  }, [cidade, paginaAtual, remove]);

  return (
    <>
      <ul className="locationsInnerContainer">
        {dadoDosCards.map((data) => {
          return <CardPontoColeta key={data.id} data={data} />;
        })}
      </ul>
      <section>
        <button className="move" onClick={() => handleChangePage(false)}>
          {"<"}
        </button>
        {paginaAtual}
        <button className="move" onClick={() => handleChangePage(true)}>
          {">"}
        </button>
      </section>
    </>
  );
}
