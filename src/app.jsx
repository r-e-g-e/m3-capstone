import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";
import HeaderLogado from "./components/HeaderLogado";
import Header from "./components/Header";
import CardPontoColeta from "./components/CardPontoColeta";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderLogado />
      {/* <Header /> */}
      <CardPontoColeta />

      <Switch>
        <Route exact path={"/"}></Route>
      </Switch>
    </>
  );
}

export default App;
