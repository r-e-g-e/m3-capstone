import { Container } from "./styles";

export default function Input({title, placeholder = title, inputType = "text", error, register, ...rest}){
  return(
    <Container>
      <div>
        <p>{title}</p>
        {error && <small>{error}</small>}
      </div>
      <input {...rest} {...register} type={inputType} placeholder={placeholder} />
    </Container>
  );
}