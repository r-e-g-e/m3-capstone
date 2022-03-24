//Bibliotecas
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Componentes
import FormBackground from "./components/FormBackground";
//Paginas
import Landing from "./pages/Lading";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Coleta from "./pages/Coleta";
import Sobre from "./pages/Sobre";
import ControleDeColeta from "./pages/ControleDeColeta";

function App() {

  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route path="/login">
          <FormBackground>
            <Login />
          </FormBackground>
        </Route>
        <Route exact path="/signup">
          <FormBackground>
            <Cadastro/>
          </FormBackground>
        </Route>
        <Route exact path="/about">
          <Sobre/>
        </Route>
        <Route path="/collection">
          <Coleta/>
        </Route>
        <Route path="/control">
          <ControleDeColeta/>
        </Route>
        <Route exact path="/:name">
          <span>oi</span>
        </Route>
      </Switch>
    </>
  );
}
export default App;
