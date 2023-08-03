import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./ManageTimedEvents.module.scss";
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

import Modals from "../../components/Modals/ManageTimedEventsM";
import { NavLink } from "react-router-dom";

export default function ManageTimedEvents() {
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
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Timed Events</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <button
                className={`btn ${st.themeBtn}`}
                onClick={() => {
                    handleShow("Create Time Events", true);
                  }}
              >
                Create Timed Events
              </button>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>
              <Row>
                <Col lg={3} >
                  <NavLink to="/manage/timed-events/timed-events-details" className={`${cx.navnewpage}`}>
                    <div className={`${cx.moreOption}`}>
                      <div className={`${cx.usermore}`}>
                        <div className={`${cx.promotions}`}>Saad Achwa</div>
                        <div className={`${cx.editRole} ${cx.promotions}`}>
                        2021-01-11 - 2021-01-27
                        </div>
                        <div className={`${cx.promotions}`} >

                          <button className={`${cx.notUsedBtn}`}>Not Used</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
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
