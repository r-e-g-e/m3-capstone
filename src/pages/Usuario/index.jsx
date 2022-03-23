import Header from "../../components/Header";
import PerfilUser from "../../components/PerfilUser";
import CardCreate from "../../components/CardCreate";
import { Container, Backgrounds } from "./styles";
function Usuario(){
  const teste = false;
  const data = {
    name: "Teste da silva"
  };

  return(
    <div className="container">
      <Header/>
      <Container>
        {teste ? (
          <CardCreate/>
        ) : (
          <PerfilUser data = {data} />
        )}
      </Container>
      <Backgrounds>
        <img src="/assets/background/twoPeoplesImage.svg" alt="background"/>
        <img src="/assets/background/maskPeople.svg" alt="background"/>
      </Backgrounds>
    </div>
  );
}
export default Usuario;