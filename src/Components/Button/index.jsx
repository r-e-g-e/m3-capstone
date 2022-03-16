import { StyledButton } from "./styles";

export const Button = ({ bgColor, children, width, ...rest }) => {
  return (
    <StyledButton width={width} bgColor={bgColor} {...rest}>
      {children}
    </StyledButton>
  );
};

/* 
  bgColor = 'orange' || 'white';
  isWide = true => width: 200px || false => width: 100px;
*/
