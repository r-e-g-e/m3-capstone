import Header from "../../components/Header";
import PerfilUser from "../../components/PerfilUser";
import CardCreate from "../../components/CardCreate";
import { Container, Backgrounds, ModalContainer } from "./styles";
import { useState } from "react";
import CriaçãoPontoDeColeta from "../../components/Modals/CriaçãoPontoDeColeta";
function Usuario() {
  const [possuiPonto, setPossuiPonto] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const data = {
    name: "Teste da silva",
  };

  return (
    <div className="container">
      <Header />
      <Container>
        {possuiPonto ? (
          <PerfilUser data={data} />
        ) : (
          <CardCreate setShowModal={setShowModal} />
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
          />
        </ModalContainer>
      )}
    </div>
  );
}
export default Usuario;
