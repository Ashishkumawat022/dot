import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./ManageMoreCharges.module.scss";
import table from "../../datatable.module.scss";

import { MdArrowBackIos } from "react-icons/md";

import { NavLink } from "react-router-dom";
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

import Modals from "../../components/Modals/ManageMoreChargesM";

export default function ManageMoreCharges() {
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
        <NavLink to="/manage/manage-more" className={`${st.backBtn}`}>
            <MdArrowBackIos className={`${st.icon}`} /> Back
          </NavLink>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>charges</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <button
                className={`btn ${st.themeBtn}`}
                onClick={() => {
                  handleShow("Create charges", true);
                }}
              >
                Create Charges
              </button>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>
              <Row>
                <Col lg={3}>
                  <div className={`${cx.moreOption}`}  onClick={() => {
                        handleShow("Edit charges", true);
                      }}>
                    <div
                      className={`${cx.usermore}`}
                     
                    >
                      <div>dkv;ld</div>
                      <div className={`${cx.editRole}`}>SAR 22</div>
                    </div>

                  </div>
                </Col>
               
                <Col lg={3}>
                  <div className={`${cx.moreOption}`}  onClick={() => {
                        handleShow("Edit charges", true);
                      }}>
                    <div
                      className={`${cx.usermore}`}
                      onClick={() => {
                        handleShow("Edit charges", true);
                      }}
                    >
                      <div>dkv;ld</div>
                      <div className={`${cx.editRole}`}>SAR 10</div>
                    </div>

                  </div>
                </Col>
               
              </Row>
            </Card.Body>
          </Card>
        </div>
      </section>

      <Modals show={show} handleClose={handleClose} modalName={modalName} />
    </>
  );
}
