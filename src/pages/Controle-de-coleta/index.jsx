import Header from "../../components/Header";
import Button from "../../components/Button";
import {LocationsContainer, Container} from "./styles";
import { useState } from "react";

function ControleDeColeta(){

  const [modal, setModal] = useState(false);

  return(
    <>
      <Header/>
      <Container>
     
        <div className="icon">
          <span>Acesse o maps:</span>
          <img src="/assets/maps.png" alt="icon"/>
        </div>
        <h2>Recebeu doação <span className="blue" onClick={()=>setModal(true)}>informe</span></h2>
        <section className="search">
          <input type="text"/>
          <div className="buttons">
            <Button width={`${246}px`} height={`${41}px`} bgColor = {"orange"}>Pesquisa</Button>
            <Button width={`${246}px`} height={`${41}px`} bgColor = {"orange"}>Criar</Button>
          </div>
        </section>
        <h2>Gerenciar</h2>
        <LocationsContainer>
          <div className="locationsInnerContainer">
          </div>
        </LocationsContainer>
      </Container>
    </>
  );
}
export default ControleDeColeta;