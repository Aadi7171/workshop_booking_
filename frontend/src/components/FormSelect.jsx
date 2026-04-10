import React from 'react';

/**
 * FormSelect Component
 * 
 * A reusable dropdown select field with a label and optional help text.
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Label text for the select
 * @param {string} props.id - Unique identifier and name for the select
 * @param {Array<Object>} props.options - List of options to display
 * @param {string} props.options[].value - Value of the option
 * @param {string} props.options[].label - Display label of the option
 * @param {boolean} [props.required=false] - If true, adds required attribute
 * @param {string} [props.helpText] - Optional hint text below the select
 * @param {string} [props.className] - Optional additional CSS classes
 * @param {Object} [props.rest] - Any other standard select attributes
 * @returns {JSX.Element} The rendered FormSelect component
 */
const FormSelect = ({ 
  label, 
  id, 
  options = [], 
  required = false, 
  helpText,
  className = "",
  ...rest 
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={id}>{label}{required && <span className="required-asterisk">*</span>}</label>
      <select 
        id={id}
        name={id}
        required={required}
        {...rest}
      >
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helpText && <p className="form-help">{helpText}</p>}
    </div>
  );
};

export default FormSelect;
