//Bibliotecas
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";
//paginas
import PaginaSobre from "./pages/sobre";
import Landing from "./pages/Lading";
//componentes
import Button from "./components/Button";
import ButtonHeader from "./components/ButtonHeader";
import CardCreate from "./components/CardCreate";
import CardPontoColeta from "./components/CardPontoColeta";
import  Header from "./components/Header";
import HeaderLogado from "./components/HeaderLogado";

function App() {
  //Esse "porcentagem" vai ser mudado para um array onde vai ser decido a cor aparti de quantidade de arrays de iténs no inventario
  const dados = {
    nome: "teste", 
    id: 20, 
    porcentagem: 10   
  };

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route path="/sobre">
          <PaginaSobre />
        </Route>
        <Route path="/componentes">
          <Button>Teste</Button>
          <ButtonHeader>Teste</ButtonHeader>
          <CardCreate/>
          <CardPontoColeta dados = {dados}/>
          <Header/>
          <HeaderLogado/>
        </Route>
      </Switch>
    </>
  );
}
export default App;
