import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { Container, FlexSection } from "./styles";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Botao from "../../components/Button";

export default function PaginaCadastro(){
  const schema = yup.object().shape({
    nome: yup.string()
      .required("Campo obrigatório."),
    
    email: yup.string()
      .required("Campo obrigatório.")
      .email("Email invalido"),
    
    cpf: yup.string()
      .required("Campo obrigatório.")
      .length(9, "Seu CPF deve conter 9 numeros!"),
    
    senha: yup.string()
      .required("Campo obrigatório.")
      .min(6, "Minimo de 6 caracteres."),

    confirmarSenha: yup.string()
      .required("Campo obrigatório.")
      .oneOf([yup.ref("senha"), null], "Senhas diferentes!")
  });

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const history = useHistory();

  async function handleFormSubmit(data){

    delete data.confirmarSenha;

    const response = await axios({
      method:"POST",
      data,
      url:"https://m3-capstone-api.herokuapp.com/users/signup",
      validateStatus: () => true
    });

    if(response.status >= 400) return toast.error(response.data.error);

    toast.success("Conta criada!");

    history.push("/");
  }

  return(
    <Container>
     
      <h2>Cadastrar</h2>

      <form onSubmit={handleSubmit(handleFormSubmit)}>

        <section>
          <Input 
            register={register("nome")}
            error={errors.nome?.message}
            placeholder="Come completo" 
            title="Nome completo:" 
          />
          <Input 
            error={errors.cpf?.message}
            register={register("cpf")}
            placeholder="cpf" 
            title="CPF:"
          />
          <Input 
            error={errors.email?.message}
            register={register("email")}
            placeholder="e-mail" 
            title="E-mail:"
            inputType="email"
          />
          <Input 
            error={errors.senha?.message}
            register={register("senha")}
            placeholder="senha"
            title="Senha:"
            inputType="password"
          />
          <Input 
            error={errors.confirmarSenha?.message}
            register={register("confirmarSenha")}
            placeholder="confirme a senha" 
            title="Confirme a senha:"
            inputType="password"
          />
        </section>

        <div className="cadastro--container-botoes">
          <Botao
            bgColor={"orange"}
            height={"40px"}
            width={"100px"}
          >
          CADASTRAR
          </Botao>
          <Botao
            height={"40px"}
            width={"100px"}
          >
          Sair
          </Botao>
        </div>
      </form>
    </Container>
  );
}