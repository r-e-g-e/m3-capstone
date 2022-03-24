import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 200px;
  background-color: var(--verde-escuro);
  margin: 10px 10px;
  border-radius: 8px;
  .excluir{
    color:var(--branco);
    cursor: pointer;
  }
  .white{
    color:var(--branco);
    font-size: 25px;
  }
`;