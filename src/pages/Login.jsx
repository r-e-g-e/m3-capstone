import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const url = "http://localhost:3000/"; // conferir o endereço

  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/.{6}/, "Mínimo de 6 caracteres"),
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
    axios
      .post(url, data)
      .then((response) => {
        // mandar o token para a store
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
        history.push(`/home`, response.data);
      })
      .catch((err) => {
        handleError(err);
      });
  };

  return (
    <div>
      <header></header>
      <main>
        <h2>Login</h2>
        <div id="quadroVerde">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>E-mail:</p>
            <input id="email"></input>
            <p>Senha:</p>
            <input id="senha" type="password"></input>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};
export default Login;
