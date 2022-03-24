import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 200px;
  background: var(--verde-escuro);
  border-radius: 10px;
  h2{
  font-family: 'Roboto';
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: var(--branco);
  }
  .profile{
    margin: 0 20px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px){
      margin-top: 20px;
      margin-bottom: 40px;
      width: 540px;
    }
  }
  .Buttons{
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (min-width: 768px){
      width: 540px;
    }
  }
  @media (min-width: 768px){
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
    align-items: center;
    width: 660px;
    height: 200px;
    background: var(--verde-escuro);
    border-radius: 10px;
    h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin-right: 40px;
    line-height: 28px;
    color: var(--branco);
    }
    .Buttons{
      flex-direction: row;
      margin: 5px 0;
    }
  }
  `;