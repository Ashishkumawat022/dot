import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Menusortcategories.module.scss";
import table from "../../datatable.module.scss";
import { Card, Button, Row, Table, Col, Modal, Form, Dropdown } from "react-bootstrap";
import icon4 from "../../images/icon-printer.svg";
import { NavLink } from "react-router-dom";

import { MdArrowBackIos } from 'react-icons/md';
import Modals from "../../components/Modals/MenuCategoriesM";



export default function Menusortcategories() {

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
          <NavLink to="/menu/categories" className={`${st.backBtn}`}>
            <MdArrowBackIos className={`${st.icon}`} /> Back
          </NavLink>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Sort Categories</h5>
            </div>
          </div>
        </div>


        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>
                <Row>
                  <Col lg={3}>
                    <NavLink to="#" className={`${cx.moreOption}`}
                    onClick={() => {
                  handleShow("sort category popup", true);
                }}>
                    sadf
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="#" className={`${cx.moreOption}`}
                    onClick={() => {
                  handleShow("sort category popup", true);
                }}>
                    ايس كريم 
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="#" className={`${cx.moreOption}`}
                    onClick={() => {
                  handleShow("sort category popup", true);
                }}>
                    باربكيو
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="#" className={`${cx.moreOption}`}
                    onClick={() => {
                  handleShow("sort category popup", true);
                }}>
                    بوبس
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="#" className={`${cx.moreOption}`}
                    onClick={() => {
                  handleShow("sort category popup", true);
                }}>
                    مشروبات
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="#" className={`${cx.moreOption}`}
                    onClick={() => {
                  handleShow("sort category popup", true);
                }}>
                    بطاطس
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="#" className={`${cx.moreOption}`}
                    onClick={() => {
                  handleShow("sort category popup", true);
                }}>
                    سلاطات
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="#" className={`${cx.moreOption}`}
                    onClick={() => {
                  handleShow("sort category popup", true);
                }}>
                    سلايدرز
                    </NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="#" className={`${cx.moreOption}`}
                    onClick={() => {
                  handleShow("sort category popup", true);
                }}>
                    برجر
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
