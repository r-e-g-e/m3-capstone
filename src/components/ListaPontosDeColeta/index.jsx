import { useState, useEffect } from "react";
import CardPontoColeta from "../CardPontoColeta";
import axios from "axios";
export default function ListaPontosDeColeta({ cidade }) {
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
        `https://m3-capstone-api.herokuapp.com/collect?page=${paginaAtual}&perPage=4`
      );
      setDadoDosCards(response.data.collects);
    })();
  }, [paginaAtual]);

  useEffect(() => {
    setFilter(dadoDosCards);
  }, [dadoDosCards]);

  useEffect(() => {
    axios.get("https://m3-capstone-api.herokuapp.com/collect").then((res) => {
      const filtro = res.data.collects.filter((item) => {
        return item.capital === cidade;
      });
      setFilter(filtro);
    });
  }, [cidade]);

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
