import { Route, Switch } from "react-router-dom";
import PagColeta from "./pages/PagColeta";

function App() {
  return (
    <>
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
