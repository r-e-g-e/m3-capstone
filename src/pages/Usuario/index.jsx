//Biblioteca
import { useState } from "react";
//Componentes
import Header from "../../components/Header";
import PerfilUser from "../../components/PerfilUser";
import CardCreate from "../../components/CardCreate";
import { Container, Backgrounds, ModalContainer } from "./styles";
import CriaçãoPontoDeColeta from "../../components/Modals/CriaçãoPontoDeColeta";
function Usuario() {

  //Controle de modais
  const [showModal, setShowModal] = useState(false);
  const [close, setClose] = useState(true);
  //Dados salvos no local storage
  const email = localStorage.getItem("email");
  const id = localStorage.getItem(`ID${email}`);
  const name = localStorage.getItem("name");

  return (
    <div className="container">
      <Header login={true}/>
      <Container>
        {!id ? (
          <CardCreate setShowModal={setShowModal} setClose={setClose}/>
        ) : ( close &&  
          <PerfilUser setClose={setClose} id={id} name={name}/>
        )}
      </Container>
      <Backgrounds>
        <img src="/assets/background/twoPeoplesImage.svg" alt="background" />
        <img src="/assets/background/maskPeople.svg" alt="background" />
      </Backgrounds>
      {showModal && (
        <ModalContainer>
          <CriaçãoPontoDeColeta
            showModal={showModal}
            setShowModal={setShowModal}
            setClose={setClose}
          />
        </ModalContainer>
      )}
    </div>
  );
}
export default Usuario;
