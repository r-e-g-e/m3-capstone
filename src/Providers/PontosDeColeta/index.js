import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const PontosDeColetaContext = createContext([]);

export function PontosDeColetaProvider({ children }) {
  const pontosState = useState([]);
  const estadoState = useState("");
  const cidadeState = useState("");
  const [id, setId] = useState([]);


  async function getPontos() {
    const response = await axios
      .get("https://m3-capstone-api.herokuapp.com/collect")
      .catch((err) => console.log(err));
    pontosState[1](response.data.collects);
  }

  function infoGuard(id){
    setId(id);
  }

  useEffect(() => {
    getPontos();
  }, []);

  return (
    <PontosDeColetaContext.Provider value={{ pontosState, estadoState, cidadeState, id, infoGuard,}}>
      {children}
    </PontosDeColetaContext.Provider>
  );
}
