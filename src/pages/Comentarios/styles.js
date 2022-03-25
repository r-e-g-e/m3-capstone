import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: var(--laranja);
    font-size: 36px;
    font-family: "Lobster";
  }

  p {
    color: var(--laranja);
    font-family: "Roboto", "italic";
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    div {
      width: 314px;
      height: 94px;
      background: var(--branco);
      padding: 10px;
      border: 1px solid;
      input {
        border: none;
        width: 100%;
      }
    
    }
    button {
      width: 306px;
      height: 39px;
      font-size: 18px;
      font-weight: 700;
    }
  }
  @media (min-width: 700px) {
    p {
      font-size: 48px;
    }

    form {
      div {
        width: 625.22px;
        height: 140px;
      }
      button {
        font-size: 24px;
        width: 265.42px;
        height: 62px;
      }
    }
    a {
      display: none;
    }
  }
`;

export const Content = styled.div`
  width: 340px;
  height: 400px;
  background: #d8d4c6;
  overflow-y: scroll;

  @media (min-width: 700px) {
    width: 700px;
    height: 500px;
  }
`;

export const Card = styled.div`
  height: 117px;
  background: var(--branco);
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;

  p {
    font-size: 18px;
    padding-left: 30px;
  }

  h4 {
    background: var(--laranja);
    color: var(--branco);
    width: 70px;
    height: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
  img {
    width: 15px;
  }

  button {
    padding: 5px;
    border: none;
    background: var(--branco);
  }
  span {
    display: flex;
    justify-content: space-between;
    h4 {
      width: 20px;
      color: #89d897;
      background: var(--branco);
      padding: 5px;
      margin-right: 5px;
    }
  }

  @media (min-width: 700px) {
    height: 80px;
  }
`;
