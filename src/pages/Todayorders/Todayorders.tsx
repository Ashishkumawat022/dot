import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Todayorders.module.scss";
import table from "../../datatable.module.scss";
import { Card, Tooltip, OverlayTrigger, Button, Modal, Form, Dropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from "react-select";
import icon1 from "../../images/icon-branch.svg";
import icon5 from "../../images/icon-call.svg";
import Modals from "../../components/Modals/TodayorderModals";
import iconFilter from "../../images/icon-filter.svg";
import iconClose from "../../images/icon-close.svg";

import { Branches, Agents } from "./Dropdowns";
import { AiFillInfoCircle } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';

export default function Todayorders() {
  const [lgShow, setLgShow] = useState(false);

  // Modals

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

  const Control = ({ children, ...props }: ControlProps) => {
    // @ts-ignore
    const { emoji, onEmojiClick } = props.selectProps;
    const style = { cursor: "pointer" };

    return (
      <components.Control {...props}>
        <span onMouseDown={onEmojiClick} style={style}>
          <img src={icon1} className={`${st.icon}`} />
        </span>
        {children}
      </components.Control>
    );
  };

  const options = [
    {
      value: "1",
      label: "Orders",
    },
    {
      value: "2",
      label: "Orders Items",
    },
    {
      value: "3",
      label: "Orders Payment",
    },
    {
      value: "4",
      label: "Orders 1",
    },
  ];
  const [selected, setSelected] = useState([]);
  const customValueRenderer = (selected: any, options: any) => {
    return (
      <>
        <img src={icon1} className={`${st.icon}`} /> All Branches
      </>
    );
  };
  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Today's Orders

                {['bottom'].map((placement) => (
                  <OverlayTrigger key={placement} overlay={
                    <Tooltip className={`${st.tooltipsBg}`} id={`tooltip-${placement}`}>
                      This module is to help Call Center Agents track their daily orders
                    </Tooltip>}>
                    <span className={`${st.tooltips} ms-2`} style={{ top: '4px' }}><AiFillInfoCircle /></span>
                  </OverlayTrigger>
                ))}
              </h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <Branches />
              <Agents />
              <button
                className={`btn`}
                onClick={() => {
                  handleShow("today order filter", true);
                }}
              >
                <img src={iconFilter} className={`${st.icon}`} />
                Filter
                <img src={iconClose} className={`${st.iconClose}`} />
              </button>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside} pb-0`}>
          <Card>
            <Card.Body className={`${cx.cardBody}`}>

              <div className={`${cx.orderCardList}`}>

                <div className={`${cx.orderCard}`}>
                  <div className={`${cx.Head}`}>
                    <h2>Draft
                      <span className={`${cx.count}`}>0</span>
                    </h2>
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Order that are not yet sent to the branch
                        </Tooltip>}>
                        <span className={`${st.tooltips} ms-2`} style={{ top: '2px' }}><AiFillInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </div>

                  <div className={`${cx.Body}`}>
                    <div className={`${cx.noOrder}`}>
                      <span className="text-lg">You don't have Draft orders</span>
                    </div>
                  </div>
                </div>



                <div className={`${cx.orderCard}`}>
                  <div className={`${cx.Head}`}>
                    <h2>Pending
                      <span className={`${cx.count}`}>0</span>
                    </h2>
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Orders that are not yet accepted by the branch
                        </Tooltip>}>
                        <span className={`${st.tooltips} ms-2`} style={{ top: '2px' }}><AiFillInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </div>

                  <div className={`${cx.Body}`}>
                    <div className={`${cx.dataList} mb-3`}>
                      <NavLink to="#">
                        <h5>17634</h5>
                        <div className="d-flex mb-3">
                          <div>
                            <svg xmlns="http://www.w2.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#1C1C1E"></path></svg>
                          </div> 
                          <div className="text-gray-500 ms-2 flex flex-col">
                            <span className="w-64 truncate">Test</span> 
                            <span>+56 2009030</span>
                          </div>
                        </div>
                        
                        <div className="d-flex mb-3">
                          <div>
                          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M9.99163 1.66666C5.39163 1.66666 1.66663 5.39999 1.66663 9.99999C1.66663 14.6 5.39163 18.3333 9.99163 18.3333C14.6 18.3333 18.3333 14.6 18.3333 9.99999C18.3333 5.39999 14.6 1.66666 9.99163 1.66666ZM9.99996 16.6667C6.31663 16.6667 3.33329 13.6833 3.33329 9.99999C3.33329 6.31666 6.31663 3.33332 9.99996 3.33332C13.6833 3.33332 16.6666 6.31666 16.6666 9.99999C16.6666 13.6833 13.6833 16.6667 9.99996 16.6667Z" fill="#1C1C1E"></path> <path d="M10.4166 5.83334H9.16663V10.8333L13.5416 13.4583L14.1666 12.4333L10.4166 10.2083V5.83334Z" fill="#1C1C1E"></path></svg>
                          </div> 
                          <div className="text-gray-500 ms-2 flex flex-col">
                            <span className="truncate">Created 3 hours ago</span> 
                            <span className="truncate">Modified 3 hours ago</span> 
                          </div>
                        </div>

                        
                        <div className="d-flex mb-3">
                          <div>
                          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M17.5 10.1833C17.5 5.60833 13.95 2.5 9.99996 2.5C6.09163 2.5 2.49996 5.54167 2.49996 10.2333C1.99996 10.5167 1.66663 11.05 1.66663 11.6667V13.3333C1.66663 14.25 2.41663 15 3.33329 15H4.16663V9.91667C4.16663 6.69167 6.77496 4.08333 9.99996 4.08333C13.225 4.08333 15.8333 6.69167 15.8333 9.91667V15.8333H9.16663V17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V14.8167C17.9916 14.5583 18.3333 14.05 18.3333 13.45V11.5333C18.3333 10.95 17.9916 10.4417 17.5 10.1833Z" fill="#1C1C1E"></path> <path d="M7.49996 11.6667C7.9602 11.6667 8.33329 11.2936 8.33329 10.8333C8.33329 10.3731 7.9602 10 7.49996 10C7.03972 10 6.66663 10.3731 6.66663 10.8333C6.66663 11.2936 7.03972 11.6667 7.49996 11.6667Z" fill="#1C1C1E"></path> <path d="M12.5 11.6667C12.9602 11.6667 13.3333 11.2936 13.3333 10.8333C13.3333 10.3731 12.9602 10 12.5 10C12.0397 10 11.6666 10.3731 11.6666 10.8333C11.6666 11.2936 12.0397 11.6667 12.5 11.6667Z" fill="#1C1C1E"></path> <path d="M15 9.19167C14.6 6.81667 12.5333 5 10.0417 5C7.51668 5 4.80002 7.09167 5.01668 10.375C7.07502 9.53333 8.62501 7.7 9.06668 5.46667C10.1583 7.65833 12.4 9.16667 15 9.19167Z" fill="#1C1C1E"></path></svg>
                          </div> 
                          <div className="text-gray-500 ms-2 flex flex-col">
                            <span className="truncate">Abdulwahab Dakheel</span> 
                          </div>
                        </div>

                        <div className="mt-4 d-flex align-items-center position-relative">
                          <div className="d-flex">
                          <div><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M5.00004 1.66667C4.08337 1.66667 3.34171 2.41667 3.34171 3.33334L3.33337 16.6667C3.33337 17.5833 4.07504 18.3333 4.99171 18.3333H15C15.9167 18.3333 16.6667 17.5833 16.6667 16.6667V6.66667L11.6667 1.66667H5.00004ZM10.8334 7.50001V2.91667L15.4167 7.50001H10.8334Z" fill="#1C1C1E"></path></svg>
                        </div> 
                        <div className="ms-2">
                          <span className="font-bold whitespace-nowrap">SAR 111</span> 
                          <span className="mx-1">|</span> <span>Prego</span>
                        </div>
                        </div> 
                        <Dropdown className={`${cx.moreDropdown}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                            <FiMoreVertical />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <div>
                          </div>
                          </div>
                      </NavLink>
                    </div>

                    
                    <div className={`${cx.dataList} mb-3`}>
                      <NavLink to="#">
                        <h5>17634</h5>
                        <div className="d-flex mb-3">
                          <div>
                            <svg xmlns="http://www.w2.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#1C1C1E"></path></svg>
                          </div> 
                          <div className="text-gray-500 ms-2 flex flex-col">
                            <span className="w-64 truncate">Test</span> 
                            <span>+56 2009030</span>
                          </div>
                        </div>
                        
                        <div className="d-flex mb-3">
                          <div>
                          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M9.99163 1.66666C5.39163 1.66666 1.66663 5.39999 1.66663 9.99999C1.66663 14.6 5.39163 18.3333 9.99163 18.3333C14.6 18.3333 18.3333 14.6 18.3333 9.99999C18.3333 5.39999 14.6 1.66666 9.99163 1.66666ZM9.99996 16.6667C6.31663 16.6667 3.33329 13.6833 3.33329 9.99999C3.33329 6.31666 6.31663 3.33332 9.99996 3.33332C13.6833 3.33332 16.6666 6.31666 16.6666 9.99999C16.6666 13.6833 13.6833 16.6667 9.99996 16.6667Z" fill="#1C1C1E"></path> <path d="M10.4166 5.83334H9.16663V10.8333L13.5416 13.4583L14.1666 12.4333L10.4166 10.2083V5.83334Z" fill="#1C1C1E"></path></svg>
                          </div> 
                          <div className="text-gray-500 ms-2 flex flex-col">
                            <span className="truncate">Created 3 hours ago</span> 
                            <span className="truncate">Modified 3 hours ago</span> 
                          </div>
                        </div>

                        
                        <div className="d-flex mb-3">
                          <div>
                          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M17.5 10.1833C17.5 5.60833 13.95 2.5 9.99996 2.5C6.09163 2.5 2.49996 5.54167 2.49996 10.2333C1.99996 10.5167 1.66663 11.05 1.66663 11.6667V13.3333C1.66663 14.25 2.41663 15 3.33329 15H4.16663V9.91667C4.16663 6.69167 6.77496 4.08333 9.99996 4.08333C13.225 4.08333 15.8333 6.69167 15.8333 9.91667V15.8333H9.16663V17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V14.8167C17.9916 14.5583 18.3333 14.05 18.3333 13.45V11.5333C18.3333 10.95 17.9916 10.4417 17.5 10.1833Z" fill="#1C1C1E"></path> <path d="M7.49996 11.6667C7.9602 11.6667 8.33329 11.2936 8.33329 10.8333C8.33329 10.3731 7.9602 10 7.49996 10C7.03972 10 6.66663 10.3731 6.66663 10.8333C6.66663 11.2936 7.03972 11.6667 7.49996 11.6667Z" fill="#1C1C1E"></path> <path d="M12.5 11.6667C12.9602 11.6667 13.3333 11.2936 13.3333 10.8333C13.3333 10.3731 12.9602 10 12.5 10C12.0397 10 11.6666 10.3731 11.6666 10.8333C11.6666 11.2936 12.0397 11.6667 12.5 11.6667Z" fill="#1C1C1E"></path> <path d="M15 9.19167C14.6 6.81667 12.5333 5 10.0417 5C7.51668 5 4.80002 7.09167 5.01668 10.375C7.07502 9.53333 8.62501 7.7 9.06668 5.46667C10.1583 7.65833 12.4 9.16667 15 9.19167Z" fill="#1C1C1E"></path></svg>
                          </div> 
                          <div className="text-gray-500 ms-2 flex flex-col">
                            <span className="truncate">Abdulwahab Dakheel</span> 
                          </div>
                        </div>

                        <div className="mt-4 d-flex align-items-center position-relative">
                          <div className="d-flex">
                          <div><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M5.00004 1.66667C4.08337 1.66667 3.34171 2.41667 3.34171 3.33334L3.33337 16.6667C3.33337 17.5833 4.07504 18.3333 4.99171 18.3333H15C15.9167 18.3333 16.6667 17.5833 16.6667 16.6667V6.66667L11.6667 1.66667H5.00004ZM10.8334 7.50001V2.91667L15.4167 7.50001H10.8334Z" fill="#1C1C1E"></path></svg>
                        </div> 
                        <div className="ms-2">
                          <span className="font-bold whitespace-nowrap">SAR 111</span> 
                          <span className="mx-1">|</span> <span>Prego</span>
                        </div>
                        </div> 
                        <Dropdown className={`${cx.moreDropdown}`}>
                          <Dropdown.Toggle id="dropdown-basic">
                            <FiMoreVertical />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <div>
                          </div>
                          </div>
                      </NavLink>
                    </div>
                  </div>
                </div>


                <div className={`${cx.orderCard}`}>
                  <div className={`${cx.Head}`}>
                    <h2>Active
                      <span className={`${cx.count}`}>0</span>
                    </h2>
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Orders that are currently being prepared in the branch
                        </Tooltip>}>
                        <span className={`${st.tooltips} ms-2`} style={{ top: '2px' }}><AiFillInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </div>

                  <div className={`${cx.Body}`}>
                    <div className={`${cx.noOrder}`}>
                      <span className="text-lg">You don’t have draft orders</span>
                    </div>
                  </div>
                </div>

                <div className={`${cx.orderCard}`}>
                  <div className={`${cx.Head}`}>
                    <h2>Declined
                      <span className={`${cx.count}`}>0</span>
                    </h2>
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Orders that have been declined from the branch or the call center
                        </Tooltip>}>
                        <span className={`${st.tooltips} ms-2`} style={{ top: '2px' }}><AiFillInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </div>

                  <div className={`${cx.Body}`}>
                    <div className={`${cx.noOrder}`}>
                      <span className="text-lg">You don’t have draft orders </span>
                    </div>
                  </div>
                </div>


                <div className={`${cx.orderCard}`}>
                  <div className={`${cx.Head}`}>
                    <h2>Closed
                      <span className={`${cx.count}`}>0</span>
                    </h2>
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Orders that are completed, voided, joined or returned
                        </Tooltip>}>
                        <span className={`${st.tooltips} ms-2`} style={{ top: '2px' }}><AiFillInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </div>

                  <div className={`${cx.Body}`}>
                    <div className={`${cx.noOrder}`}>
                      <span className="text-lg">You don't have Closed orders</span>
                    </div>
                  </div>
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
