import ErrorMessage from "./ErrorMessage";

function RadioGroup({ label, name, options, selected, onChange, error }) {
  return (
    <div className="field">
      <label>{label}</label>

      <div className="radio-grid">
        {options.map((option) => (
          <label
            key={option.id}
            className={`radio-card ${selected === option.id ? "active" : ""}`}
          >
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={selected === option.id}
              onChange={onChange}
            />
            {option.label}
          </label>
        ))}
      </div>

      <ErrorMessage message={error} />
    </div>
  );
}

export default RadioGroup;
