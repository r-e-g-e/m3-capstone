import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";
import PaginaSobre from "./pages/sobre";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path={"/"}></Route>
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
