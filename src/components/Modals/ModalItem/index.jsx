import { useEffect } from "react";
import Button from "../../Button";
import { Container, Content } from "./styles";
import api from "../../../utils/api";
import { useState } from "react";

function ModalItem({item, setItem,  modal, setModal, itemId, setModalCreate, setModalDel, setItemIdDel}) {

  useEffect(()=>{
    api.get(`/card/${itemId}/item`).then(res => {
      setItem(res.data);
    });
  }, []);
 

  return (
    <Container>
      <h2>Itens</h2>
      <Content>
        <Button
          width={"90px"}
          bgColor={"orange"}
          height={"40px"}
          fontSize={"20px"}
          onClick={()=>{setModal(false); setModalCreate(true);}}
        >
          +
        </Button>
        <Button
          width={"90px"}
          bgColor={"orange"}
          height={"40px"}
          fontSize={"20px"}
          onClick={()=>setModal(false)}
        >
          Voltar
        </Button>
      </Content>
      <section>
        {item.map((element, index) => (
          <div key={index}>
            <h3>{element.type}</h3>
            <span>{element.currentAmount}</span>
            <Button onClick={()=>{setModalDel(true);setItemIdDel(element.id);setModal(false);}} >X</Button>
          </div>
        ))}
      </section>
    </Container>
  );
}
export default ModalItem;
