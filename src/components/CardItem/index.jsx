//Bibliotecas
import { toast } from "react-toastify";
import api from "../../utils/api";
//Componentes
import {Container} from "./styles";
import Button from "../../components/Button";

function CardItem({id, item,  setModal, setItemId, setCard}){

  const email = localStorage.getItem("email");
  const off = localStorage.getItem("OFF");
  const ids = localStorage.getItem(`ID${email}`);

  function handleClick(){
    api.delete(`/card/${item.id}`).then(()=>{
      api.get(`/collect/${id}/card`).then(res => {
        setCard(res.data);
        toast.success("Card deletado com sucesso");
        
      });
    });

  }
  return(
    <Container>
      <h2 className="white" >{item.name}</h2>
      <Button width={`${150}px`} height={`${55}px`} bgColor = {"orange"} onClick={()=>{setModal(true); setItemId(item.id);}} >Ver</Button>
      { ids === off &&
        <span className="excluir" onClick={()=>handleClick()}>Excluir</span>
      }
    </Container>
  );
}
export default CardItem;