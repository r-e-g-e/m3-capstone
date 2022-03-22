import { Content } from "./styles";
import { useState, useEffect } from "react";
import ProfilePicture from "../ProfilePicture";
import { use } from "react-router-dom";

function CardPontoColeta({ dados }) {
  const { name: nome, porcentagem, mapsLink } = dados;
  const [cor, setCor] = useState("var(--laranja)");

  useEffect(() => {
    if (porcentagem < 33.33) {
      setCor("var(--laranja)");
    } else if (porcentagem >= 33.33 && porcentagem < 66.66) {
      setCor("var(--amarelo)");
    } else {
      setCor("var(--verde-medio)");
    }
  }, []);

  function handleOnClick() {
    // console.log("chamou");
    // window.open(mapsLink, "_blank", "noopener,noreferrer");
    const newWindow = window.open(mapsLink);
    console.log(mapsLink);
    if (newWindow) newWindow.opener = null;
  }

  return (
    <Content corDeFundo={cor}>
      <div className="CardPontoDecoleta-Title__container">
        <h2>{nome}</h2>
        <button onClick={handleOnClick} /* disabled={mapsLink ? true : false}*/>
          Ver
        </button>
      </div>

      <ProfilePicture
        userName="Cantinho da Coleta"
        width="70px"
        height="55px"
      />
    </Content>
  );
}

export default CardPontoColeta;
