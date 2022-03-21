import PerfilCriadores from "../../components/PerfilCriadores";
import CirculoSistemaCores from "../../components/Circulos";
import Header from "./../../components/Header/index";
import {
  Container,
  ContentContainer,
  TitulosLightItalic,
  PDescricao,
  DivSistemaCores,
  DivCoresSobre,
  DivCriadores,
} from "./styles";

function PaginaSobre() {
  return (
    <Container>
      {/* Header */}
      <Header />
      <ContentContainer>
        {/* Objetivo */}
        <TitulosLightItalic>Qual é o nosso objetivo?</TitulosLightItalic>
        <PDescricao>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ad
          alias ipsum veniam iusto minus ex, placeat voluptatibus minima sint,
          recusandae accusantium voluptatum? Provident nihil dolorum, quaerat
          eos explicabo voluptates.
        </PDescricao>

        {/* Sistema de cores */}
        <TitulosLightItalic>Entenda o sistema de cores:</TitulosLightItalic>
        <DivSistemaCores>
          <DivCoresSobre>
            <CirculoSistemaCores color="verde" />
            <p>
              <span>Verde</span>: Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </DivCoresSobre>
          <DivCoresSobre>
            <CirculoSistemaCores color="amarelo" />
            <p>
              <span>Amarelo</span>: Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </DivCoresSobre>
          <DivCoresSobre>
            <CirculoSistemaCores />
            <p>
              <span>Vermelho</span>: Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </DivCoresSobre>
        </DivSistemaCores>
        {/* Controle e criação do ponto de coleta */}
        <TitulosLightItalic>
          Controle e criação do ponto de coleta
        </TitulosLightItalic>
        <PDescricao>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quam
          cupiditate praesentium, rerum amet officiis, accusamus excepturi,
          dolore magnam labore reprehenderit soluta aperiam saepe voluptas nemo
          quibusdam impedit nesciunt exercitationem!
        </PDescricao>

        {/* Criadores do Ajude.me */}
        <TitulosLightItalic>Criadores do Ajude.me</TitulosLightItalic>
        <DivCriadores>
          <PerfilCriadores />
        </DivCriadores>
      </ContentContainer>
    </Container>
  );
}

export default PaginaSobre;
