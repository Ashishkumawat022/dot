import React, { useState } from "react";
import st from "../../style.module.scss";
import icon4 from "../../images/icon-export.svg";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";


import icon1 from "../../images/icon-branch.svg";

export const Export = () => {
  return (

    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <img src={icon4} className={`${st.icon}`} />
        Export
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <ul>
          <li><NavLink to="#">To CSV</NavLink></li>
          <li><NavLink to="#">To Excel</NavLink></li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};


export const AllCategories = () => {
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
    <div className={`${st.selectDropdown}`}>
      <MultiSelect
        options={options}
        defaultIsOpen={true}
        valueRenderer={customValueRenderer}

        value={selected}
        onChange={setSelected}
        labelledBy={"All Branches"}
        isCreatable={true}
        closeOnChangedValue={true}
      />
    </div>
  );
};
export const ActionDropdown = () => {
  return (

    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <ul>
          <li><NavLink to="#">Add Tags</NavLink></li>
          <li><NavLink to="#">Remove Tags</NavLink></li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};