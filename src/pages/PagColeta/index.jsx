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
        <StyledButton isWide={false} bgColor="orange">
          Voltar
        </StyledButton>
      </CollectionHeader>
    </CollectionContainer>
  );
};

export default PagColeta;

/*
#FCF4D9 - background
#8ED2C9 - verde-claro
#00AAA0 - verde-escuro
#D55B3E - laranja (?)
*/
