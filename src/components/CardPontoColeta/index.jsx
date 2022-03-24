//Bibliotecas
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useState, useEffect } from "react";
import { PontosDeColetaContext } from "../../Providers/PontosDeColeta";
//Componentes
import ProfilePicture from "../ProfilePicture";
import { Content } from "./styles";

function CardPontoColeta({data}) {

  const { infoGuard } = useContext(PontosDeColetaContext);

  function directCard(id){
    infoGuard(id);
    history.push(`/${name}`);
  }

  const history =  useHistory();
  const { name, id, percentage} = data;
  const [cor, setCor] = useState("var(--laranja)");

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
        <button onClick={()=>directCard(id)}>
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
