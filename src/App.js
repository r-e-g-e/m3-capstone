import { Route, Switch } from "react-router-dom";
import PagColeta from "./pages/PagColeta";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/pontos-de-coleta">
          <PagColeta />
        </Route>
      </Switch>
    </>
  );
}

export default App;
