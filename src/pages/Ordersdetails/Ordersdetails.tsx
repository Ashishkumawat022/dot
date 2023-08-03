import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Ordersdetails.module.scss";
import table from "../../datatable.module.scss";
import { Card, Button, Row, Table, Col, Modal, Form, Dropdown } from "react-bootstrap";
import icon4 from "../../images/icon-printer.svg";
import { NavLink } from "react-router-dom";

import { MdArrowBackIos } from 'react-icons/md';
import Modals from "../../components/Modals/OrderModal";



export default function Ordersdetails() {

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
          <NavLink to="/orders" className={`${st.backBtn}`}>
            <MdArrowBackIos className={`${st.icon}`} /> Back
          </NavLink>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Order #73</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <button className={`btn`} >
                <img src={icon4} className={`${st.icon}`} />
                Print
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
                    <label>Order Number</label>
                    <p>14598</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Branch</label>
                    <p>Mall 1</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Source</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Type</label>
                    <p>Dine In</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Table</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Persons</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Tags</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Cashier</label>
                    <p>Cashier 1</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Waiter</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Device</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Agent</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Driver</label>
                    <p>441506</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Business Date</label>
                    <p>2022-05-16 04:38:06 AM</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Kitchen Received</label>
                    <p>Yes</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Open At</label>
                    <p>2022-05-16 04:37:01 PM</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Closed At</label>
                    <p>2022-05-16 04:37:01 PM</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Kitchen Done</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Preparation Time</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Customer Name</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Customer Phone</label>
                    <p>-</p>
                  </Col>
                </Row>
              </div>


              <div className={`${cx.contentBox}`}>
                <Row>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Sub Total</label>
                    <p>SAR 43,48</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Discount</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Total Charges</label>
                    <p>SAR 0</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Total Taxes</label>
                    <p>SAR 6.52</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Rounding Amount</label>
                    <p>SAR 0</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Final Price</label>
                    <p>SAR 50</p>
                  </Col>
                </Row>
              </div>

              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Order #73</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>


                  <button className={`btn`} onClick={() => {
                    handleShow("order add tags", true);
                  }}>
                    + Add Tags
                  </button>
                </div>
              </div>
              <div className={`${cx.contentBox}`}>
                <ul className={`${cx.tagsList}`}>
                  <li><span>Order 1</span></li>
                  <li><span>Order 2</span></li>
                </ul>
              </div>


              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Products</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                </div>
              </div>
              <div className={`${cx.contentBox}`}>
                <div className={`table-responsive`}>
                  <Table className={`${table.tableCt}`}>
                    <thead>
                      <tr>
                        <th>Quantity</th>
                        <th>Item</th>
                        <th>Unit Price</th>
                        <th>Discount</th>
                        <th>Note</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>100</td>
                        <td>Spaghetti</td>
                        <td>SAR 25</td>
                        <td>-</td>
                        <td>-</td>
                        <td>SAR 50</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>



              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Taxes</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                </div>
              </div>
              <div className={`${cx.contentBox}`}>
                <div className={`table-responsive`}>
                  <Table className={`${table.tableCt}`}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>15%</td>
                        <td>SAR 6.52</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>


              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Payments</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                </div>
              </div>
              <div className={`${cx.contentBox}`}>
                <div className={`table-responsive`}>
                  <Table className={`${table.tableCt}`}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>ADDED</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Shabaka</td>
                        <td>SAR 50</td>
                        <td>September 12, 12:45 AM</td>
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
