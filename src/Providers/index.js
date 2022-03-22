import { PontosDeColetaProvider } from "./PontosDeColeta";
import { LocaisProvider } from "./Locais";

function Providers({ children }) {
  return (
    <PontosDeColetaProvider>
      <LocaisProvider>{children}</LocaisProvider>
    </PontosDeColetaProvider>
  );
}

export default Providers;
