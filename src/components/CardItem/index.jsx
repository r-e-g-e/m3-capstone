import {Container} from "./styles";
import Button from "../../components/Button";
import { useState } from "react";
function CardItem({item}){
  const [modal, setModal] = useState(false);
  return(
    <Container>
      <h2 className="white" >{item.name}</h2>
      <Button width={`${150}px`} height={`${55}px`} bgColor = {"orange"} onclick={()=>setModal(true)}>Ver</Button>
    </Container>
  );
}
export default CardItem;