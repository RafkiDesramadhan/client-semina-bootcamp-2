<<<<<<< HEAD
import React from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";
import { Form } from "react-bootstrap";

export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <div>
      <Form>
        <TextInputWithLabel
          label="Email Address"
          name="email"
          value={form.email}
          type="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <TextInputWithLabel
          label="Passwprd"
          name="password"
          value={form.password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <SButton
          variant="primary"
          action={handleSubmit}
          loading={isLoading}
          disabled={isLoading}
        >
          Submit
        </SButton>
      </Form>
    </div>
  );
}
=======
import React from "react";
import { Form } from "react-bootstrap";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";

export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form>
      <TextInputWithLabel
        label="Email Address"
        name="email"
        value={form.email}
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
      />
      <TextInputWithLabel
        label="Password"
        name="password"
        value={form.password}
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <SButton
        loading={isLoading}
        disabled={isLoading}
        variant="primary"
        action={handleSubmit}
      >
        Submit
      </SButton>
    </Form>
  );
}
>>>>>>> ca6655a5e725eddafaaff36ca2644728335e448f
