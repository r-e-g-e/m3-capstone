//Bibliotecas
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
//componentes
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Card, Container, Content } from "./styles";

function Comentarios({idCard}) {

  const [input, setInput] = useState();
  const [messange, setmessage] = useState([]);
  const [state, setState] = useState();

  function handleClick(){
    const obj = {
      "type": input,
      "isMoney":"false",
      "goal": 0
    };
    api.post(`/card/${idCard}/item`, obj).then(()=>{
      setState(true);
      setInput("");
    });
  }

  useEffect(()=>{
    api.get(`/card/${idCard}/item`).then(res => {
      const upvote = res.data.sort((a, b) => b.goal - a.goal);
      setmessage(upvote);
      setState(false);
    });
  }, [state]);

  const Votar = (item) => {
    const counter  = item.goal+1;
    const obj = {
      "currentAmount": 0,
      "goal": counter
    };
    api.put(`/card/${idCard}/item/${item.id}`, obj).then(()=>{
      setState(true);
    });
  };

  return (
    <>
      <Header />
      <Container>
        <p>Comente:</p>
        <form>
          <div>
            <input placeholder="Escreva seu comentário" value={input} onChange={(evt)=>setInput(evt.target.value)} />
          </div>
          <Button bgColor={"orange"} onClick={(evt)=>{evt.preventDefault(); handleClick();}}>Comentar</Button>
        </form>
        <Content>
          {messange.map((item, index) => (
            <Card key={index} >
              <p>{item.type}</p>
              <div>
                <h4>vote</h4>
                <span>
                  <button onClick={()=>Votar(item)}>
                    <img src={"/assets/triangulo.png"} />
                  </button>
                  <h4>{item.goal}</h4>
                </span>
              </div>
            </Card>
          ))}
        </Content>
        <Link to={"/"}>Voltar</Link>
      </Container>
    </>
  );
}
export default Comentarios;
