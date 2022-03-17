import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Landing from "./pages/Lading";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
