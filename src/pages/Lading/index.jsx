import {Header, Container,  Flex, ContainerMenu, Figure, Image } from "./style.js";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Landing() {

  const history = useHistory();

  return (
    <Container>
      <Header>
        <img src={"/assets/Ajude.me.png"} alt="Logo "/>
      </Header>
      <Flex>
        <ContainerMenu>
          <h2 className="help-landing">Um site para ajuda ao próximo</h2>
          <div className="flex">
            <button onClick={()=>history.push("/login")} className="button">ENTRAR</button>
            <button onClick={()=>history.push("/signup")} className="button">CADASTRA-SE</button>
            <button onClick={()=>history.push("/collection")} className="button">PONTO DE COLETA</button>
          </div>
        </ContainerMenu>
        <Figure>
          <p>Ajude quem precisa!</p>
          <span>Descrição: Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor</span>
          <Image src={"/assets/icon-familia-mao.svg"} alt="icon"/>  
        </Figure>
      </Flex>
    </Container>
  );
}
export default Landing;  