import styles from "styled-components";

const primaria = "var(--verde-escuro)";
const secundaria = "var(--laranja)";

export const Container = styles("section")`
  display: flex;
  flex-direction: column;
  
  height: 100%;
  width: 100%;


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
    
    div{
      text-align: left;  
    }

    section{
      display: flex;
      flex-direction: column;

      gap:30px;

      margin-bottom: 30px;
    }
  }
`;

export const Botao = styles.button`
background-color: var(--laranja);
  color:white;

  padding: 10px 12px;

  color: white;

  font-size: 18px;
  font-weight: 600;
  
  border: none;
  border-radius: 5px;
  
  
  &:hover{
    background-color: white;
    color:var(--laranja);
  }
`;