import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";
import CardPerfil from "./components/CardPerfil";

function App() {
  return (
    <>
      <GlobalStyle />
      <CardPerfil />
      <Switch>
        <Route exact path={"/"}></Route>
      </Switch>
    </>
  );
}

export default App;
