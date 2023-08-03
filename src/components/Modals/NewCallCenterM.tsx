import React, { Fragment, useState } from "react";
import {
  Button,
  Modal,
  Row,
  Col,
  Form,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import cx from "./Modals.module.scss";
import Select from "react-select";
import { FilterDropdown, SingleFilterDropdown } from "../Dropdown/Dropdowns";
import {
  filterordertags,
  tagoptions,
  customertagoptions,
  customertimezone,
  itemoption,
  ingredientsoptions,
  choosefilter,
  discountcallfilter,
} from "../../constants/dropdownconstants";
import { AiFillInfoCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import food from "../../images/edit-images.png";

const Modals = (props: any) => {
  const options = [
    {
      value: "1",
      label: "Pick up",
    },
    {
      value: "2",
      label: "Delivery",
    },
  ];
  const deliveryzone = [
    {
      value: "1",
      label: "Shipping",
    },
    {
      value: "2",
      label: "Ordered",
    },
  ];
  const [ordertype, setOrderType] = useState("");
  const [advanceOptions, setadvanceOptions] = useState(false);
  const [inventoryItems, setinventoryItems] = useState(false);
  const orderTypehandler = (event: any) => {
    setOrderType(event.label);
  };

  let sizeadvanceoptions = advanceOptions ? 6 : 12;

  const [subshow, setsubShow] = useState(false);
  const [submodalName, setsubModalName] = useState("");
  const subdeliveryAddress = (modalname: string, status: boolean) => {
    console.log(modalname, status, "handleShow");
    setsubModalName(modalname);
    setsubShow(status);
  };
  const subhandleClose = () => {
    setsubShow(false);
    setsubModalName("");
  };

  return (
    <>
      {props.modalName === "Customer Insight" && (
        <Modal
          scrollable
          className={`${cx.ctsModal} ${cx.ctsModalSize}`}
          size="lg"
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Customer Insight</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col lg={4}>
                <NavLink to="#" className={`${cx.customerInsightmoreOption}`}>
                  <div className={`${cx.customerInsight}`}>
                    <div>Done order</div>
                    <div>0</div>
                  </div>
                </NavLink>
              </Col>
              <Col lg={4}>
                <NavLink to="#" className={`${cx.customerInsightmoreOption}`}>
                  <div className={`${cx.customerInsight}`}>
                    <div>Total Spent (SAR)</div>
                    <div>0</div>
                  </div>
                </NavLink>
              </Col>
              <Col lg={4}>
                <NavLink to="#" className={`${cx.customerInsightmoreOption}`}>
                  <div className={`${cx.customerInsight}`}>
                    <div>Total Discounts (SAR)</div>
                    <div>0</div>
                  </div>
                </NavLink>
              </Col>
              <Col lg={4}>
                <NavLink to="#" className={`${cx.customerInsightmoreOption}`}>
                  <div className={`${cx.customerInsight}`}>
                    <div>last Order</div>
                    <div>0</div>
                  </div>
                </NavLink>
              </Col>
              <Col lg={4}>
                <NavLink to="#" className={`${cx.customerInsightmoreOption}`}>
                  <div className={`${cx.customerInsight}`}>
                    <div>Favourite Product</div>
                    <div>0</div>
                  </div>
                </NavLink>
              </Col>
              <Col lg={4}>
                <NavLink to="#" className={`${cx.customerInsightmoreOption}`}>
                  <div className={`${cx.customerInsight}`}>
                    <div>Favourite Branch</div>
                    <div>0</div>
                  </div>
                </NavLink>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className={`${cx.bottomRight}`}>
            <div>
              <Button
               className={`${cx.btnClose}`}
                onClick={() => {
                  props.handleClose();
                  setOrderType("");
                }}
              >
                Close{" "}
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}

      {props.modalName === "Sweet Burger With Cheese" && (
        <Modal
          className={`${cx.ctsModal}`}
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sweet Burger With Cheese</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Quantity </Form.Label>
                  <div className={`${cx.formFieldSub}`}>
                    <div className={`${cx.formFieldinput}`}>
                      <Form.Control type="text" />
                    </div>
                    <div className={`${cx.formFieldAdd}`}>
                      <div>-</div>
                      <div>+</div>
                    </div>
                  </div>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Discount</Form.Label>
                  <FilterDropdown options={discountcallfilter} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    style={{ height: "150px" }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button
                className={`${cx.btnClose}`}
                onClick={() => {
                  props.handleClose();
                  setOrderType("");
                }}
              >
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>Apply</Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}

      {props.modalName === "Apply Order Discount" && (
        <Modal
          className={`${cx.ctsModal}`}
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Apply Order Discount</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Discount</Form.Label>
                  <FilterDropdown options={discountcallfilter} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button
                className={`${cx.btnClose}`}
                onClick={() => {
                  props.handleClose();
                  setOrderType("");
                }}
              >
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>Apply</Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}

      {props.modalName === "Apply Order Tags" && (
        <Modal
          className={`${cx.ctsModal}`}
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Apply Order Tags</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Tags</Form.Label>
                  <FilterDropdown options={filterordertags} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button
                className={`${cx.btnClose}`}
                onClick={() => {
                  props.handleClose();
                  setOrderType("");
                }}
              >
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>Apply</Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}

      {props.modalName === "Apply Order Charges" && (
        <Modal
          className={`${cx.ctsModal}`}
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Apply Order Charges </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Charge </Form.Label>
                  <FilterDropdown options={filterordertags} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button
                className={`${cx.btnClose}`}
                onClick={() => {
                  props.handleClose();
                  setOrderType("");
                }}
              >
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>Apply</Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}

      {props.modalName === "Ice Cream Femto" && (
        <Modal
          className={`${cx.ctsModal} ${cx.ctsModalSize}`}
          size="lg"
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Ice Cream Femto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col lg={4}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Quantity </Form.Label>
                  <div className={`${cx.formFieldSub}`}>
                    <div className={`${cx.formFieldinput}`}>
                      <Form.Control type="text" />
                    </div>
                    <div className={`${cx.formFieldAdd}`}>
                      <div>-</div>
                      <div>+</div>
                    </div>
                  </div>
                </Form.Group>
              </Col>
              <Col lg={8}>
                <Row lg={8}>
                  <Form.Label>صوصاتRequired Up To 10</Form.Label>
                  <Col lg={6}>
                    <div className={`${cx.femotopopup}`}>
                      <div className={`${cx.customerInsight}`}>
                        <div>Sause</div>
                        <div>(SAR 10)</div>
                      </div>
                      <div className={`${cx.formFielditem}`}>
                      <div><button className={`${cx.formFieldbtn}`}> -</button></div>
                        <div><button className={`${cx.formFieldbtn}`}>+</button></div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className={`${cx.femotopopup}`}>
                      <div className={`${cx.customerInsight}`}>
                        <div>Sause</div>
                        <div>(SAR 10)</div>
                      </div>
                      <div className={`${cx.formFielditem}`}>
                      <div><button className={`${cx.formFieldbtn}`}> -</button></div>
                        <div><button className={`${cx.formFieldbtn}`}>+</button></div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col lg={4}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Discount</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col lg={8}>
                <Row lg={8}>
                <Form.Label>صوصاتRequired Up To 10</Form.Label>
                  <Col lg={6}>
                    <div className={`${cx.femotopopup}`}>
                      <div className={`${cx.customerInsight}`}>
                        <div>Sause</div>
                        <div>(SAR 10)</div>
                      </div>
                      <div className={`${cx.formFielditem}`}>
                        <div><button className={`${cx.formFieldbtn}`}> -</button></div>
                        <div><button className={`${cx.formFieldbtn}`}>+</button></div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className={`${cx.femotopopup}`}>
                      <div className={`${cx.customerInsight}`}>
                        <div>Sause</div>
                        <div>(SAR 10)</div>
                      </div>
                      <div className={`${cx.formFielditem}`}>
                      <div><button className={`${cx.formFieldbtn}`}> -</button></div>
                        <div><button className={`${cx.formFieldbtn}`}>+</button></div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col lg={4}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    style={{ height: "150px" }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div></div>
            <div>
              <Button
                className={`${cx.btnClose}`}
                onClick={() => {
                  props.handleClose();
                  setOrderType("");
                }}
              >
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>Apply</Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Modals;
