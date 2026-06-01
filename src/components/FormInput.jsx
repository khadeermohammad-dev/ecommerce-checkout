import ErrorMessage from "./ErrorMessage";

function FormInput({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      <ErrorMessage message={error} />
    </div>
  );
}

export default FormInput;
