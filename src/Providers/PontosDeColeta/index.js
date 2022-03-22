import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const PontosDeColetaContext = createContext([]);

export function PontosDeColetaProvider({ children }) {
  const [pontos, setPontos] = useState([]);

  async function getPontos() {
    const response = await axios
      .get("https://m3-capstone-api.herokuapp.com/collect")
      .catch((err) => console.log(err));
    setPontos(response.data.collects);
  }

  useEffect(() => {
    getPontos();
  }, []);

  return (
    <PontosDeColetaContext.Provider value={{ pontos }}>
      {children}
    </PontosDeColetaContext.Provider>
  );
}
