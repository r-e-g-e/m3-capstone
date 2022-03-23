import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import { Container, BotaoEntrar } from "./styles";
import Button from "../../components/Button";
import Header from "../../components/Header";
// import FormImages from "../../components/FormBackground";

export default function Login() {
  const url = "https://m3-capstone-api.herokuapp.com/users/signin";

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

  function onSubmit(data) {
    axios
      .post(url, data)
      .then((response) => {
        history.push("/home");
      })
      .catch((err) => {
        toast.error("Erro no login!");
      });
  }

  return (
    <Container>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <section>
          <Input
            register={register("email")}
            error={errors.email?.message}
            title="Email"
            placeholder="email"
          />

          <Input
            register={register("email")}
            error={errors.senha?.message}
            title="Senha"
            placeholder="senha"
          />
        </section>
          
        <div className="cadastro--container-botoes">
          <Button
            bgColor={"orange"}
            height={"40px"}
            width={"100px"}
          >
          CADASTRAR
          </Button>
          <Button
            height={"40px"}
            width={"100px"}
          >
          Sair
          </Button>
        </div>
      </form>
    </Container>
  );
}
