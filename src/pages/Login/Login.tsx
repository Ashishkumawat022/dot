import React from "react";
import login from "./Login.module.scss";
import { NavLink } from "react-router-dom";
import { Container, Col, Form } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.svg";
export default function Login() {
  return (
    <section className={login.loginSection}>
      <Container>
        <Col className={`${login.loginBox}`}>
          <img src={logo} className={`${login.logo}`} alt="logo" />

          <Form>
            <Form.Group
              className={`${login.formBox}`}
              controlId="formBasicEmail"
            >
              <Form.Label htmlFor="">Username</Form.Label>
              <Form.Control
                className={`${login.formClass}`}
                type="text"
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group
              className={`${login.formBox}`}
              controlId="formBasicPassword"
            >
              <Form.Label htmlFor="">Password</Form.Label>
              <div className={`position-relative ${login.passwordBox}`}>
                <Form.Control
                  className={`${login.formClass}`}
                  type="password"
                  placeholder="Password"
                />
                <div className={`${login.passwordAction}`}>
                  <AiOutlineEye />
                  {/* <AiOutlineEyeInvisible /> */}
                </div>
              </div>
              <Col lg={12} className="text-end">
                <NavLink className={`${login.forogotPassword}`} to="/">
                  Forget password ?
                </NavLink>
              </Col>
              <Col lg={12} className={`${login.remberme}`}>
                <label className={`${login.checkbox}`}>
                  <input type="checkbox" />
                  <span className={`${login.checkmark}`}></span>
                  Remember Me
                </label>
              </Col>
            </Form.Group>
            <div className={`${login.submitBtnRow}`}>
              <NavLink
                to="/orders"
                className={`${login.submitBtn}`}
              >
                Sign In
              </NavLink>
            </div>
          </Form>
        </Col>
      </Container>
    </section>
  );
}
