import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Suppliersdetails.module.scss";
import table from "../../datatable.module.scss";
import { Card, Button, Row, Table, Col, Modal, Form, Dropdown } from "react-bootstrap";
import icon4 from "../../images/icon-printer.svg";
import { NavLink } from "react-router-dom";

import { MdArrowBackIos, MdDeleteOutline } from 'react-icons/md';
import Modals from "../../components/Modals/InventorySuppliersM";



export default function Suppliersdetails() {

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
          <NavLink to="/inventory/more" className={`${st.backBtn}`}>
            <MdArrowBackIos className={`${st.icon}`} /> Back
          </NavLink>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Tomato</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <button className={`btn ${st.themeBtn}`} onClick={() => {
                handleShow("edit suppliers", true);
              }}>
                Edit Suppliers
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
                    <p>Hamzah</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Contact Name</label>
                    <p>Hamzah</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Phone</label>
                    <p>+9664529023</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Primary Email</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Supplier Code</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Additional Email</label>
                    <p>-</p>
                  </Col>
                </Row>
              </div>


              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Tags</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>


                  <button className={`btn`} onClick={() => {
                    handleShow("add tags", true);
                  }}>
                    + Add Tags
                  </button>
                </div>
              </div>
              <div className={`${cx.contentBox}`}>
                <ul className={`${cx.tagsList}`}>
                  <li><span>Tag 1</span></li>
                  <li><span>Tag 2</span></li>
                </ul>
              </div>



              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Inventory Items</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>


                  <button className={`btn`} onClick={() => {
                    handleShow("inventory items", true);
                  }}>
                    + Link Items
                  </button>
                </div>
              </div>
              <div className={`${cx.contentBox}`}>
                <div className={`table-responsive`}>
                  <Table className={`${table.tableCt}`}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>SKU</th>
                        <th>Item Supplier Code</th>
                        <th>Order Unit</th>
                        <th>Order Quantity</th>
                        <th>Purchase Cost</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr onClick={() => {
                    handleShow("updateInventoryitem", true);
                  }}>
                        <td>Ice Cream</td>
                        <td>SKU-087</td>
                        <td>SUP-057</td>
                        <td>50</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                          <span className={`${table.deleteIcon}`}><MdDeleteOutline /></span>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>


            </Card.Body>
          </Card>
        </div>
      </section>

      <Modals show={show} handleClose={handleClose} modalName={modalName} />
    </>
  );
}
