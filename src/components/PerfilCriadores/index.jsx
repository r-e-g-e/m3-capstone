import { LinkedInLink } from "../../pages/sobre/styles";
import { CargoSpan, Container, FotoPerfil } from "./styles";
import criadores from "../../utils/criadores";

function PerfilCriadores() {
  return (
    <>
      {criadores.map((pessoa, index) => (
        <Container key={index}>
          <FotoPerfil>{pessoa.foto}</FotoPerfil>
          <p>{pessoa.nome}</p>
          <CargoSpan>{pessoa.cargo}</CargoSpan>
          <LinkedInLink href={pessoa.linkedin} target="_blank">
            linkedin
          </LinkedInLink>
        </Container>
      ))}
    </>
  );
}

export default PerfilCriadores;
