import { StyledButton } from "./styles";

export const Button = ({ isWide, bgColor, children, ...rest }) => {
  return (
    <StyledButton isWide={isWide} bgColor={bgColor} {...rest}>
      {children}
    </StyledButton>
  );
};

/* 
  bgColor = 'orange' || 'white';
  isWide = true => width: 200px || false => width: 100px;
*/
