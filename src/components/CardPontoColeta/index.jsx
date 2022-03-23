import { Content } from "./styles";
import { useState, useEffect } from "react";
import ProfilePicture from "../ProfilePicture";

function CardPontoColeta({ dados }) {
  const { name: nome, percentage: porcentagem, mapsLink } = dados;
  const [cor, setCor] = useState("var(--laranja)");

  useEffect(() => {
    if (porcentagem < 33.33) {
      setCor("var(--vermelho)");
    } else if (porcentagem >= 33.33 && porcentagem < 66.66) {
      setCor("var(--amarelo)");
    } else {
      setCor("var(--verde-medio)");
    }
  }, []);

  function handleOnClick() {
    if (!mapsLink.includes("https://")) {
      return window.open("https://" + mapsLink);
    }

    return window.open(mapsLink);
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
