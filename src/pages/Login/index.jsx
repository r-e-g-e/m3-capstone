//Biblioteca
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
//Componentes
import Input from "../../components/Input";
import { Container } from "./styles";
import Button from "../../components/Button";

export default function Login() {
  
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

  async function onSubmit(data) {
    delete data.confirmarSenha;

    const response = await axios({
      method:"POST",
      data,
      url:"https://m3-capstone-api.herokuapp.com/users/signin",
      validateStatus: () => true
    });

    if(response.status >= 400) return toast.error("Informações incorretas!");

    toast.success("Logado com sucesso!");

    localStorage.setItem("token", response.data);
    localStorage.setItem("email", data.email);

    history.push("/collection");
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
            inputType="email"
          />

          <Input
            register={register("senha")}
            error={errors.senha?.message}
            title="Senha"
            placeholder="senha"
            inputType="password"
          />
        </section>
          
        <div className="cadastro--container-botoes">
          <Button
            bgColor={"orange"}
            height={"40px"}
            width={"100px"}
            type="submit"
          >
          Entrar
          </Button>
          <Button
            height={"40px"}
            width={"100px"}
            type="button"
            onClick={() => history.goBack()}
          >
          Sair
          </Button>
        </div>
      </form>
    </Container>
  );
}
