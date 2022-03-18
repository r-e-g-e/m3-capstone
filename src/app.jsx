import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path={"/"}></Route>
      </Switch>
    </>
  );
}

export default App;