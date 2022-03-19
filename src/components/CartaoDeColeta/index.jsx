import Button from "../Button";
import ProfilePicture from "../ProfilePicture";
import { CartaoDeColetaContainer } from "./styles";

function CartaoDeColeta({ width, height, color }) {
  return (
    <CartaoDeColetaContainer width={width} height={height} color={color}>
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
