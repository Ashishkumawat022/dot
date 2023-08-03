import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import st from "../../style.module.scss";
import icon1 from "../../images/icon-branch.svg";
import icon2 from "../../images/icon-call.svg";


export const Branches = () => {
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


export const Agents = () => {
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
        <img src={icon2} className={`${st.icon}`} /> All Agents
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

