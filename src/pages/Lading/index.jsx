//Bibliotecas
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//Componentes
import {Header, Container,  Flex, ContainerMenu, Figure, Image } from "./style.js";
import Button from "../../components/Button";

function Landing() {

  const history = useHistory();

  return (
    <Container>
      <Header>
        <img src="/assets/Ajude.me.svg" alt="logo"/>
      </Header>
      <Flex>
        <ContainerMenu>
          <h2 className="help-landing">Um site para ajuda ao próximo</h2>
          <div className="flex-column">
            <Button width={`${200}px`} height={`${40}px`} bgColor = {"orange"} onClick={()=>history.push("/login")}>ENTRAR</Button>
            <Button width={`${200}px`} height={`${40}px`} bgColor = {"orange"} onClick={()=>history.push("/signup")}>CADASTRA-SE</Button>
            <Button width={`${200}px`} height={`${40}px`} bgColor = {"orange"} onClick={()=>history.push("/collection")}>PONTO DE COLETA</Button>
          </div>
        </ContainerMenu>
        <Figure>
          <p>Ajude quem precisa!</p>
          <span>Que o desejo de ajudar o próximo consiga sempre superar o 
            egoísmo e a falta de esperança no ser humano.</span>
          <span>Autora: Andresa Martins Vicentini</span>
          <Image src="/assets/background/icon-familia-mao.svg" alt="icon"/>  
        </Figure>
      </Flex>
    </Container>
  );
}
export default Landing;  