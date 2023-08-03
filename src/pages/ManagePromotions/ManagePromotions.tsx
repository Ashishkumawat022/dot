import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./ManagePromotions.module.scss";
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

import Modals from "../../components/Modals/ManagePromotionsM";
import { NavLink } from "react-router-dom";

export default function ManagePromotions() {
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
              <h5>Promotions</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
                <NavLink to="/manage/promotions/add-promotions">
              <button
                className={`btn ${st.themeBtn}`}
              >
                Add Promotions
              </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>
              <Row>
                <Col lg={3} >
                  <NavLink to="/manage/promotions/promotions-detail" className={`${cx.navnewpage}`}>
                    <div className={`${cx.moreOption}`}>
                      <div className={`${cx.usermore}`}>
                        <div className={`${cx.promotions}`}>end Year</div>
                        <div className={`${cx.editRole} ${cx.promotions}`}>
                          2021-01-11 - 2021-01-27
                        </div>
                        <div className={`${cx.promotions}`}>
                          <button className={`${cx.notUsedBtn}`}>Active</button>
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
