import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./ManageMoreTaxes.module.scss";

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

import Modals from "../../components/Modals/ManageMoreTaxesM";
import { NavLink } from "react-router-dom";

import { ActionDropdown } from "./Dropdowns";

export default function ManageMoreTaxes() {
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
              <h5>Taxes & Groups</h5>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>
              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Taxes</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                  <button
                    className={`${cx.themtaxbtn}`}
                    onClick={() => {
                      handleShow("Create Tax", true);
                    }}
                  >
                    Create Tax
                  </button>
                </div>
              </div>

              <Row>
                <Col lg={3}>
                  <div
                    className={`${cx.moreOption}`}
                    onClick={() => {
                      handleShow("Edit Tax", true);
                    }}
                  >
                    <div>
                      <div>2w</div>
                      <div>
                        {" "}
                        <small>11%</small>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div
                    className={`${cx.moreOption}`}
                    onClick={() => {
                      handleShow("Edit Tax", true);
                    }}
                  >
                    <div>
                      <div>15%</div>
                      <div>
                        <small>15%</small>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              
              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Tax Groups</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                  <button
                     className={`${cx.themtaxbtn}`}
                    onClick={() => {
                      handleShow("Create Tax group", true);
                    }}
                  >
                    Create Tax Group
                  </button>
                </div>
              </div>

              <Row>
                <Col lg={3}>
                  <div
                    className={`${cx.moreOption}`}
                    
                  >
                    <div
                      className={`${cx.usermore}`}
                      onClick={() => {
                        handleShow("Edit Tax group", true);
                      }}
                    >
                      <div>All taxes group</div>
                      <div className={`${cx.editRole}`}>11%</div>
                    </div>

                    <div className={`${st.moreroles}`}>
                      <ActionDropdown />
                    </div>
                  </div>
                </Col>

                <Col lg={3}>
                  <div className={`${cx.moreOption}`}>
                    <div
                      className={`${cx.usermore}`}
                      onClick={() => {
                        handleShow("Edit Tax group", true);
                      }}
                    >
                      <div>15 % tax group</div>
                      <div className={`${cx.editRole}`}>15%</div>
                    </div>

                    <div className={`${st.moreroles}`}>
                      <ActionDropdown />
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
