import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import st from "../../style.module.scss";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import more from "../../images/more.svg";

import Modals from "../../components/Modals/ManageRolesM";

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
    <>
      <Dropdown >
        <Dropdown.Toggle id="dropdown-basic"  >
          <img src={more} alt="" className={`${st.icon}`}/>
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <ul>
            <li>
              <NavLink to="#"  onClick={() => {
                      handleShow("add to users", true);
                    }} >Add to Users </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => {
                      handleShow("remove to users", true);
                    }} >Remove To User </NavLink>
            </li>
          </ul>
        </Dropdown.Menu>
      </Dropdown>

      <Modals show={show} handleClose={handleClose} modalName={modalName} />
      </>
  );
};
