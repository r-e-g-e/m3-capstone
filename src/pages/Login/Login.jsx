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
} from "./styles";

const Login = () => {
  const url = "https://m3-capstone-api.herokuapp.com/users/signin"; // conferir o endereço

  const history = useHistory();

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

  const handleError = (er) => {
    toast("Erro no login!");
  };

  const onSubmit = (data) => {
    console.log("botao clicado");
    axios
      .post(url, data)
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
        console.log(response);
        history.push(`/home`); // adicionar o context
      })
      .catch((err) => {
        handleError(err);
      });
  };

  return (
    <>
      <Container>
        <Header />
        <TituloLogin>Login</TituloLogin>
        <QuadroVerde>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TituloInput>E-mail:</TituloInput>
            <InputLogin {...register("email")} />
            <TituloInput>Senha:</TituloInput>
            <InputLogin type="password" {...register("senha")} />
            <BotaoEntrar type="submit">ENTRAR</BotaoEntrar>
          </form>
        </QuadroVerde>
        <FormImages />
      </Container>
    </>
  );
};
export default Login;
