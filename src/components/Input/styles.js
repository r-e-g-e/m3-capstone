import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  
  div{
    display: flex;
    justify-content: space-between;

    p{
      margin: 0;
      margin-bottom: 5px;
      
      font-weight: 700;
      font-size: 14px;

      color: white;
    }
  }

  input{
    border: 2px solid ${({error}) => error ? "red" : "transparent"};
    border-radius: 5px;
    
    height: 40px;
    
    padding: 0 5px;

    box-sizing: borde-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  small{
    color:red;
  }
`;