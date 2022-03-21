import { Container } from "./styles";
import ProfilePicture from "../ProfilePicture";
import Button from "../Button";

function PerfilUser({data}){
  return(
    <Container>
      <div className="profile">
        <h2> {data.name} </h2>
        <ProfilePicture width={"60px"} height={"60px"}/>
      </div>
      <div className="Buttons">
        <Button width={`${200}px`} height={`${40}px`} bgColor = {"white"}>Gerenciar</Button>
        <Button width={`${200}px`} height={`${40}px`} bgColor = {"white"}>Excluir</Button>
      </div>
    </Container>
  );
}
export default PerfilUser;