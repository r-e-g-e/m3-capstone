import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";

import ControleDeColeta from "./pages/Controle-de-coleta";

function App() {

  return (
    <>
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
