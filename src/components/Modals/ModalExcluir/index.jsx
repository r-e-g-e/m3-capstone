import Button from "../../Button";
import { Container, Content } from "./styles";
import { useState } from "react";
import api from "../../../utils/api";

function ModalExcluir({setItem, setModal, setModalDel, itemIdDel, itemId}) {
  

  function delItem(){
    api.delete(`/card/${itemId}/item/${itemIdDel}`).then(()=>{
      api.get(`/card/${itemId}/item`).then(res => {
        setItem(res.data);
      });
    });
    setModalDel(false);
    setModal(true);
  }

  return (
    <>
      <Container>
        <h2>Tem certeza que deseja excluir?</h2>
        <Content>
          <Button
            width={"100px"}
            bgColor={"orange"}
            height={"40px"}
            fontSize={"20px"}
            onClick={()=>delItem()}
          >
              Sim
          </Button>
          <Button
            width={"100px"}
            bgColor={"orange"}
            height={"40px"}
            fontSize={"20px"}
            onClick={()=>{setModalDel(false); setModal(true);}}
          >
              Cancelar
          </Button>
        </Content>
      </Container>
    </>
  );
}

export default ModalExcluir;
