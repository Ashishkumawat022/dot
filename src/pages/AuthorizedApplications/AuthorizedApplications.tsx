import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./AuthorizedApplications.module.scss";
import table from "../../datatable.module.scss";
import { Card, Tooltip, OverlayTrigger, Button, Modal, Form, Dropdown, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from "react-select";
import icon1 from "../../images/icon-branch.svg";
import serVme from "../../images/serVme.svg";
import { MdArrowBackIos } from "react-icons/md";

import Modals from "../../components/Modals/MarketplaceM";


export default function AuthorizedApplications(): JSX.Element {
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
  const [lgShow, setLgShow] = useState(false);



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
        <NavLink to="/marketplace" className={`${st.backBtn}`}>
            <MdArrowBackIos className={`${st.icon}`} /> Back
          </NavLink>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Authorized Applications</h5>
              <p className={`${cx.pragrafPoint}`}>These applications have the authority to access your account. You can revoke access at anytime.</p>
            </div>
          </div>
        </div>
        
        <div className={`${cx.marketplaceTop}`}>
          <Row>
              <Col lg={8} className={`m-auto`}>
                  <div className={`${cx.marketplaceBox}`}>
                    <h4>QuickBooks Online</h4>
                    <div className={`${cx.revokeButton}`}>
                      <NavLink to="#"  onClick={() => {
                  handleShow("Revoke", true);
                }}>Revoke</NavLink>
                    </div>
                  </div>
              </Col>
          </Row>
        </div>
      </section>
      <Modals show={show} handleClose={handleClose} modalName={modalName} />

    </>
  );
}
