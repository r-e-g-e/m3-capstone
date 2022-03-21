import Button from "../../Button";
import { Container } from "./styles";

function ModalItem({
  itens = [
    { nome: "laranja", qtd: 5 },
    { nome: "mamão", qtd: 10 },
    { nome: "maçã", qtd: 3 },
  ],
}) {
  return (
    <Container>
      <h2>Itens</h2>
      <Button
        width={"90px"}
        bgColor={"orange"}
        height={"40px"}
        fontSize={"30px"}
      >
        +
      </Button>
      <section>
        {itens.map((element, index) => (
          <div key={index}>
            <h3>{element.nome}</h3>
            <span>{element.qtd}</span>
            <Button>X</Button>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default ModalItem;
