import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Marketplace.module.scss";
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
import xero from "../../images/xero.svg";
import like from "../../images/like.svg";

import quick from "../../images/quick-books.svg";
import vom from "../../images/vom.svg";
import wafeq from "../../images/wafeq.svg";
import sanad from "../../images/sanad.svg";
import add from "../../images/add.svg";
import deliveroo from "../../images/Food-1.svg";
import wssel from "../../images/Food-2.svg";
import nugttah from "../../images/Food-3.svg";
import tmmmt from "../../images/Food-4.svg";
import swift from "../../images/Food-5.svg";
import koinz from "../../images/Food-6.svg";
import deliverect from "../../images/Food-7.svg";
import mrsool from "../../images/Food-8.svg";
import bonat from "../../images/Food-9.svg";
import jahez from "../../images/Food-10.svg";
import urbanpiper from "../../images/Food-11.svg";
import zomato from "../../images/Food-12.svg";
import otter from "../../images/Food-13.svg";
import locate from "../../images/Food-14.svg";
import chefz from "../../images/Food-15.svg";
import ngo from "../../images/Food-16.svg";
import tkyr from "../../images/Food-17.svg";
import feedus from "../../images/Food-18.svg";

import oto from "../../images/delivery-1.svg";
import dook from "../../images/delivery-2.svg";
import OrderLord from "../../images/delivery-3.svg";
import getswift from "../../images/delivery-4.svg";
import yeswa from "../../images/delivery-5.svg";
import yallow from "../../images/delivery-6.svg";
import tookan from "../../images/delivery-7.svg";
import mashkor from "../../images/delivery-8.svg";
import logistic from "../../images/delivery-9.svg";

import serVme from "../../images/serVme.svg";

import finedine from "../../images/digital-1.svg";
import kol from "../../images/digital-2.svg";
import smartmenu from "../../images/digital-3.svg";
import wifismart from "../../images/digital-4.svg";

import unisync from "../../images/other-1.svg";
import qlub from "../../images/other-2.svg";
import jisr from "../../images/other-3.svg";
import RateHex from "../../images/other-4.svg";

import ShopBrain from "../../images/business-1.svg";
import fruits from "../../images/business-2.svg";

import Kasb from "../../images/erp-1.svg";
import Oditar from "../../images/erp-2.svg";
import Microtec from "../../images/erp-3.svg";

import Greenbill from "../../images/loyalty-1.svg";
import Koinz from "../../images/loyalty-2.svg";
import Mukafaat from "../../images/loyalty-3.svg";
import Nugttah from "../../images/loyalty-4.svg";
import aPunch from "../../images/loyalty-5.svg";
import resalboonus from "../../images/loyalty-6.svg";
import brandwallet from "../../images/loyalty-7.svg";
import swanplus from "../../images/loyalty-8.svg";
import loyapro from "../../images/loyalty-9.svg";
import Abkhus from "../../images/loyalty-10.svg";
import upp from "../../images/loyalty-11.svg";
import FittiCoins from "../../images/loyalty-12.svg";
import Bonat from "../../images/loyalty-13.svg";

import Iisal from "../../images/Iisal.svg";
import fatortech from "../../images/fatortech.svg";

import solo from "../../images/ordering-1.svg";
import Taker from "../../images/ordering-2.svg";
import Zyda from "../../images/ordering-3.svg";
import Order from "../../images/ordering-4.svg";
import Ruut from "../../images/ordering-5.svg";
import iWaiter from "../../images/ordering-6.svg";
import mbshr from "../../images/ordering-8.svg";
import Foodbit from "../../images/ordering-9.svg";
import Chatfood from "../../images/ordering-10.svg";
import exqu from "../../images/ordering-11.svg";
import easymenu from "../../images/ordering-12.svg";
import Fooder from "../../images/ordering-13.svg";
import Ordable from "../../images/ordering-14.svg";


export default function Marketplace(): JSX.Element {
  
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
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Marketplace</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <NavLink to="/marketplace/authorized-applications" className={`btn`}>
                <img src={like} className={`${st.icon}`} />
                Authorized Applications
              </NavLink>
            </div>
          </div>
        </div>
        
        <div className={`${cx.marketplaceTop}`}>
          <div className={`${cx.marketplaceStart}`}>
            <h3>Accounting</h3>
            <Row>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={xero} className={`${st.icon}`} />
                      <h4>Xero</h4>
                      <p>Sync Sales and Inventory data with Xero</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={quick} className={`${st.icon}`} />
                      <h4>QuickBooks Online</h4>
                      <p>Sync Sales and Inventory data with QuickBooks Online</p>
                      <div className={`${cx.marketplaceManage}`}>
                        <NavLink to="#">Manage</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={vom} className={`${st.icon}`} />
                      <h4>VOM</h4>
                      <p>Sync your Foodics sales and purchasing with VOM cloud accounting</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={wafeq} className={`${st.icon}`} />
                      <h4>Wafeq</h4>
                      <p>Sync your Foodics sales, purchases, inventory and cost of goods with Wafeq accounting system</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={sanad} className={`${st.icon}`} />
                      <h4>Sanad</h4>
                      <p>Sync your Foodics sales with Sanad Accounting System</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={add} className={`${st.icon}`} />
                      <h4>ADD Accounting Syste</h4>
                      <p>Sync Sales and Inventory data with ADD Accounting</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
            </Row>
          </div>

          <div className={`${cx.marketplaceStart}`}>
            <h3>Food Aggregator</h3>
            <Row>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={deliveroo} className={`${st.icon}`} />
                      <h4>Deliveroo</h4>
                      <p>Reach more customers than ever. Deliveroo handles delivery for your business</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={wssel} className={`${st.icon}`} />
                      <h4>Wssel</h4>
                      <p>Receive online orders from Wssel</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={nugttah} className={`${st.icon}`} />
                      <h4>Nugttah</h4>
                      <p>Pick up service and loyalty solution in one package</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={tmmmt} className={`${st.icon}`} />
                      <h4>TmmmT</h4>
                      <p>Receive online orders from TmmmT App</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={swift} className={`${st.icon}`} />
                      <h4>Swift Order</h4>
                      <p>Receive pick up orders from Swift Order app</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={koinz} className={`${st.icon}`} />
                      <h4>Koinz</h4>
                      <p>Receive online orders from Koinz App</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={deliverect} className={`${st.icon}`} />
                      <h4>Deliverect</h4>
                      <p>Receive orders from multiple online ordering services through one channel</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={mrsool} className={`${st.icon}`} />
                      <h4>Mrsool</h4>
                      <p>Receive orders from Mrsool app</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={bonat} className={`${st.icon}`} />
                      <h4>Bonat Pickup</h4>
                      <p>Receive pick up orders from Bonat app</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={jahez} className={`${st.icon}`} />
                      <h4>Jahez</h4>
                      <p>Receive online orders from Jahez Application</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={urbanpiper} className={`${st.icon}`} />
                      <h4>URBANPIPER</h4>
                      <p>Receive orders from multiple online ordering services through one channel</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={zomato} className={`${st.icon}`} />
                      <h4>Zomato</h4>
                      <p>Receive online orders from Zomato application</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={otter} className={`${st.icon}`} />
                      <h4>Otter</h4>
                      <p>Receive orders from multiple online ordering services through one channel</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={locate} className={`${st.icon}`} />
                      <h4>Locate</h4>
                      <p>Receive online orders from Locate</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={chefz} className={`${st.icon}`} />
                      <h4>The Chefz</h4>
                      <p>Receive online orders from The Chefz</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={ngo} className={`${st.icon}`} />
                      <h4>n.go</h4>
                      <p>Receive pick up orders from n.go application</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={tkyr} className={`${st.icon}`} />
                      <h4>Tkyr</h4>
                      <p>Receive online orders from Tkyr App</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={feedus} className={`${st.icon}`} />
                      <h4>FeedUs</h4>
                      <p>multiple online ordering services through one channel</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
            </Row>
          </div>

          <div className={`${cx.marketplaceStart}`}>
            <h3>Delivery Management</h3>
            <Row>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={oto} className={`${st.icon}`} />
                      <h4>OTO</h4>
                      <p>Connect with 35+ delivery companies and provide delivery for your customers</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={dook} className={`${st.icon}`} />
                      <h4>Dook</h4>
                      <p>Dook is a delivery management system that simplifies and streamlines your delivery orders</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={OrderLord} className={`${st.icon}`} />
                      <h4>OrderLord</h4>
                      <p>Delivery Management System</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={getswift} className={`${st.icon}`} />
                      <h4>Get Swift</h4>
                      <p>Delivery Management System</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={yeswa} className={`${st.icon}`} />
                      <h4>Yeswa</h4>
                      <p>Handles the delivery of your orders</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={yallow} className={`${st.icon}`} />
                      <h4>Yallow</h4>
                      <p>Manage your deliveries through Yallow system</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={tookan} className={`${st.icon}`} />
                      <h4>Tookan</h4>
                      <p>Manage your deliveries through Tookan system</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={mashkor} className={`${st.icon}`} />
                      <h4>Mashkor</h4>
                      <p>Manage and track your delivery orders with Mashkor</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={logistic} className={`${st.icon}`} />
                      <h4>4U Logistic</h4>
                      <p>Manage and track your delivery orders with 4U Logistic</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
            </Row>
          </div>

          <div className={`${cx.marketplaceStart}`}>
            <h3>Online Ordering</h3>
            <Row>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={solo} className={`${st.icon}`} />
                      <h4>SOLO</h4>
                      <p>Create a website and mobile app for your Foodics store</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Taker} className={`${st.icon}`} />
                      <h4>Taker</h4>
                      <p>Create a website and mobile app for your Foodics store</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Zyda} className={`${st.icon}`} />
                      <h4>Zyda</h4>
                      <p>Launch your online store easily</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Order} className={`${st.icon}`} />
                      <h4>Order</h4>
                      <p>Create a website and mobile app for your Foodics store</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Ruut} className={`${st.icon}`} />
                      <h4>Ruut</h4>
                      <p>Create a website and mobile app for your Foodics store</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={iWaiter} className={`${st.icon}`} />
                      <h4>iWaiter</h4>
                      <p>Customized digital menu for your store with online ordering feature</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Mukafaat} className={`${st.icon}`} />
                      <h4>Mukafaat</h4>
                      <p>Create a website and mobile app for your Foodics store</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={mbshr} className={`${st.icon}`} />
                      <h4>MBSHR</h4>
                      <p>Customized digital menu for your store with online ordering feature</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Foodbit} className={`${st.icon}`} />
                      <h4>Foodbit</h4>
                      <p>Build and run your custom online store</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Chatfood} className={`${st.icon}`} />
                      <h4>Chatfood</h4>
                      <p>Your online store and marketing solution</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={exqu} className={`${st.icon}`} />
                      <h4>EXQU</h4>
                      <p>Online ordering and delivery chatbot</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={easymenu} className={`${st.icon}`} />
                      <h4>EasyMenu</h4>
                      <p>Create your own branded online ordering website and application using EasyMenu</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Fooder} className={`${st.icon}`} />
                      <h4>Fooder</h4>
                      <p>Create your own website for your Foodics store</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Ordable} className={`${st.icon}`} />
                      <h4>Ordable</h4>
                      <p>Create your own online store and manage orders using Ordable</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
            </Row>
          </div>

          <div className={`${cx.marketplaceStart}`}>
            <h3>Digital Receipt</h3>
            <Row>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Greenbill} className={`${st.icon}`} />
                      <h4>Greenbill</h4>
                      <p>Digitalize your paper receipts in order to enhance your</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Iisal} className={`${st.icon}`} />
                      <h4>Iisal</h4>
                      <p>Provide your customers with a digital receipt via SMS or Iisal's mobile app</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={fatortech} className={`${st.icon}`} />
                      <h4>FATORTECH</h4>
                      <p>Digitalize your paper receipts in order to enhance your customers' experience</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
            </Row>
          </div>

          <div className={`${cx.marketplaceStart}`}>
            <h3>Loyalty</h3>
            <Row>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Greenbill} className={`${st.icon}`} />
                      <h4>Greenbill</h4>
                      <p>Keep your customers loyal by integrating with Greenbill Loyalty Programs</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Koinz} className={`${st.icon}`} />
                      <h4>Koinz</h4>
                      <p>Loyalty solution with intelligent growth engine for restaurants</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Mukafaat} className={`${st.icon}`} />
                      <h4>Mukafaat</h4>
                      <p>A 360 degree Customer Loyalty Program</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Nugttah} className={`${st.icon}`} />
                      <h4>Nugttah</h4>
                      <p>Digital loyalty solution replaces the need of cards</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={aPunch} className={`${st.icon}`} />
                      <h4>aPunch</h4>
                      <p>Digital loyalty system</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={resalboonus} className={`${st.icon}`} />
                      <h4>Resal Boonus</h4>
                      <p>Retain your customers with various loyalty solutions</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={FittiCoins} className={`${st.icon}`} />
                      <h4>FittiCoins</h4>
                      <p>Allow your customers to redeem FittiCoins in your Foodics store</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={brandwallet} className={`${st.icon}`} />
                      <h4>BrandWallet</h4>
                      <p>A new and innovative engagement tool, that uses digital passes in Wallet</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={swanplus} className={`${st.icon}`} />
                      <h4>Swan Plus</h4>
                      <p>Allow your customers to earn points and redeem rewards</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Bonat} className={`${st.icon}`} />
                      <h4>Bonat</h4>
                      <p>A comprehensive customer loyalty platform</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={loyapro} className={`${st.icon}`} />
                      <h4>LoyaPro</h4>
                      <p>Loyalty program utilizing Apple Wallet and Google Payment Cards</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Abkhus} className={`${st.icon}`} />
                      <h4>Abkhus</h4>
                      <p>Allows customers to utilize loyalty points to pay for government bills and other services.</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={upp} className={`${st.icon}`} />
                      <h4>UPP</h4>
                      <p>Increase your customers' retention by creating your own branded loyalty web application</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
            </Row>
          </div>

          <div className={`${cx.marketplaceStart}`}>
            <h3>ERP</h3>
            <Row>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Kasb} className={`${st.icon}`} />
                      <h4>Kasb</h4>
                      <p>Connect your Foodics account to Kasb system</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Oditar} className={`${st.icon}`} />
                      <h4>Oditar</h4>
                      <p>A cloud ERP that covers all your company's needs</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={Microtec} className={`${st.icon}`} />
                      <h4>Microtec</h4>
                      <p>Sync your Foodics sales with Microtec ERP</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
            </Row>
          </div>

          <div className={`${cx.marketplaceStart}`}>
            <h3>Business Intelligence</h3>
            <Row>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={ShopBrain} className={`${st.icon}`} />
                      <h4>ShopBrain</h4>
                      <p>A powerful forecasting tool that's flexible & easy to use, designed especially for restaurant</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={fruits} className={`${st.icon}`} />
                      <h4>Fruits360</h4>
                      <p>A web-based analytical application with easy access and real time analytical reports</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
            </Row>
          </div>

          <div className={`${cx.marketplaceStart}`}>
            <h3>Digital Menu</h3>
            <Row>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={finedine} className={`${st.icon}`} />
                      <h4>Finedine</h4>
                      <p>Maximize your revenue with digital menus</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={kol} className={`${st.icon}`} />
                      <h4>KOL</h4>
                      <p>Online ordering with bill spliting feature</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={smartmenu} className={`${st.icon}`} />
                      <h4>Smart Menu</h4>
                      <p>Customized QR digital menu for your store with online ordering capabilities</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={wifismart} className={`${st.icon}`} />
                      <h4>WiFi Smart Menu</h4>
                      <p>Allow your customers to browse your menu and make orders using your wifi network</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
            </Row>
          </div>

          <div className={`${cx.marketplaceStart}`}>
            <h3>Other</h3>
            <Row>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={unisync} className={`${st.icon}`} />
                      <h4>UNISYNC</h4>
                      <p>Manage your employees through Unisync system</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={qlub} className={`${st.icon}`} />
                      <h4>Qlub</h4>
                      <p>Manage your contactless payment of bills for customers in dine-in venues with QR Codes</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={jisr} className={`${st.icon}`} />
                      <h4>Jisr</h4>
                      <p>Manage your people through JisrHR's user-friendly interface and automate your admin work</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={RateHex} className={`${st.icon}`} />
                      <h4>RateHex</h4>
                      <p>Receive detailed feedback from your customers</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
            </Row>
          </div>

          <div className={`${cx.marketplaceStart}`}>
            <h3>Table Reservation</h3>
            <Row>
                <Col lg={3}>
                    <div className={`${cx.marketplaceBox}`}>
                      <img src={serVme} className={`${st.icon}`} />
                      <h4>serVme</h4>
                      <p>Manage your guests reservations with serVme</p>
                      <div className={`${cx.marketplaceButton}`}>
                        <NavLink to="#">Install</NavLink>
                      </div>
                    </div>
                </Col>
            </Row>
          </div>
        </div>
      </section>

    </>
  );
}
