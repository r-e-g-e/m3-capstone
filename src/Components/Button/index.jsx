import { StyledButton } from "./styles";

function Button({ bgColor, children, width, height, ...rest }) {
  return (
    <StyledButton width={width} bgColor={bgColor} height={height} {...rest}>
      {children}
    </StyledButton>
  );
}
export default Button;

