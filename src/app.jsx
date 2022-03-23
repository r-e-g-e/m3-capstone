import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Route, Switch } from "react-router-dom";

import ControleDeColeta from "./pages/Controle-de-coleta";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Switch>
        <Route path="/control">
          <ControleDeColeta/>
        </Route>
      </Switch>
    </>
  );
}
export default App;
