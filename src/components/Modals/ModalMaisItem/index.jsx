import { Black, Contador, Container, Content } from "./styles";
import Button from "../../Button";
import api from "../../../utils/api";
import { useForm } from "react-hook-form";

function ModalMaisItem({setItem, itemId, setModal, setModalCreate}) {

  const {register, handleSubmit} = useForm([]);

  const handleClick  = (date) => {

    const color = {
      "currentAmount":0.2,
      "goal":date.goal
    };

    api.post(`/card/${itemId}/item`, date).then((response)=>{
      api.get(`/card/${itemId}/item`).then(res => {
        setItem(res.data);
      });
      api.put(`/card/${itemId}/item/${response.data.id}`, color);
    });
    setModalCreate(false);
    setModal(true);
  };

  return (
    <Black>
      <Container onSubmit={handleSubmit(handleClick)}>
        <h2>Nome:</h2>
        <input className="input-nome" {...register("type")}/>
        <div className="money">
          <h2>Dinheiro?</h2>
          <select name="" id="" {...register("isMoney")} >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
        <Contador>
          <h2>Quantidade</h2>
          <input type="number" {...register("goal")}/>
        </Contador>
        
        <Content>
          <Button
            bgColor={"orange"}
            width={"100px"}
            height={"30px"}
            type="submit"
          >
              Criar
          </Button>
          <Button
            bgColor={"orange"}
            width={"100px"}
            height={"30px"}
            onClick={()=>{setModal(true); setModalCreate(false);}}
          >
             Cancelar
          </Button>
        </Content>
      </Container>
    </Black>  
  );
}
export default ModalMaisItem;
