import React, { useCallback, useState } from "react";
// import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./NewCallCenterOrder.module.scss";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import { MdArrowBackIos } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

import Food from "../../images/food-img.svg";

import Modals from "../../components/Modals/NewCallCenterM";

export default function NewCallCenterOrder() {
  
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
      <section className={`${cx.pageWrapper}`}>
        <div className={`${cx.pageTitle}`}>
          <NavLink to="/" className={`${cx.backBtn}`}>
            <MdArrowBackIos className={`${cx.icon}`} /> Back
          </NavLink>
          <div className={`${cx.pageTitleRow}`}>
            <div className={`${cx.rowTitleLeft}`}>
              <div className={`${cx.NewCallLeft}`}>
                <h5>New Call Center Order</h5>
                <div >
                  <button className={`btn `}  onClick={() => {
                  handleShow("Apply Order Charges", true);
                }}> Add Charges </button>
                  <button className={`btn `}  onClick={() => {
                  handleShow("Apply Order Discount", true);
                }}>Add Discount</button>
                  <button className={`btn `}>Add Coupon</button>
                  <button className={`btn `}  onClick={() => {
                  handleShow("Apply Order Tags", true);
                }}>Add Tag</button>
                </div>
              </div>
              <div className={`${cx.rowTitleRight}`}>
                <button className={`btn ${cx.themeBtn}`} 
                onClick={() => {
                  handleShow("Customer Insight", true);
                }}>Customer Insight</button>
              </div>
            </div>
           
            
          </div>
        </div>

        <div className={`${cx.pageWrapperInside}`}>
          <Row>
            <Col lg={3}>
              <Card>
                <Card.Body>
                  <div className={`${cx.newcallcenterLeft}`}>
                    <div className={`${cx.newcallcenterLeftinside}`}>
                      <div>Branch</div>
                      <div>
                        {" "}
                        <NavLink to="#"> Mall 1 </NavLink>{" "}
                      </div>
                    </div>
                    <div className={`${cx.newcallcenterLeftinside}`}>
                      <div>Customer Name </div>
                      <div>
            
                        <NavLink to="#"> Test </NavLink>{" "}
                      </div>
                    </div>
                    <div className={`${cx.newcallcenterLeftinside}`}>
                      <div>Customer Phone </div>
                      <div>
                        {" "}
                        <NavLink to="#"> 056 200 9030 </NavLink>{" "}
                      </div>
                    </div>
                    <div className={`${cx.newcallcenterLeftinside}`}>
                      <div>Customer Tags</div>
                      <div>
                        {" "}
                        <NavLink to="#"> </NavLink>{" "}
                      </div>
                    </div>
                    <div className={`${cx.newcallcenterLeftinside}`}>
                      <div>Order Type </div>
                      <div>
                        {" "}
                        <NavLink to="#"> Pick Up </NavLink>{" "}
                      </div>
                    </div>
                    <div className={`${cx.newcallcenterLeftinside}`}>
                      <div>Due At <AiOutlineInfoCircle/> </div>
                      <div>
                        {" "}
                        <NavLink to="#"> 2022-09-22 17:15 </NavLink>{" "}
                      </div>
                    </div>
                  </div>
                </Card.Body>

                <Card.Body className={`${cx.callcentercardbody}`}>
                  <div className={`${cx.newcallcenterLeft}`}>
                    <div className={`${cx.newcallcenterLeftinside} ${cx.firstBorder}`}>
                      <div> <span>1 </span> Iced Tea Lemon</div>
                      <div> SAR 40 </div>
                    </div>
                    <div className={`${cx.newcallcenterLeftinside}`}>
                      <div>SubTotal</div>
                      <div> SAR 0 </div>
                    </div>
                    <div className={`${cx.newcallcenterLeftinside}`}>
                      <div>Taxes</div>
                      <div> Sar 0 </div>
                    </div>
                    <div className={`${cx.newcallcenterLeftinside} ${cx.topBorder}`}>
                      <div>Total</div>
                      <div> SAR 50 </div>
                    </div>
                  </div>
                </Card.Body>

                <div className={`${cx.callcenterbtnsec}`}>
                  <button className={` ${cx.callbtntheme}`}>Submit Order </button>
                  <button className={` ${cx.callbtn}`}>Save as Draft  </button>
                </div>

                <Card.Body className={`${cx.callcentercardbody}`}>
                  <div className={`${cx.newcallcenterLeft} ${cx.leftPadding}`}>
                    <div className={`mb-3`}>
                      <label>Receipt Notes <AiOutlineInfoCircle/></label>
                      <input type="text" />
                    </div>
                    <div className={`mb-3`}>
                      <label>Kitchen Notes <AiOutlineInfoCircle/></label>
                      <input type="text" />
                    </div>
                    <div className={`mb-3`}>
                      <label>Payment Mode <AiOutlineInfoCircle/></label>
                      <select className={`form-select`} aria-label="Default select example">
                        <option selected></option>
                        <option value="1">One</option>
                      </select>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              
            </Col>

            <Col lg={9}>
              <div>
                <Row>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`} onClick={() => {
                  handleShow("Ice Cream Femto", true);
                }}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className={`${cx.foodItems}`}>
                        <img src={Food} className={`${cx.icon}`} />
                        <div className={`${cx.foodText}`}>
                          <p>Sweet Burger With Cheese</p>
                          <h4>SAR 80</h4>
                        </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      
      <Modals show={show} handleClose={handleClose} modalName={modalName} />

    </>
  );
}
