import { Container } from "./styles";

function ButtonHeader({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default ButtonHeader;
