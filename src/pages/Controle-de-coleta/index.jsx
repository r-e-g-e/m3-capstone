import {LocationsContainer, Container} from "./styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../utils/api";
import Header from "../../components/Header";
import Button from "../../components/Button";
import CardItem from "../../components/CardItem";
import ModalItem from "../../components/Modals/ModalItem";
import ModalMaisItem from "../../components/Modals/ModalMaisItem";
import ModalExcluir from "../../components/Modals/ModalExcluir";
import ModalDoar from "../../components/Modals/ModalDoar";


function ControleDeColeta(location){

  const [item, setItem] = useState([]);
  const [card, setCard] = useState([]);
  const [itemId, setItemId] = useState([]);
  const [itemIdDel, setItemIdDel] = useState([]);
  const [filter, setFilter] = useState(card);
  const [input, setinput] = useState(""); 
  const [modal, setModal] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalDel, setModalDel] = useState(false);
  const [modalDonate, setModalDonate] = useState(false);
  const history = useHistory();
  const id = "6ef4dcbc-2879-4837-9985-429775284344";

  useEffect(()=>{
    api.get(`/collect/${id}/card`).then(res => {
      setCard(res.data);
    });
  }, []);

  useEffect(()=>{
    setFilter(card);
  }, [card]);
  
  //Função de pesquisa um card
  function search(input){
    const result = card.filter(item=>{
      return item.name === input;
    });
    setFilter(result);
    setinput("");
  }
  //Função de criar um card
  function createCard(input){
    const obj = {
      "name":input
    };
    api.post(`/collect/${id}/card`, obj).then(() => {
      toast.success("Card criado com sucesso!");
      api.get(`/collect/${id}/card`).then(res => {
        setCard(res.data);
      });
    });
    setinput("");
  }

  return(
    <>
      
      { modal &&
        <ModalItem item={item} setItem={setItem} modal={modal} setModal={setModal} setModalCreate={setModalCreate} itemId={itemId} setModalDel={setModalDel} setItemIdDel={setItemIdDel}/>
      }

      { modalCreate &&
        <ModalMaisItem setItem={setItem} itemId={itemId} setModalCreate={setModalCreate} setModal={setModal}/>
      }

      { modalDel &&
        <ModalExcluir setItem={setItem} setModal={setModal}  setModalDel={setModalDel} itemIdDel={itemIdDel} itemId={itemId}/>
      }
      
      { modalDonate &&
        <ModalDoar/>
      }  

      <Header/>
      <Container>
        <div className="icon" onClick={()=>history.push(location)}>
          <span>Acesse o maps:</span>
          <img src="/assets/maps.png" alt="icon"/>
        </div>
        <h2>Recebeu doação <span onClick={()=>setModalDonate(true)} className="blue">informe</span></h2>
        <section className="search">
          <input type="text" value={input} onChange={(evt)=>setinput(evt.target.value)} />
          <div className="buttons">
            <Button width={`${220}px`} height={`${50}px`} bgColor = {"orange"} onClick={()=>search(input)}>Pesquisa</Button>
            <Button width={`${220}px`} height={`${50}px`} bgColor = {"orange"} onClick={()=>createCard(input)}>Criar</Button>
          </div>
        </section>
        <h2 onClick={()=>setFilter(card)} className="listAll">Mostra todos os cards</h2>
        <LocationsContainer>
          <div className="locationsInnerContainer">
            {
              filter.map((item, index )=>{
                return <CardItem id={id} setCard = {setCard} item={item} key={index} setModal={setModal} setItemId={setItemId}/>;    
              })
            }
          </div>
        </LocationsContainer>
      </Container>
    </>
  );
}
export default ControleDeColeta;