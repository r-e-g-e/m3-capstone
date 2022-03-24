import styled from "styled-components";

export const Black = styled.div`
  margin-top: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #00000099;
`;

export const Container = styled.div`
 position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: var(--bege);
  border: 1px solid var(--preto);
  width: 330px;
  height: 150px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px){
    width: 400px;
    height: 200px;
    font-size: 20px;
  }
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