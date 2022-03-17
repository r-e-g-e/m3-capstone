import PerfilCriadores from "../../components/PerfilCriadores";
import CirculoSistemaCores from "../../components/Circulos";
import Header from "../../components/Header";
import { DivCriadores, DivSistemaCores } from "./styles";
import {
  Container,
  ContentContainer,
  TitulosLightItalic,
  PDescricao,
} from "./styles";

function PaginaSobre() {
  return (
    <Container>
      {/* Header da página */}
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
          <CirculoSistemaCores color="verde" />
          <p>
            Verde: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </DivSistemaCores>
        <DivSistemaCores>
          <CirculoSistemaCores color="amarelo" />
          <p>
            Amarelo: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </DivSistemaCores>
        <DivSistemaCores>
          <CirculoSistemaCores />
          <p>
            Vermelho: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </DivSistemaCores>

        {/* Controle e criação do ponto de coleta */}
        <TitulosLightItalic>
          Controle e criação do ponto de coleta
        </TitulosLightItalic>

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
