import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./styles/styles";
import Landing from "./pages/Lading-page";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
