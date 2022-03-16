import { Container } from "./styles";

export default function Input({title, placeholder = title, inputType = "text", error, register}){
  return(
    <Container>
      <div>
        <p>{title}</p>
        {error && <small>{error}</small>}
      </div>
      <input {...register} type={inputType} placeholder={placeholder} />
    </Container>
  );
}