//Bibliotecas
import { Route, Switch } from "react-router-dom";
import PaginaCadastro from "./pages/Cadastro";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Paginas
import Landing from "./pages/Lading";
import Login from "./pages/Login";
import PaginaSobre from "./pages/sobre";
import PagColeta from "./pages/PagColeta";
//Componentes
import Button from "./components/Button";
import ButtonHeader from "./components/ButtonHeader";
import CardCreate from "./components/CardCreate";
import CartaoDeColeta from "./components/CartaoDeColeta";
import  Header from "./components/Header";
import FormBackground from "./components/FormBackground";


function App() {
  //Esse "porcentagem" vai ser mudado para um array onde vai ser decido a cor aparti de quantidade de arrays de iténs no inventario
  const dados = {
    nome: "teste", 
    id: 20, 
    porcentagem: 40   
  };

  return (
    <>
      <GlobalStyle />
      <ToastContainer/>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route path={"/signup"}>
          <FormBackground>
            <PaginaCadastro />
          </FormBackground>
        </Route>
        <Route path="/collection">
          <PagColeta/>
        </Route>
        <Route path="/about">
          <PaginaSobre />
        </Route>
        <Route path="/componentes">
          <Button>Teste</Button>
          <ButtonHeader>Teste</ButtonHeader>
          <CardCreate/>
          <CartaoDeColeta width={`${300}px`} height={`${300}px`} dados = {dados} />
          
          <Header/>
        </Route>
      </Switch>
    </>
  );
}
export default App;
