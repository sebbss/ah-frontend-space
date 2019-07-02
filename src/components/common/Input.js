/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  id, name, label, onChange, placeholder, value, type, className, disabled,
}) => {
  const wrapperClass = 'form-group';
  const labelClass = 'control-label';

  return (
    <React.Fragment>
      <div className={wrapperClass}>
        <label className={labelClass} htmlFor={name}>
          {label}
        </label>
        <div className="field">
          <input
            type={type}
            id={id}
            name={name}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  className: 'form-control',
  disabled: false,
  placeholder: '',
  label: '',
  name: '',
  id: '',
};

export default Input;
