import styled from "styled-components";

export const Container = styled.div`
  background: var(--laranja);
  width: 50%;
  height: 200px;
  border-radius: 5px;
  padding: 10px;
  color: var(--branco);

  div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 430px;

    h2 {
      font-size: 16px;
    }
    P {
      margin-top: 5px;
      font-size: 14px;
    }
  }

  button {
    width: 90px;
    padding: 5px;
    border-radius: 5px;
    color: var(--laranja);
    background: var(--branco);
    border-color: var(--branco);

    :hover {
      color: var(--branco);
      background: var(--laranja);
    }
  }
  @media (min-width: 700px) {
    width: 561px;
    height: 80px;
  }
`;
