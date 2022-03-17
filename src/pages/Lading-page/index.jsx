import { StyledButton } from "../../Components/Button/styles";
import {
  CollectionContainer,
  CollectionHeader,
} from "../../styles/styles";
import { AboutButton } from "../../Components/AboutButton/styles";

function Landing() {
  return (
    <>
      <CollectionContainer>
        <CollectionHeader>
          <h1>
            <span className="ajude">Ajude.</span>
            <span className="me">me</span>
          </h1>
          <StyledButton width="100px" height="40px" bgColor="orange">
            Voltar
          </StyledButton>
        </CollectionHeader>
        
      
        <AboutButton>Sobre</AboutButton>
      </CollectionContainer>
    </>
  );
}

export default Landing;