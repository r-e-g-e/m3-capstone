//bibliotecas
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";

import PaginaSobre from "./pages/sobre";
import Landing from "./pages/Lading";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/"></Route>
        <Landing/>
      </Switch>
      <Switch>
        <Route path="/sobre">
          <PaginaSobre />
        </Route>
      </Switch>
    </>
  );
}

export default App;
