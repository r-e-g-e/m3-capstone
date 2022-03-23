import {
  Container,
  Content,
  Nome,
  CargoSpan,
  FotoPerfil,
  LinkedInLink,
} from "./styles";
import criadores from "../../utils/criadores";

function PerfilCriadores() {
  return (
    <>
      {criadores.map((pessoa, index) => (
        <>
          <Container>
            <Nome>{pessoa.nome}</Nome>
            <Content key={index}>
              <FotoPerfil src={pessoa.foto} alt={pessoa.nome} />
              <CargoSpan>{pessoa.cargo}</CargoSpan>
              <LinkedInLink href={pessoa.linkedin} target="_blank">
                <img src="/assets/linkedInLogo.png" />
              </LinkedInLink>
            </Content>
          </Container>
        </>
      ))}
    </>
  );
}

export default PerfilCriadores;
