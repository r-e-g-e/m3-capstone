import { Route, Switch } from "react-router-dom";
import PaginaCadastro from "./pages/Cadastro";
import GlobalStyle from "./styles/global";
import Imagens from "./components/Imagens";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path={"/"}>
        </Route>

        <Route path={"/cadastrar"}>
          <Imagens>
            <PaginaCadastro />
          </Imagens>
        </Route>
      </Switch>
    </>
  );
}

export default App;