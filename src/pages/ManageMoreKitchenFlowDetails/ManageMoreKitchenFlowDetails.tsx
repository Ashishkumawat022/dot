import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./ManageMoreKitchenFlowDetails.module.scss";
import table from "../../datatable.module.scss";

import cancel from "../../images/cancel.svg";
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
import iconsetting from "../../images/iconsetting.svg";
import { NavLink } from "react-router-dom";

import { MdArrowBackIos } from "react-icons/md";
import Modals from "../../components/Modals/ManageMoreKitchenFlowM";

export default function ManageMoreKitchenFlowDetails() {
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
          <NavLink to="/manage/manage-more/kitchen-flow" className={`${st.backBtn}`}>
            <MdArrowBackIos className={`${st.icon}`} /> Back
          </NavLink>
          <div className={`${st.pageTitleRow}`}>
            <div className={` d-flex ${st.rowTitleLeft}`}>
              <h5>1</h5>
              <button className={`${cx.usedBtn}`}> Inactive</button>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <button
                className={`btn`}
                onClick={() => {
                  handleShow("active flow", true);
                }}
              >
                <img src={cancel} className={`${st.icon}`} />
                Active Flow 
              </button>
              <button className={`btn ${st.themeBtn}`}
              onClick={() => {
                handleShow("Edit Kitchen Flow", true);
              }}
              >Edit Flow </button>
            </div>
          </div>
        </div>


        <div className={`${st.pageWrapperInside} ${st.setWidth}`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>
              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Stations</h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                  
                <button
                    className={`btn`}
                    onClick={() => {
                      handleShow("sort stations", true);
                    }}
                  >
                    Sort Station 
                  </button>
                  <button
                    className={`btn`}
                    onClick={() => {
                      handleShow("add station", true);
                    }}
                  >
                    Add Station 
                  </button>
                </div>
              </div>

              <div className={`${cx.contentBox}`}>
                <div className={`table-responsive`}>
                  <Table className={`${table.tableCt} ${cx.tableCt}`}>
                    <thead>
                        <tr >
                            <th> Name</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr onClick={() => {
                      handleShow("Edit station", true);
                    }}>
                        <td>djsogh</td>
                      </tr>
                      
                    </tbody>
                  </Table>
                </div>
              </div>


              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Branches </h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                  <button
                    className={`btn`}
                    onClick={() => {
                      handleShow("add branches", true);
                    }}
                  >
                    Add Branches 
                  </button>
                </div>
              </div>

              <div className={`${cx.contentBox}`}>
              <div className={`table-responsive`}>
                  <Table className={`${table.tableCt} ${cx.tableCt}`}>
                    <thead>
                        <tr >
                            <th> Name</th>
                            <th> Reference</th><th></th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>djsogh</td>
                        <td>B01</td>
                        
                        <td >
                        <button
                    className={`btn ${cx.tableinsidebtn}`}
                    onClick={() => {
                      handleShow("Assign KDS To Soulations", true);
                    }}
                  >
                    Assign KDS To Stations
                  </button>
                        </td>
                      </tr>
                      
                    </tbody>
                  </Table>
                </div>
              </div>

              <div className={`${cx.pageTitle}`}>
                <div className={`${cx.rowTitleLeft}`}>
                  <h5>Products  </h5>
                </div>
                <div className={`${cx.rowTitleRight}`}>
                  <button
                    className={`btn`}
                    onClick={() => {
                      handleShow("add product", true);
                    }}
                  >
                    Add products
                  </button>
                </div>
              </div>

              <div className={`${cx.contentBox}`}>
                <div className={`p-4 text-center ${table.noData}`}>
                Products that this kitchen flow should apply to
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
