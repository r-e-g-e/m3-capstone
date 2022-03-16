import { Route, Switch } from "react-router-dom";
import PaginaCadastro from "./pages/Cadastro";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path={"/"}>
        </Route>

        <Route exact path={"/cadastrar"}>
          <PaginaCadastro />
        </Route>
      </Switch>
    </>
  );
}

export default App;