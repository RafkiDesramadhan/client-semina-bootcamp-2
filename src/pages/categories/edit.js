import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SBreadcrumb from "../../components/Breadcrumb";
import SAlert from "../../components/Alert";
import Form from "./form";
import { useNavigate, useParams } from "react-router-dom";

export default function CategoriesEdit() {
  const navigate = useNavigate();

  const { categoryId } = useParams();
  const [form, setForm] = useState({
    name: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchOneCategories = async () => {};

  useEffect(() => {
    fetchOneCategories();
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      navigate("/");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: error.response.data.msg,
      });
    }
  };

  return (
    <Container>
      <SBreadcrumb
        textSecond="Categories"
        urlSecond="/categories"
        textThird="Edit"
      />
      {alert.status && <SAlert type={alert.type} message={alert.message} />}
      <Form
        edit
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}
