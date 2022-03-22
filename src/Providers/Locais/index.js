import { createContext, useState, useEffect } from "react";
import axios from "axios";

//
export const LocaisContext = createContext([]);

export function LocaisProvider({ children }) {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );

      // const nomesDosEstados = stringResponse.geonames.map(
      //   ({ name, geonameId }) => {
      //     name, geonameId;
      //   }
      // );
      const nomesDosEstados = response.data.map((object) => ({
        id: object.id,
        name: object.nome,
      }));

      setEstados(nomesDosEstados);
    })();
  }, []);

  return (
    <LocaisContext.Provider value={{ estados }}>
      {children}
    </LocaisContext.Provider>
  );
}
