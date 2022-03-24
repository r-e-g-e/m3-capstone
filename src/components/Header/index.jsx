//Bibliotecas
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//Componentes
import {ButtonHeader, Container, LogadoContainer } from "./styles";
import ProfilePicture from "../ProfilePicture";

function Header({login}) {

  const history =  useHistory();

  const info = localStorage.getItem("email");

  function handleClick(){
    const email = localStorage.getItem("email");
    localStorage.removeItem(`ID${email}`);
    localStorage.removeItem("token");
  }

  return (
    <Container>
      <img className="logo" src="/assets/Ajude.me.svg" alt="ajude.me logo" />
      {!login ? (
        <ButtonHeader onClick={()=>history.push("/")} >voltar</ButtonHeader>
      ) : (
        <LogadoContainer>
          <ul>
            <li>
              <Link to={"/about"}>Sobre</Link>
            </li>
            <li onClick={()=>handleClick()} >
              <Link to={"/"}>Sair</Link>
            </li>
          </ul>
          <ProfilePicture width={"60px"} height={"60px"} userName={info}/>
        </LogadoContainer>
      )}
    </Container>
  );
}
export default Header;
