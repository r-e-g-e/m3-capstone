import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";
import { Container } from "./styles";

export default function PaginaCadastro(){
  const history = useHistory();

  const schema = yup.object().shape({
    nome: yup.string()
      .required("Campo obrigatorio."),
    
    email: yup.string()
      .required("Campo obrigatorio.")
      .email(),
    
    cpf: yup.string()
      .required("Campo obrigatorio.")
      .min(9, "Seu cpf deve conter 9 numeros!")
      .max(9, "Seu cpf deve conter apenas 9 numeros!"),
    
    senha: yup.string()
      .required("Campo obrigatorio.")
      .min(6),

    confirmarSenha: yup.string()
      .required("Campo obrigatorio.")
      .oneOf([yup.ref("senha"), null], "Senhas diferentes!")
  });

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleFormSubmit(data){
    console.log(data);
    // history.push("/dashboard/" + data.name);
  }

  return(
    <Container>
      <div>
        <button
          onClick={() => history.push("/")}
        >
          Voltar
        </button>
      </div>
      
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
          />
          <Input 
            error={errors.senha?.message}
            register={register("senha")}
            placeholder="senha"
            title="Senha:"
          />
          <Input 
            error={errors.confirmarSenha?.message}
            register={register("confirmarSenha")}
            placeholder="confirme a senha" 
            title="Confirme a senha:"
          />
        </section>
        
        <button>CADASTRAR</button>
      </form>
    </Container>
  );
}