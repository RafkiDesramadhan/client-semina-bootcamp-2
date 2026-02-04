<<<<<<< HEAD
import React from "react";
import { Button } from "react-bootstrap";

export default function SButton({
  children,
  action,
  variant,
  size,
  loading,
  disabled,
  className,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabled={disabled}
      size={size}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
}
=======
import React from "react";
import { Button } from "react-bootstrap";

export default function SButton({
  children,
  action,
  variant,
  size,
  loading,
  disabled,
  className,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabled={disabled}
      size={size}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
}
>>>>>>> ca6655a5e725eddafaaff36ca2644728335e448f
