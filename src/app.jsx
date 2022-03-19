import { Route, Switch } from "react-router-dom";
import PaginaCadastro from "./pages/Cadastro";
import GlobalStyle from "./styles/global";
import FormBackground from "./components/FormBackground";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path={"/"}>
        </Route>

        <Route path={"/cadastrar"}>
          <FormBackground>
            <PaginaCadastro />
          </FormBackground>
        </Route>
      </Switch>
    </>
  );
}

export default App;