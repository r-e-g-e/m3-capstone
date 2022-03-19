import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { Container, Botao } from "./styles";

export default function PaginaCadastro(){
  const schema = yup.object().shape({
    nome: yup.string()
      .required("Campo obrigatorio."),
    
    email: yup.string()
      .required("Campo obrigatorio.")
      .email(),
    
    cpf: yup.string()
      .required("Campo obrigatorio.")
      .length(9, "Seu cpf deve conter 9 numeros!"),
    
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
        
        <Botao>
          CADASTRAR
        </Botao>
      </form>
    </Container>
  );
}