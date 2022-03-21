import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--preto);
  width: 330px;
  height: 150px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  
  h2 {
    color: var(--laranja);
    width: 260px;
    font-weight: 400;
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  width: 260px;
  display: flex;
  justify-content: space-between;
`;