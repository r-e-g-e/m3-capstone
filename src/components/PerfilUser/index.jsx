//Biblioteca
import api from "../../utils/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//Componentes
import { Container } from "./styles";
import ProfilePicture from "../ProfilePicture";
import Button from "../Button";

function PerfilUser({name, id, setClose}){

  const history = useHistory();

  function handleClick(){
    api.delete(`collect${id}`);
    const email = localStorage.getItem("email");
    localStorage.removeItem(`ID${email}`);
    setClose(false);
  }

  return(
    <Container>
      <div className="profile">
        <h2> {name} </h2>
        <ProfilePicture width={"60px"} height={"60px"} userName={name}/>
      </div>
      <div className="Buttons">
        <Button onClick={()=>history.push("/control")} width={`${200}px`} height={`${40}px`} bgColor = {"white"}>Gerenciar</Button>
        <Button onClick={()=>handleClick()} width={`${200}px`} height={`${40}px`} bgColor = {"white"}>Excluir</Button>
      </div>
    </Container>
  );
}
export default PerfilUser;