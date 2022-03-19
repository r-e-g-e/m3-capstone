import { StyledButton } from "./styles";

function Button({
  bgColor,
  children,
  width,
  height,
  fontSize = "14px",
  ...rest
}) {
  return (
    <StyledButton
      width={width}
      bgColor={bgColor}
      height={height}
      fontSize={fontSize}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

/* 
  bgColor = 'orange' || 'white';
  isWide = true => width: 200px || false => width: 100px;
*/
