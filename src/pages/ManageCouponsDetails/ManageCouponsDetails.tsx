import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./ManageCouponsDetails.module.scss";
import table from "../../datatable.module.scss";
import {
  Card,
  Button,
  Row,
  Table,
  Col,
  Modal,
  Form,
  Dropdown,
} from "react-bootstrap";
import cancel from "../../images/cancel.svg";
import { NavLink } from "react-router-dom";

import { MdArrowBackIos } from "react-icons/md";
import Modals from "../../components/Modals/ManageCouponsM";

export default function ManageCouponsDetails() {
  const [show, setShow] = useState(false);
  const [modalName, setModalName] = useState("");
  const handleShow = (modalname: string, status: boolean) => {
    console.log(modalname, status, "handleShow");
    setModalName(modalname);
    setShow(status);
  };
  const handleClose = () => {
    setModalName("");
    setShow(false);
  };

  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <NavLink to="/manage/coupons" className={`${st.backBtn}`}>
            <MdArrowBackIos className={`${st.icon}`} /> Back
          </NavLink>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Sw10</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              
              <button className={`btn`}  
              onClick={() => {
                handleShow("Deactive Coupon", true);
              }}
              >
                <img src={cancel} className={`${st.icon}`} />
                Deactive Coupon
              </button>
              <button
                className={`btn ${st.themeBtn}`}
                onClick={() => {
                  handleShow("edit Coupons", true);
                }}
              >
                Edit Coupon
              </button>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside} ${st.setWidth}`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>
              <div className={`${cx.contentBox}`}>
                <Row>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Name</label>
                    <p>C11</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Code </label>
                    <p>Cashier</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Discount </label>
                    <p>2020-07-24 - 2020-07-31</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Date </label>
                    <p>2020-07-24 - 2020-07-31</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Time</label>
                    <p>00:00 - 23:00</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Maximum User </label>
                    <p>1 </p>
                  </Col>

                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Total Usage</label>
                    <p>0</p>
                  </Col>
                </Row>
              </div>

            </Card.Body>
          </Card>
        </div>
      </section>

      <Modals show={show} handleClose={handleClose} modalName={modalName} />
    </>
  );
}
