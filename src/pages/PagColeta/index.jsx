import { StyledButton } from "../../Components/Button/styles";
import { CollectionContainer, CollectionHeader } from "./styles";

const PagColeta = () => {
  return (
    <CollectionContainer>
      <CollectionHeader>
        <h2>
          <span className="ajude">Ajude.</span>
          <span className="me">me</span>
        </h2>
        <StyledButton width="100px" bgColor="orange">
          Voltar
        </StyledButton>
      </CollectionHeader>
    </CollectionContainer>
  );
};

export default PagColeta;
