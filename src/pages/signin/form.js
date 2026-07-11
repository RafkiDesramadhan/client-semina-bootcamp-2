import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";

export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form onSubmit={handleSubmit}>
      <TextInputWithLabel
        label="Email Address"
        name="email"
        value={form.email}
        type="email"
        placeholder="Enter email "
        onChange={handleChange}
      />
      <Form.Group className="mb-4">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <Button
            variant="outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputGroup>
      </Form.Group>
      <SButton
        loading={isLoading}
        disabled={isLoading}
        variant="primary"
        action={handleSubmit}
        className="w-100"
      >
        Login
      </SButton>
    </Form>
  );
}
