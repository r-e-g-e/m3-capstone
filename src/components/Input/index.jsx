export default function Input({title, placeholder = title, inputType = "text"}){
  return(
    <div>
      <p>{title}</p>
      <input type={inputType} placeholder={placeholder} />
    </div>
  );
}