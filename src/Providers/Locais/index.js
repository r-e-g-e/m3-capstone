import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const LocaisContext = createContext([]);

export function LocaisProvider({ children }) {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
    
      const nomesDosEstados = response.data.map((object) => ({
        id: object.id,
        name: object.nome,
      }));

      const ordemAlpha = nomesDosEstados.sort(({ name: nome1 }, { name: nome2 }) =>
        nome1 < nome2 ? -1 : nome1 > nome2 ? 1 : 0
      );

      setEstados(ordemAlpha);
    })();
  }, []);

  return (
    <LocaisContext.Provider value={{ estados }}>
      {children}
    </LocaisContext.Provider>
  );
}
