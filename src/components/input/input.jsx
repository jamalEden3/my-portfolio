import React, { useState } from 'react';
import './input.style.scss';

const Input = (props) => {
  const [focused, setFocused] = useState(false)
  const { handleChange, id, label, errorMessage, ...input } = props;

  const handleFocus = () => {
    setFocused(true);
  }

  return (
    <div className="input">
        <label htmlFor="input" className="input__label">{props.label}</label>
        <input 
            className="input__field" 
            onChange={props.handleChange}
            {...input}
            onBlur={handleFocus}
            onFocus={() => props.name === 'confirmPassword' && setFocused(true)}
            focused={focused.toString()}
            />
        <span className="input__errorMsg">{errorMessage}</span>
    </div>
    )
};

export default Input;
