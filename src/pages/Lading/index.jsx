import {Header, Container,  Flex, ContainerMenu, Figure, Image } from "./style.js";

import Button from "../../components/Button";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Landing() {

  const history = useHistory();

  return (
    <Container>
      <Header>
        <img src="/assets/Ajude.me.svg" alt="Logo "/>
      </Header>
      <Flex>
        <ContainerMenu>
          <h2 className="help-landing">Um site para ajuda ao próximo</h2>
          <div className="flex">
            <Button onClick={()=>history.push("/login")}>ENTRAR</Button>
            <Button onClick={()=>history.push("/signup")}>CADASTRA-SE</Button>
            <Button onClick={()=>history.push("/collection")}>PONTO DE COLETA</Button>
          </div>
        </ContainerMenu>
        <Figure>
          <p>Ajude quem precisa!</p>
          <span>Descrição: Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor</span>
          <Image src="/assets/icon-familia-mao.svg" alt="icon"/>  
        </Figure>
      </Flex>
    </Container>
  );
}
export default Landing;  