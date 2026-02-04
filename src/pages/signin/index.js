<<<<<<< HEAD
import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import SAlert from "../../components/Alert";
import { useNavigate, Navigate } from "react-router-dom";
import { config } from "../../configs";
import SForm from "./form";

export default function PageSignin() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${config.api_host_dev}/cms/auth/signin`,
        form,
      );
      localStorage.setItem("token", res.data.data.token);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: err?.response?.data?.msg || "Internal server error",
        type: "danger",
      });
    }
  };

  if (token) return <Navigate to="/" replace={true} />;

  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && <SAlert type={alert.type} message={alert.message} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Signin</Card.Title>
          <SForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}
=======
import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import SAlert from "../../components/Alert";
import { Navigate, useNavigate } from "react-router-dom";
import SForm from "./form";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

export default function SignInPage() {
  console.log(localStorage.getItem("auth"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData("/cms/auth/signin", form);
      dispatch(userLogin(res.data.data.token, res.data.data.role));
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setAlert({
        status: true,
        message: error?.response?.data?.msg || "Internal Server Error",
        type: "danger",
      });
      setIsLoading(false);
    }
  };

  if (token) return <Navigate to="/" replace="true" />;

  return (
    <Container>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Sign In</Card.Title>
          {alert.status && <SAlert type="danger" message="test" />}
          <SForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}
>>>>>>> ca6655a5e725eddafaaff36ca2644728335e448f
