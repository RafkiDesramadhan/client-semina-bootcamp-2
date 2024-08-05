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
