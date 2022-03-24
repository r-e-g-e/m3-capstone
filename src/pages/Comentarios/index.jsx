import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Card, Container, Content } from "./styles";

function Comentarios() {
  const messages = [
    { message: "tudo certo por aqui" },
    { message: "continua certo por aqui" },
    { message: "tudo certo por aqui" },
    { message: "continua certo por aqui" },
  ];

  const [count, setCount] = useState(0);

  const Votar = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Header />
      <Container>
        <p>Comente:</p>
        <form>
          <div>
            <input placeholder="Escreva seu comentário" />
          </div>
          <Button bgColor={"orange"}>Comentar</Button>
        </form>
        <Content>
          {messages.map((card) => (
            <>
              <Card>
                <p>{card.message}</p>
                <div>
                  <h4>vote</h4>
                  <span>
                    <button onClick={Votar}>
                      <img src={"/assets/triangulo.png"} />
                    </button>
                    <h4>{count}</h4>
                  </span>
                </div>
              </Card>
            </>
          ))}
        </Content>
        <Link to={"/"}>Voltar</Link>
      </Container>
    </>
  );
}

export default Comentarios;
