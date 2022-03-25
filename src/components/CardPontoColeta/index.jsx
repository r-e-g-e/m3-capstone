//Bibliotecas
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
//Componentes
import ProfilePicture from "../ProfilePicture";
import { Content } from "./styles";

function CardPontoColeta({data}) {

  const history =  useHistory();
  const { name, id, percentage, mapsLink} = data;
  const [cor, setCor] = useState("var(--laranja)");

  function directCard(name, id, mapsLink){
    localStorage.setItem("OFF", id);
    localStorage.setItem("maps", mapsLink);
    history.push("/control");
  }

  useEffect(() => {
    if (percentage < 33.33) {
      setCor("var(--vermelho)");
    } else if (percentage >= 33.33 && percentage < 66.66) {
      setCor("var(--amarelo)");
    } else {
      setCor("var(--verde-medio)");
    }
  }, []);

  return (
    <Content corDeFundo={cor}>
      <div className="CardPontoDecoleta-Title__container">
        <h2>{name}</h2>
        <button onClick={()=>directCard(name, id, mapsLink)}>
          Ver
        </button>
      </div>
      <ProfilePicture
        userName={name}
        width="70px"
        height="55px"
      />
    </Content>
  );
}
export default CardPontoColeta;
