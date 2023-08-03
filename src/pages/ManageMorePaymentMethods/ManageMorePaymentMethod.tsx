import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./ManageMorePaymentMethod.module.scss";

import category from "../../images/category.svg";

import { MdArrowBackIos } from "react-icons/md";
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

import Modals from "../../components/Modals/ManageMorePaymentMethodM";
import { NavLink } from "react-router-dom";

export default function ManageMorePaymentMethod() {
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
              <h5>Payment Methods</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <button
                className={`btn `}
                onClick={() => {
                  handleShow("sort payment Method", true);
                }}
              >
                <img src={category} className={`${st.icon}`} />
                Sort Payment Methods
              </button>
              <button
                className={`btn ${st.themeBtn}`}
                onClick={() => {
                  handleShow("add payment method", true);
                }}
              >
                Add Payment Methods 
              </button>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>
              <Row>
                <Col lg={3}
                    className={`${cx.navnewpage}`}
                  >
                    <div className={`${cx.moreOption}`} 
                    onClick={() => {
                        handleShow("Edit Payment Method", true);
                      }}
                    
                    >
                      <div className={`${cx.usermore}`}>
                        <div>Gift Card</div>
                      </div>

                      <div className={`${cx.editRole}`}>
                        <div>Gift Card </div>
                        <div>
                          <button className={`${cx.usedBtn}`}> Inactive </button>
                        </div>
                      </div>
                    </div>
                </Col>
                <Col lg={3}
                    className={`${cx.navnewpage}`}
                  >
                    <div className={`${cx.moreOption}`} 
                    onClick={() => {
                        handleShow("Edit Payment Method", true);
                      }}
                    
                    >
                      <div className={`${cx.usermore}`}>
                        <div>House Account</div>
                      </div>

                      <div className={`${cx.editRole}`}>
                        <div>House Account </div>
                        <div>
                          <button className={`${cx.notUsedBtn}`}> Active </button>
                        </div>
                      </div>
                    </div>
                </Col>
                <Col lg={3}
                    className={`${cx.navnewpage}`}
                  >
                    <div className={`${cx.moreOption}`} 
                    onClick={() => {
                        handleShow("Edit Payment Method", true);
                      }}
                    
                    >
                      <div className={`${cx.usermore}`}>
                        <div>Shabaka</div>
                      </div>

                      <div className={`${cx.editRole}`}>
                        <div>Shabaka</div>
                        <div>
                          <button className={`${cx.notUsedBtn}`}> Active </button>
                        </div>
                      </div>
                    </div>
                </Col>
                <Col lg={3}
                    className={`${cx.navnewpage}`}
                  >
                    <div className={`${cx.moreOption}`} 
                    onClick={() => {
                        handleShow("Edit Payment Method", true);
                      }}
                    
                    >
                      <div className={`${cx.usermore}`}>
                        <div>Cash</div>
                      </div>

                      <div className={`${cx.editRole}`}>
                        <div>Cash </div>
                        <div>
                          <button className={`${cx.notUsedBtn}`}> Active  </button>
                        </div>
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
