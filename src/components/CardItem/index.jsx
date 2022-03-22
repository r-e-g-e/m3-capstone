import {Container} from "./styles";
import Button from "../../components/Button";
function CardItem({item}){
  return(
    <Container>
      <h2 className="white" >{item.name}</h2>
      <Button width={`${150}px`} height={`${55}px`} bgColor = {"orange"}>Ver</Button>
    </Container>
  );
}
export default CardItem;