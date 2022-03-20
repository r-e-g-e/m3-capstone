import Button from "../Button";
import ProfilePicture from "../ProfilePicture";
import { CartaoDeColetaContainer } from "./styles";
import { useState, useEffect } from "react";

function CartaoDeColeta({ width, height, dados }) {

  const { nome, id, porcentagem } = dados;
  const [cor, setCor] = useState("var(--laranja)");

  useEffect(() => {
    if (porcentagem < 33.33) {
      setCor("var(--laranja)");
    } else if (porcentagem >= 33.33 && porcentagem < 66.66) {
      setCor("var(--amarelo)");
    } else {
      setCor("var(--verde-medio)");
    }
  }, []);

  return (
    <CartaoDeColetaContainer width={width} height={height} color={cor}>
      <ProfilePicture
        width={"60px"}
        height={"60px"}
        userName="Cantinho da Coleta"
      />
      <h6>Cantinho da coleta</h6>
      <Button width="60px" height="40px" bgColor="white">
        Ver
      </Button>
    </CartaoDeColetaContainer>
  );
}

export default CartaoDeColeta;
