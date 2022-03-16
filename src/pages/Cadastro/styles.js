import styles from "styled-components";

const primary = "#00AAA0";
const secondary = "#D55B3E";

export const Container = styles("section")`
  display: flex;
  flex-direction: column;

  background-color: #FCF4D9;
  
  height: 100%;
  width: 100%;


  & > div{
    text-align: right;
  }

  & > h2{
    color: ${secondary};

    font-weight: 300;
    font-size: 30px;
    text-align: center;

    margin: 0;
    margin-bottom: 25px;
  }
  
  form{
    background-color: ${primary};
    
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

    button{
      background-color: ${secondary};

      padding: 10px 12px;

      color: white;

      font-size: 18px;
      font-weight: 600 ;
      
      border: none;
      border-radius: 5px;
    }
  }
`;