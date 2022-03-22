import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";
import ControleDeColeta from "./pages/Controle-de-coleta";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <ToastContainer/>
      <GlobalStyle />
      <Switch>
        <Route path="/control">
          <ControleDeColeta/>
        </Route>
      </Switch>
    </>
  );
}
export default App;
