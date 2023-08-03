import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./ManageDiscounts.module.scss";
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
import icon4 from "../../images/icon-printer.svg";
import { NavLink } from "react-router-dom";

import { MdArrowBackIos } from "react-icons/md";

import Modals from "../../components/Modals/ManageDiscountsM";

export default function ManageDiscounts() {
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
              <h5>Discount</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <button
                className={`btn ${st.themeBtn}`}
                onClick={() => {
                  handleShow("Create discount", true);
                }}
              >
                Create Discount 
              </button>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>
              <Row>

                <Col lg={3}>
                  <NavLink to="/manage/discounts/manage-discount" className={`${cx.moreOption}`}>
                    <div className={`${cx.discountmore}`} >
                      <div>Saad Achwa</div>
                      <div className={`${cx.discountmoreper}`}> 100% </div>
                    </div>
                  </NavLink>
                </Col>
                
                <Col lg={3}>
                  <NavLink to="/manage/discounts/manage-discount" className={`${cx.moreOption}`}>
                    <div className={`${cx.discountmore}`} >
                      <div>Coupon 10%</div>
                      <div className={`${cx.discountmoreper}`}> 10% </div>
                    </div>
                  </NavLink>
                </Col>
                
                <Col lg={3}>
                  <NavLink to="/manage/discounts/manage-discount" className={`${cx.moreOption}`}>
                    <div className={`${cx.discountmore}`} >
                      <div>Traveller 1</div>
                      <div className={`${cx.discountmoreper}`}> 10% </div>
                    </div>
                  </NavLink>
                </Col>
                
                <Col lg={3}>
                  <NavLink to="/manage/discounts/manage-discount" className={`${cx.moreOption}`}>
                    <div className={`${cx.discountmore}`} >
                      <div>SA10%</div>
                      <div className={`${cx.discountmoreper}`}> 10% </div>
                    </div>
                  </NavLink>
                </Col>
                
                <Col lg={3}>
                  <NavLink to="/manage/discounts/manage-discount" className={`${cx.moreOption}`}>
                    <div className={`${cx.discountmore}`} >
                      <div>Sunshine☀️100%</div>
                      <div className={`${cx.discountmoreper}`}> 100% </div>
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
