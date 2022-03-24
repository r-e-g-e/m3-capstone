//Componentes
import PerfilCriadores from "../../components/PerfilCriadores";
import CirculoSistemaCores from "../../components/Circulos";
import Header from "./../../components/Header/index";
import { Container,  ContentContainer, TitulosLightItalic, PDescricao, DivSistemaCores, DivCoresSobre, DivCriadores} from "./styles";

function Sobre() {

  const login = localStorage.getItem("token");

  return (
    <Container>
      <Header login={login}/>
      <ContentContainer>
        {/* Objetivo */}
        <TitulosLightItalic>Qual é o nosso objetivo?</TitulosLightItalic>
        <PDescricao>
        Nosso objetivo é unir pessoas que desejam ajudar o mundo de alguma forma, 
        seja com mantimentos ou como voluntáriado, com pessoas nas mais diversas necessidades, 
        fazendo com que o mundo seja cada vez menos desigual.
        </PDescricao>

        {/* Sistema de cores */}
        <TitulosLightItalic>Entenda o sistema de cores:</TitulosLightItalic>
        <DivSistemaCores>
          <DivCoresSobre>
            <CirculoSistemaCores color="verde" />
            <p>
              <span>Verde</span>:  Cantinho da Coleta com meios e recursos que conseguem atender a demanda de maneira adequada.
            </p>
          </DivCoresSobre>
          <DivCoresSobre>
            <CirculoSistemaCores color="amarelo" />
            <p>
              <span>Amarelo</span>: Cantinho da Coleta faltando meios e/ou recursos para atender a demanda de maneira adequada. (Precisando de um pouco mais de ajuda).
            </p>
          </DivCoresSobre>
          <DivCoresSobre>
            <CirculoSistemaCores />
            <p>
              <span>Vermelho</span>: Cantinho da Coleta recém criado ou precisando de meios e recursos urgente, pois não consegue atender a demanda de necessitados. (Precisando de Bastante Ajuda)
            </p>
          </DivCoresSobre>
        </DivSistemaCores>
        {/* Controle e criação do ponto de coleta */}
        <TitulosLightItalic>
          Controle e criação do ponto de coleta
        </TitulosLightItalic>
        <PDescricao>
        Cada Ponto de Coleta criado traz cada vez mais  a responsabilidade as pessoas se solidarizarem a ajudar aqueles que estão muitas das vezes perto de nós se sentindo invisíveis, esquecidos, 
        fazendo com que seja mais fácil e prática o controle de meios e recursos para os mais necessitado.
        </PDescricao>

        <TitulosLightItalic>Criadores do Ajude.me</TitulosLightItalic>
        <DivCriadores>
          <PerfilCriadores />
        </DivCriadores>
      </ContentContainer>
    </Container>
  );
}
export default Sobre;
