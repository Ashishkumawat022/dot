import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import st from "../../style.module.scss";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Modals from "../../components/Modals/ManageMoreTaxesM";
import more from "../../images/more.svg";

export const ActionDropdown = () => {
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
        <img src={more} alt="" className={`${st.icon}`} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <ul>
          <li>
            <NavLink
              to="#"
              onClick={() => {
                handleShow("add to branches", true);
              }}
            >
              Add to Branches{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => {
                handleShow("remove to branches", true);
              }}
            >
              Remove from Branches
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => {
                handleShow("add to product", true);
              }}
            >
              Add to Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => {
                handleShow("remove from product", true);
              }}
            >
              Remove from Products{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => {
                handleShow("add to modifers", true);
              }}
            >
              Add to Modifiers Options
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => {
                handleShow("remove to modifers", true);
              }}
            >
              Remove from Modifiers Options
            </NavLink>
          </li>
        </ul>
      </Dropdown.Menu>
      <Modals show={show} handleClose={handleClose} modalName={modalName} />
    </Dropdown>
  );
};
