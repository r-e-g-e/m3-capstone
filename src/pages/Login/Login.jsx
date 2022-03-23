import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import FormImages from "../../components/FormBackground";
import {
  Container,
  TituloLogin,
  TituloInput,
  QuadroVerde,
  InputLogin,
  BotaoEntrar,
  BotaoVoltar,
} from "./styles";

export default function Login() {
  const url = "https://m3-capstone-api.herokuapp.com/users/signin";

  const history = useHistory();

  function voltar() {
    history.push("/");
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    senha: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmit(data) {
    console.log(data);
    axios
      .post(url, data)
      .then((response) => {
        history.push(`/home`);
      })
      .catch((err) => {
        toast.error("Erro no login!");
      });
  }

  return (
    <>
      <Container>
        <Header />
        <TituloLogin>Login</TituloLogin>
        <QuadroVerde>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TituloInput placeholder="Email">
              {errors.email ? errors.email.message : "Email:"}
            </TituloInput>
            <InputLogin {...register("email")} />
            <TituloInput>
              {errors.senha ? errors.senha.message : "Senha:"}
            </TituloInput>
            <InputLogin type="password" {...register("senha")} />
            <BotaoEntrar type="submit">ENTRAR</BotaoEntrar>
          </form>
          <ToastContainer />
        </QuadroVerde>
        <BotaoVoltar onClick={voltar}>Voltar</BotaoVoltar>
        <FormImages />
      </Container>
    </>
  );
}
