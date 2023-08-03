import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Countsheetdetails.module.scss";
import table from "../../datatable.module.scss";
import { Card, Button, Row, Table, Col, Modal, Form, Dropdown } from "react-bootstrap";
import icon4 from "../../images/icon-printer.svg";

import icon5 from "../../images/icon-duplicate.svg";
import { NavLink } from "react-router-dom";

import { MdArrowBackIos, MdDeleteOutline, MdOutlineDelete } from 'react-icons/md';
import Modals from "../../components/Modals/InventoryCountsheetM";
import { AiOutlinePrinter } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";



export default function Countsheetdetails() {

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
          <NavLink to="/inventory/inventory-countsheet" className={`${st.backBtn}`}>
            <MdArrowBackIos className={`${st.icon}`} /> Back
          </NavLink>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Inventory Count Sheet ( Patty )</h5>
            </div>
            <div className={`${st.rowTitleRight} ${cx.rowTitleIcons}`}>
              <button className={`btn`} onClick={() => {
                handleShow("delete", true);
              }}>
                <MdOutlineDelete/>
                Delete
              </button>
              <button className={`btn`} onClick={() => {
                handleShow("edit", true);
              }}>
                <FiEdit/>
                Edit
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
                    <label>Branch</label>
                    <p>Baghdad W01</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Business Date</label>
                    <p>2022-09-19</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Creator</label>
                    <p>Abdulwahab Dakheel</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Submitter</label>
                    <p>Abdulwahab Dakheel</p>
                  </Col>
                </Row>
              </div>


              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Items</h5>
                </div>
                
                <div className={`${cx.rowTitleRight}`}>


                  <button className={`btn`}>
                    Sort Items
                  </button>
                  <button className={`btn`} onClick={() => {
                    handleShow("add items", true);
                  }}>
                    Add Items
                  </button>
                  <button className={`btn`} onClick={() => {
                    handleShow("import files", true);
                  }}>
                    Import Items
                  </button>
                  <button className={`btn`}>
                    Print
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
                        <th>Storage UOM</th>
                        <th>Ingredients UOM</th> 
                        <th></th> 
                      </tr>
                    </thead>
                    <tbody>
                      <tr onClick={() => {
                    handleShow("countsheetitems", true);
                  }}>
                        <td>Mistake ice cream</td>
                        <td>SK-0042</td>
                        <td>123</td>
                        <td>324</td>
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
