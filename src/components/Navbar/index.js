import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavAccess from "../NavAccess";
import { useNavigate } from "react-router-dom";
import {
  accessCategories,
  accessTalents,
  accessEvents,
  accessParticipants,
  accessPayments,
  accessOrders,
} from "../../const/access";

export default function SNavbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      let { role } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setRole(role);
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <NavAccess
            role={role}
            roles={accessCategories.find}
            action={() => navigate("/")}
          >
            Home
          </NavAccess>
          <NavAccess
            role={role}
            roles={accessCategories.find}
            action={() => navigate("/categories")}
          >
            Categories
          </NavAccess>
          <NavAccess
            role={role}
            roles={accessTalents.find}
            action={() => navigate("/talents")}
          >
            Talents
          </NavAccess>
          <NavAccess
            role={role}
            roles={accessPayments.find}
            action={() => navigate("/payments")}
          >
            Payment
          </NavAccess>
          <NavAccess
            role={role}
            roles={accessEvents.find}
            action={() => navigate("/events")}
          >
            Events
          </NavAccess>
          <NavAccess
            role={role}
            roles={accessParticipants.find}
            action={() => navigate("/participant")}
          >
            Participant
          </NavAccess>
          <NavAccess
            role={role}
            roles={accessOrders.find}
            action={() => navigate("/orders")}
          >
            Orders
          </NavAccess>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
