//Bibliotecas
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";
//paginas
import PaginaSobre from "./pages/sobre";
import Landing from "./pages/Lading";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route path="/sobre">
          <PaginaSobre />
        </Route>
      </Switch>
    </>
  );
}
export default App;
