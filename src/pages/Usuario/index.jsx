import Header from "../../components/Header";
import PerfilUser from "../../components/PerfilUser";
import CardCreate from "../../components/CardCreate";
import { Container, Backgrounds } from "./styles";
import { useState } from "react";
function Usuario() {
  const [logado, setLogado] = useState(true);

  const data = {
    name: "Teste da silva",
  };

  return (
    <div className="container">
      <Header />
      <Container>
        {logado ? <CardCreate /> : <PerfilUser data={data} />}
      </Container>
      <Backgrounds>
        <img src="/assets/background/twoPeoplesImage.svg" alt="background" />
        <img src="/assets/background/maskPeople.svg" alt="background" />
      </Backgrounds>
    </div>
  );
}
export default Usuario;
