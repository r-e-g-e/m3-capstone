import { Contador, Container, Content } from "./styles";
import { useState } from "react";
import api from "../../../utils/api";
import Button from "../../Button";

function ModalMaisItem({setItem, itemId, setModal, setModalCreate}) {

  const [input, setInput] = useState("");
  const [amount, setAmount] = useState(0);

  function handleClick(){
    const obj = {
      "type": input,
      "isMoney": false,
      "goal": amount
    };
    api.post(`/card/${itemId}/item`, obj).then(()=>{
      api.get(`/card/${itemId}/item`).then(res => {
        setItem(res.data);
      });
    });
    setModalCreate(false);
    setModal(true);
  }

  return (
    <>
      <Container>
        <h2>Nome:</h2>
        <input className="input-nome" onChange={(evt)=>setInput(evt.target.value)}/>
        <Contador>
          <h2>Quantidade</h2>
          <input type="number" onChange={(evt)=>setAmount(evt.target.value)}/>
        </Contador>
        <Content>
          <Button
            bgColor={"orange"}
            width={"100px"}
            height={"30px"}
            onClick={()=>handleClick()}
          >
              Criar
          </Button>
          <Button
            bgColor={"orange"}
            width={"100px"}
            height={"30px"}
            onClick={()=>{setModal(true); setModalCreate(false);}}
          >
             Cancelar
          </Button>
        </Content>
      </Container>
    </>
  );
}

export default ModalMaisItem;
