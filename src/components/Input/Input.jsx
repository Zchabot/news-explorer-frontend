import { useState } from "react";
import "./Input.css";
import visibilityOn from "../../assets/visibility-on.svg";
import visibilityOff from "../../assets/visibility-off.svg";

function Input({
  id,
  errors,
  labelText,
  inputName,
  type,
  placeholder,
  values,
  handleChange,
  minLength,
  maxLength,
}) {
  const [visible, setVisible] = useState(false);
  const isPassword = inputName === "password" || type === "password";
  const filteredType = isPassword ? `${visible ? "text" : "password"}` : type;
  const onPasswordClick = () => setVisible((v) => !v);
  const visibilityIconClass = `input__element_visiblility-icon ${
    visible && "input__element_visiblility-icon_visible"
  }`;
  return (
    <label htmlFor={id} className="input__label">
      {labelText}
      <div className="input__field">
        <input
          type={filteredType}
          className="input__element"
          id={id}
          placeholder={placeholder}
          value={`${values ? `${values}` : ""}`}
          name={inputName}
          onChange={handleChange}
          autoComplete="on"
          minLength={minLength || ""}
          maxLength={maxLength || ""}
          required
        ></input>
        <p className="input__error">{errors}</p>
        {isPassword && (
          <button
            className="input__element_password-button"
            type="button"
            onClick={onPasswordClick}
          >
            <img
              className={visibilityIconClass}
              src={visible ? visibilityOff : visibilityOn}
              alt={visible ? "Show" : "Hide"}
            />
          </button>
        )}
      </div>
    </label>
  );
}

export default Input;
