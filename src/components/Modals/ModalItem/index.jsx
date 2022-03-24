import Button from "../../Button";
import { Black, Container, Content } from "./styles";
import api from "../../../utils/api";
import { useEffect } from "react";

function ModalItem({item, setItem, setModal, itemId, setModalCreate, setModalDel, setItemIdDel}) {

  useEffect(()=>{
    api.get(`/card/${itemId}/item`).then(res => {
      setItem(res.data);
      console.log(res.data);
    });
  }, []);
 
  return (
    <Black>
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
              <span>{ JSON.parse(element.isMoney) ? `R$${element.goal}`: element.goal}</span>
              <Button onClick={()=>{setModalDel(true);setItemIdDel(element.id);setModal(false);}} >X</Button>
            </div>
          ))}
        </section>
      </Container>
    </Black> 
  );
}
export default ModalItem;