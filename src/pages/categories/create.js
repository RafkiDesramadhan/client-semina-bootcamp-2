import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import SBreadcrumb from "../../components/Breadcrumb";
import SAlert from "../../components/Alert";
import Form from "./form";
import { useNavigate } from "react-router-dom";
import { config } from "../../configs";
import SNavbar from "../../components/Navbar";

export default function CategoriesCreate() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

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

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axios.post(`${config.api_host_dev}/cms/categories`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/categories");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: error.response.data.msg,
      });
      console.log(error);
    }
  };

  return (
    <>
      <SNavbar />
      <Container>
        <SBreadcrumb
          textSecond="Categories"
          urlSecond="categories"
          textThird="Create"
        />
        {alert.status && <SAlert type={alert.type} message={alert.message} />}
        <Form
          form={form}
          isLoading={isLoading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}
