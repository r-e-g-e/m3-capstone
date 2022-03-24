import { Container } from "./styles";
import Button from "../Button";

function CardCreate({ setShowModal }) {
  const handleSubmit = () => {
    setShowModal(true);
  };

  return (
    <>
      <Container>
        <div className="ponto">
          <p>Você não possui nenhum ponto de coleta!</p>
          <Button
            onClick={handleSubmit}
            width={`${200}px`}
            height={`${40}px`}
            bgColor={"orange"}
            type="button"
          >
            CRIAR PONTO DE COLETA
          </Button>
        </div>
      </Container>
    </>
  );
}
export default CardCreate;
