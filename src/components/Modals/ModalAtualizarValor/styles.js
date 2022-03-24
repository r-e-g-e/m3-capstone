import styled from "styled-components";

export const Container = styled.div`
  width: 330px;
  height: 200px;
  color: var(--laranja);
  border-radius: 30px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: var(--bege);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  font-family: 'Roboto', sans-serif;

  h2 {
    font-weight: lighter;
  }
`;

export const StyledForm = styled.form`
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DonateDiv = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 25px;
  }

  div {
    position: relative;
    margin-left: 5px;
    input{
      all: unset;
      outline: none;
      width: 55px;
      height: 25px;
      padding-left: 30px;
      border-radius: 3px;
      border: 1px solid black;
      background-color: var(--bege-escuro);

      display: flex;
      align-items: center;
    }

    p {
      position: absolute;
      top: 18%;
      left: 0;
      padding-left: 5px;
      font-size: 16px;
    }
  }
`;

export const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;