import { Container, FotoPerfil } from "./styles";

function PerfilCriadores() {
  const criadores = [
    { nome: "Bryan Torres", foto: "BT" },
    { nome: "Rodrigo Tavares", foto: "RT" },
    { nome: "Wellery Chaves", foto: "WC" },
    { nome: "Raphael Felipe", foto: "RF" },
    { nome: "Antônio Marcos", foto: "AM" },
  ];

  return (
    <>
      {criadores.map((pessoa, index) => (
        <Container key={index}>
          <FotoPerfil>{pessoa.foto}</FotoPerfil>
          <p>{pessoa.nome}</p>
        </Container>
      ))}
    </>
  );
}

export default PerfilCriadores;
