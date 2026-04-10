import React from 'react';

/**
 * FormTextArea Component
 * 
 * A reusable multi-line text input field with a label and optional help text.
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Label text for the textarea
 * @param {string} props.id - Unique identifier and name for the textarea
 * @param {string} [props.placeholder] - Placeholder text
 * @param {number} [props.rows=4] - Number of visible text lines
 * @param {boolean} [props.required=false] - If true, adds required attribute
 * @param {string} [props.helpText] - Optional hint text below the textarea
 * @param {string} [props.className] - Optional additional CSS classes
 * @param {Object} [props.rest] - Any other standard textarea attributes
 * @returns {JSX.Element} The rendered FormTextArea component
 */
const FormTextArea = ({ 
  label, 
  id, 
  placeholder, 
  rows = 4,
  required = false, 
  helpText,
  className = "",
  ...rest 
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={id}>{label}{required && <span className="required-asterisk">*</span>}</label>
      <textarea 
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder} 
        required={required}
        {...rest}
      />
      {helpText && <p className="form-help">{helpText}</p>}
    </div>
  );
};

export default FormTextArea;
