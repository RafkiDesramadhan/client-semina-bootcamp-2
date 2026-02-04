import React from "react";
import Alert from "react-bootstrap/Alert";

export default function SAlert({ message, type }) {
  return <Alert variant={type}>{message}</Alert>;
}
