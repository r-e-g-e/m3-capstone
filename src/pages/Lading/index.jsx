import {Header, Container,  Flex, ContainerMenu, Figure, Image } from "./style.js";

function Landing() {
  return (
    <Container>
      <Header>
        <img src={"/assets/Ajude.me.png"} alt="Logo "/>
      </Header>
      <Flex>
        <ContainerMenu>
          <h2 className="help-landing">Um site para ajuda ao próximo</h2>
        </ContainerMenu>
        <Figure>
          <p> Ajude quem precisa!</p>
          <span>Descrição: Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor </span>
          <Image src={"/assets/icon-familia-mao.svg"} alt="icon"/>  
        </Figure>
      </Flex>
    </Container>
  );
}
export default Landing;  