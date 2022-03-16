import { Route, Switch } from "react-router-dom";
import PaginaCadastro from "./pages/Cadastro";

function App() {
  return (
    <>
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
