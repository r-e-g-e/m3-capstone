import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Route, Switch } from "react-router-dom";

import ControleDeColeta from "./pages/Controle-de-coleta";

function App() {

  const id = "091f9a06-850e-4100-a4ab-dd1f3044e56d";
  const link = "link do maps";

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Switch>
        <Route path="/control">
          <ControleDeColeta id={id} link={link}/>
        </Route>
      </Switch>
    </>
  );
}
export default App;
