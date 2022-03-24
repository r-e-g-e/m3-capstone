import styled from "styled-components";

const primaria = "var(--verde-escuro)";
const secundaria = "var(--laranja)";

export const Container = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  & > div{
    text-align: right;
  }
  & > h2{
    color: ${secundaria};
    font-weight: 300;
    font-size: 30px;
    text-align: center;
    margin: 0;
    margin-bottom: 25px;
  }
  form{
    background-color: ${primaria};
    margin: 0 auto;
    padding: 30px 40px;
    border-radius: 5px;
    text-align: center;
    width: 95%;
    max-width:400px;
    div{
      text-align: left;  
    }
    section{
      display: flex;
      flex-direction: column;
      gap:30px;
      margin-bottom: 30px;
    }
    .cadastro--container-botoes{
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      width: 100%;
    }
  }
`;