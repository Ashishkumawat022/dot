import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Itemsdetails.module.scss";
import table from "../../datatable.module.scss";
import { Card, Button, Row, Table, Col, Modal, Form, Dropdown } from "react-bootstrap";
import icon4 from "../../images/icon-printer.svg";
import { NavLink } from "react-router-dom";

import { MdArrowBackIos, MdDeleteOutline } from 'react-icons/md';
import Modals from "../../components/Modals/InventoryItemsM";



export default function Itemsdetails() {

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
          <NavLink to="/inventory/items" className={`${st.backBtn}`}>
            <MdArrowBackIos className={`${st.icon}`} /> Back
          </NavLink>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Tomato</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <button className={`btn ${st.themeBtn}`} onClick={() => {
                handleShow("edit item", true);
              }}>
                Edit Items
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
                    <p>Tomato</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Name Localized</label>
                    <p>Tomato</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>SKU</label>
                    <p>SK-099</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Barcode</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Minimum Level</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Par Level</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Maximum Level</label>
                    <p>-</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Storage Unit</label>
                    <p>kg</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Ingredient Unit</label>
                    <p>gram</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Factor</label>
                    <p>1kg = 1000 gram</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Costing Method</label>
                    <p>From Transaction</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Category</label>
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
                    handleShow("items add tags", true);
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
                  <h5>Ingredients</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>


                  <button className={`btn`} onClick={() => {
                    handleShow("item ingredients", true);
                  }}>
                    + Add Ingredients
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
                        <th>Cost per Unit	</th>
                        <th>Net Qty	</th>
                        <th>Yield</th>
                        <th>Gross Qty	</th>
                        <th>Waste Qty</th>
                        <th>Actual Cost</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>CHAIRS</td>
                        <td>sk-0747</td>
                        <td>SAR 0</td>
                        <td>1 pieces</td>
                        <td>100%</td>
                        <td>1 pieces</td>
                        <td>0 pieces</td>
                        <td>SAR 0</td>
                        <td>
                          <span className={`${table.deleteIcon}`}><MdDeleteOutline /></span>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>


              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Suppliers</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>


                  <button className={`btn`} onClick={() => {
                    handleShow("item suppliers", true);
                  }}>
                    Link Supplier
                  </button>
                </div>
              </div>
              <div className={`${cx.contentBox}`}>
                <div className={`table-responsive`}>
                  <Table className={`${table.tableCt}`}>
                    <thead>
                      <tr>
                        <th>Supplier Name</th>
                        <th>Item Supplier Code</th>
                        <th>Order Unit</th>
                        <th>Order Quantity</th>
                        <th>Purchase Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>X</td>
                        <td>-</td>
                        <td>63</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>

              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Custom Level</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>


                  <button className={`btn`} onClick={() => {
                    handleShow("item branches", true);
                  }}>
                    Select Branches
                  </button>
                </div>
              </div>
              <div className={`${cx.contentBox}`}>
                <div className={`table-responsive`}>
                  <Table className={`${table.tableCt}`}>
                    <thead>
                      <tr>
                        <th>Branch</th>
                        <th>Minimum Level</th>
                        <th>Par Level</th>
                        <th>Maximum Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Prego</td>
                        <td>1.00000 63</td>
                        <td>1.00000 63</td>
                        <td>1.00000 63</td>
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
