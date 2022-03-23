//Bibliotecas
import { Redirect, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Paginas
// import PaginaCadastro from "./pages/Cadastro";
// import Landing from "./pages/Lading";
import Login from "./pages/Login";
// import PaginaSobre from "./pages/sobre";
// import PagColeta from "./pages/PagColeta";
// import Usuario from "./pages/Usuario";
// import ControleDeColeta from "./pages/Controle-de-coleta";
// //Componentes
// import Button from "./components/Button";
// import ButtonHeader from "./components/ButtonHeader";
// import CardCreate from "./components/CardCreate";
// import CartaoDeColeta from "./components/CartaoDeColeta";
// import Header from "./components/Header";
import FormBackground from "./components/FormBackground";

function App() {

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Switch>
        {/* <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/control">
          <ControleDeColeta/>
        </Route> */}
        <Route path="/login">
          <FormBackground>
            <Login />
          </FormBackground>
        </Route>
        {/* <Route path="/signup">
          <FormBackground>
            <PaginaCadastro />
          </FormBackground>
        </Route>
        <Route path="/collection">
          <PagColeta />
        </Route>
        <Route path="/user">
          <Usuario/>
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
        </Route> */}
      </Switch>
    </>
  );
}
export default App;
