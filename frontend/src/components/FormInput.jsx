import React from 'react';

/**
 * FormInput Component
 * 
 * A reusable input field with a label and optional help text.
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Label text for the input
 * @param {string} props.id - Unique identifier and name for the input
 * @param {string} [props.type="text"] - Input type (text, email, date, etc.)
 * @param {string} [props.placeholder] - Placeholder text
 * @param {boolean} [props.required=false] - If true, adds required attribute
 * @param {string} [props.helpText] - Optional hint text below the input
 * @param {string} [props.className] - Optional additional CSS classes
 * @param {Object} [props.rest] - Any other standard input attributes
 * @returns {JSX.Element} The rendered FormInput component
 */
const FormInput = ({ 
  label, 
  id, 
  type = "text", 
  placeholder, 
  required = false, 
  helpText,
  className = "",
  ...rest 
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={id}>{label}{required && <span className="required-asterisk">*</span>}</label>
      <input 
        id={id}
        name={id}
        type={type} 
        placeholder={placeholder} 
        required={required}
        {...rest}
      />
      {helpText && <p className="form-help">{helpText}</p>}
    </div>
  );
};

export default FormInput;
