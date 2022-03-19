import { Content } from "./styles";
import { useState, useEffect } from "react";

function CardPontoColeta({ dados }) {
  const { nome, id, porcentagem } = dados;
  const [ cor, setCor ] = useState("var(--laranja)");

  useEffect( () => {
    if(porcentagem < 33.33){
      setCor("var(--laranja)");
    }
    else if(porcentagem >= 33.33 && porcentagem < 66.66){
      setCor("var(--amarelo)");
    }
    else{
      setCor("var(--verde-medio)");
    }
  }, []);

  return (
    <Content corDeFundo={cor}>
      <div>
        <h2>{nome}</h2>
        <button>Ver</button>
      </div>
    </Content>
  );
}
export default CardPontoColeta;
