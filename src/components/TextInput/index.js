<<<<<<< HEAD
import React from "react";
import { Form } from "react-bootstrap";

export default function TextInput({
  name,
  value,
  type,
  onChange,
  placeholder,
}) {
  return (
    <Form.Control
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
=======
import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

export default function TextInput(props) {
  return <Form.Control {...props} />;
}

TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
>>>>>>> ca6655a5e725eddafaaff36ca2644728335e448f
