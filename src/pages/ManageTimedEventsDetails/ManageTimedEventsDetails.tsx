import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./ManageTimedEventsDetails.module.scss";
import cy from "../../components/Modals/Modals.module.scss";

import prImg from "../../images/edit-images.png";
import table from "../../datatable.module.scss";
import {
  Card,
  Button,
  Row,
  Table,
  Col,
  Modal,
  Form,
  Tooltip,
  OverlayTrigger,
  Dropdown,
} from "react-bootstrap";
import cancel from "../../images/cancel.svg";
import { NavLink } from "react-router-dom";

import { MdArrowBackIos } from "react-icons/md";

import { AiFillInfoCircle, AiOutlineInfoCircle } from "react-icons/ai";
import Modals from "../../components/Modals/ManageTimedEventsM";
import {
  daysFilter,
  ordertypefilter,
  percentagefilter,
  LWFfilter,
  filtertagoptions,
  customeraddfilter,
} from "../../constants/dropdownconstants";

export default function ManageTimedEventsDetails() {
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
          <NavLink to="/manage/timed-events" className={`${st.backBtn}`}>
            <MdArrowBackIos className={`${st.icon}`} /> Back
          </NavLink>
          <div className={`${st.pageTitleRow}`}>
            <div className={` d-flex ${st.rowTitleLeft}`}>
              <h5>developer testing</h5>
              <button className={`${cx.notUsedBtn}`}> Active</button>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <button
                className={`btn`}
                onClick={() => {
                  handleShow("Deactive Coupon", true);
                }}
              >
                <img src={cancel} className={`${st.icon}`} />
                Deactivate Timed Event
              </button>
              <button className={`btn ${st.themeBtn}`}
              onClick={() => {
                handleShow("Edit Time Events", true);
              }}
              >Edit Timed Event</button>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside} ${st.setWidth}`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>
              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Roles</h5>
                </div>
              </div>

              <div className={`${cx.contentBox}`}>
                <Row>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Type</label>
                    <p>Set Fixed Price</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Fixed Price</label>
                    <p>SAR 23,412</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Date</label>
                    <p>2021-01-11 - 2021-01-27</p>
                  </Col>
                  <Col lg={6} className={`${cx.formField}`}>
                    <label>Time </label>
                    <p>16:00 - 19:00</p>
                  </Col>
                </Row>
              </div>

              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Applies On Branches</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                  <button
                    className={`btn`}
                    onClick={() => {
                      handleShow("Applies On Branches", true);
                    }}
                  >
                    + Add Branches
                  </button>
                </div>
              </div>

              <div className={`${cx.contentBox}`}>
                <div className={`table-responsive`}>
                  <Table className={`${table.tableCt} ${cx.tableCt}`}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Reference</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>فرع الاحساء</td>
                        <td>B01</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>

              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Applies on Categories</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                  <button
                    className={`btn`}
                    onClick={() => {
                      handleShow("Edit Categories", true);
                    }}
                  >
                    Edit Categories
                  </button>
                </div>
              </div>

              <div className={`${cx.contentBox}`}>
                <div className={`table-responsive`}>
                  <Table className={`${table.tableCt} ${cx.tableCt}`}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>sadf</td>
                        <td>
                          <div className={`${cx.emptybox}`}></div>
                        </td>
                      </tr>
                      <tr>
                        <td>باربكيو</td>
                        <td>
                          <div className={`${cx.emptybox}`}></div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>

              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Applies on Product</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                  <button
                    className={`btn`}
                    onClick={() => {
                      handleShow("edit product", true);
                    }}
                  >
                    Edit Product
                  </button>
                </div>
              </div>

              <div className={`${cx.contentBox}`}>
                <div className={`table-responsive`}>
                  <Table className={`${table.tableCt} ${cx.tableCt}`}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>SKU</th>
                        <th> <img className={`${st.prImage}`} src={prImg} /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ساي تشيز - 1</td>
                        <td>
                        PRD_762d2214
                        </td>
                        <td>
                        <img className={`${st.prImage}`} src={prImg} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>



              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Applies On Product Tags</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                  <button
                    className={`btn`}
                    onClick={() => {
                      handleShow("Applies On Tags", true);
                    }}
                  >
                    Add product Tags
                  </button>
                </div>
              </div>

              <div className={`${cx.contentBox}`}>
              <div className={`p-4 text-center ${table.noData}`}>
              Select the product tags where this timed event can be applied.
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
