import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Container, StyledInput } from "./styles";
import { useState } from "react";
//componentes
import Button from "./../../Button/index";

function ModalDoar() {
  const [valorAtual, setValorAtual] = useState(0);

  const formatValue = (value) =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const formSchema = yup.object().shape({
    value: yup
      .number()
      .required("Valor obrigatório")
      .positive("Apenas valores positivos")
      .integer("Apenas numeros inteiros")
      .typeError(""),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => setValorAtual(valorAtual + data.value);

  return (
    <Container>
      <h2>
        Valor Atual: <span>{formatValue(valorAtual)}</span>
      </h2>
      <p>{errors.value?.message}</p>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <StyledInput type="number" label="Valor" {...register("value")} />
        <Button
          width={"100px"}
          height="40px"
          bgColor={"orange"}
          fontSize={"18px"}
          type="submit"
        >
          Atualizar
        </Button>
      </form>
    </Container>
  );
}

export default ModalDoar;
