import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import st from "../../style.module.scss";
import icon1 from "../../images/icon-branch.svg";
import icon4 from "../../images/icon-export.svg";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Modals from "../../components/Modals/CustomerModals";

export const Export = () => {
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
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <img src={icon4} className={`${st.icon}`} />
        Import / Export
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <ul>
          <li>
            <NavLink
              to="#"
              onClick={() => {
                handleShow("import customer", true);
                console.log("check");
              }}
            >
              Import Customer
            </NavLink>
          </li>
          <li>
            <NavLink to="#">Export Customer</NavLink>
          </li>
        </ul>
      </Dropdown.Menu>
      <Modals show={show} handleClose={handleClose} modalName={modalName} />
    </Dropdown>
  );
};

export const ActionDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">Actions</Dropdown.Toggle>
      <Dropdown.Menu>
        <ul>
          <li>
            <NavLink to="#">Add Tags</NavLink>
          </li>
          <li>
            <NavLink to="#">Remove Tags</NavLink>
          </li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};
