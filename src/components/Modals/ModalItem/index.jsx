//Bibliotecas
import api from "../../../utils/api";
import { useEffect } from "react";
//Componentes
import Button from "../../Button";
import { Black, Container, Content } from "./styles";

function ModalItem({setElement, setModalUpdate, item, setItem, setModal, itemId, setModalCreate, setModalDel, setItemIdDel}) {

  const email = localStorage.getItem("email");
  const id = localStorage.getItem(`ID${email}`);
  const off = localStorage.getItem("OFF");

  useEffect(()=>{
    api.get(`/card/${itemId}/item`).then(res => {
      setItem(res.data);
    });
  }, []);

  function itemUpdate(element){
    setElement(element);
    setModal(false);
    setModalUpdate(true);
  }

  return (
    <Black>
      <Container>
        <h2>Itens</h2>
        <Content>
          { id===off &&
           <Button width={"90px"} bgColor={"orange"} height={"40px"} ontSize={"20px"} onClick={()=>{setModal(false); setModalCreate(true);}}>+</Button>
          }
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
              <h3 className="mouse" onClick={()=>itemUpdate(element)} >{element.type}</h3>
              <span>{ JSON.parse(element.isMoney) ? `R$${element.goal}`: element.goal}</span>
              {  id===off &&
              <Button onClick={()=>{setModalDel(true);setItemIdDel(element.id);setModal(false);}} >X</Button>
              }
            </div>
          ))}
        </section>
      </Container>
    </Black> 
  );
}
export default ModalItem;
