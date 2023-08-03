import React, { Fragment, useState } from "react";

import st from "../../style.module.scss";
import {
  Button,
  Modal,
  Row,
  Col,
  Form,
  Tooltip,
  Card,
  OverlayTrigger,
} from "react-bootstrap";
import cx from "./Modals.module.scss";
import { AiFillInfoCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import food from "../../images/edit-images.png";

import { FilterDropdown } from "../Dropdown/Dropdowns";

import {
  choosefilter,
  filtertagoptions,
  SelectallFilter,
  timefilter,
  amountFilter,
  ordertypefilter,
  yesnofilter,
  taxFilter,
  filterinventory,
} from "../../constants/dropdownconstants";

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
      {props.modalName === "Create charges" && (
        <Modal
          scrollable
          className={`${cx.ctsModal}`}
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Charges </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Name
                    {["top"].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}>Name</Tooltip>
                        }
                      >
                        <span
                          className={`${cx.tooltips} ms-2`}
                          style={{ top: "1px" }}
                        >
                          <AiOutlineInfoCircle />
                        </span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Name Localized
                    {["top"].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}> Name Localized</Tooltip>
                        }
                      >
                        <span
                          className={`${cx.tooltips} ms-2`}
                          style={{ top: "1px" }}
                        >
                          <AiOutlineInfoCircle />
                        </span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Type
                    {["top"].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}>Type</Tooltip>
                        }
                      >
                        <span
                          className={`${cx.tooltips} ms-2`}
                          style={{ top: "1px" }}
                        >
                          <AiOutlineInfoCircle />
                        </span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <FilterDropdown options={SelectallFilter} />
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Is Open Value
                    {["top"].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}>Is Open Value
                          </Tooltip>
                        }
                      >
                        <span
                          className={`${cx.tooltips} ms-2`}
                          style={{ top: "1px" }}
                        >
                          <AiOutlineInfoCircle />
                        </span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <FilterDropdown options={yesnofilter} />
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Value (SAR)
                    {["top"].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}> Value (SAR)</Tooltip>
                        }
                      >
                        <span
                          className={`${cx.tooltips} ms-2`}
                          style={{ top: "1px" }}
                        >
                          <AiOutlineInfoCircle />
                        </span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text"/>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Applies on Order Types
                    {["top"].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}>Applies on Order Types</Tooltip>
                        }
                      >
                        <span
                          className={`${cx.tooltips} ms-2`}
                          style={{ top: "1px" }}
                        >
                          <AiOutlineInfoCircle />
                        </span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <FilterDropdown options={ordertypefilter} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Tax Group
                    {["top"].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}>Tax Group</Tooltip>
                        }
                      >
                        <span
                          className={`${cx.tooltips} ms-2`}
                          style={{ top: "1px" }}
                        >
                          <AiOutlineInfoCircle />
                        </span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <FilterDropdown options={taxFilter} />
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    <input type="radio"  name ="branch"  className={`${cx.radioinput}`} />{" "}
                    Automatically apply on all existing and new branches
                  </Form.Label>
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel} `}>
                    <input type="radio" name ="branch"  className={`${cx.radioinput}`} />
                    Branch
                  </Form.Label>
                  <FilterDropdown options={filterinventory} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Label className={`${cx.checkboxlabel}`}>
                  <input type="checkbox" className={`${cx.checkboxinput}`} />
                  Auto Apply Charge on Orders
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      overlay={<Tooltip id={`tooltip-${placement}`}></Tooltip>}
                    >
                      <span
                        className={`${cx.tooltips} ms-2`}
                        style={{ top: "1px" }}
                      >
                        <AiOutlineInfoCircle />
                      </span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
              </Col>
              <Col md={12} lg={12}>
                <Form.Label className={`${cx.checkboxlabel}`}>
                  <input type="checkbox" className={`${cx.checkboxinput}`} />
                  Apply the charges to the order subtotal

                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      overlay={<Tooltip id={`tooltip-${placement}`}>Apply the charges to the order subtotal
                      </Tooltip>}
                    >
                      <span
                        className={`${cx.tooltips} ms-2`}
                        style={{ top: "1px" }}
                      >
                        <AiOutlineInfoCircle />
                      </span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
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
                Close
              </Button>
              <Button className={`${cx.btnSubmit}`}>Save</Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}

      {props.modalName === "Edit charges" && (
        <Modal
        scrollable
        className={`${cx.ctsModal}`}
        show={props.show}
        onHide={props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Charges </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label className={`${cx.checkboxlabel}`}>
                  Name
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}></Tooltip>
                      }
                    >
                      <span
                        className={`${cx.tooltips} ms-2`}
                        style={{ top: "1px" }}
                      >
                        <AiOutlineInfoCircle />
                      </span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
                <Form.Control type="text" placeholder="jkbkb" />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label className={`${cx.checkboxlabel}`}>
                  Name Localized
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}></Tooltip>
                      }
                    >
                      <span
                        className={`${cx.tooltips} ms-2`}
                        style={{ top: "1px" }}
                      >
                        <AiOutlineInfoCircle />
                      </span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
                <Form.Control type="text" placeholder="jkbkb"/>
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label className={`${cx.checkboxlabel}`}>
                  Type
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}></Tooltip>
                      }
                    >
                      <span
                        className={`${cx.tooltips} ms-2`}
                        style={{ top: "1px" }}
                      >
                        <AiOutlineInfoCircle />
                      </span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
                <FilterDropdown options={amountFilter} />
              </Form.Group>
            </Col>

            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label className={`${cx.checkboxlabel}`}>
                  Is Open Value{" "}
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}></Tooltip>
                      }
                    >
                      <span
                        className={`${cx.tooltips} ms-2`}
                        style={{ top: "1px" }}
                      >
                        <AiOutlineInfoCircle />
                      </span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
                <FilterDropdown options={yesnofilter} />
              </Form.Group>
            </Col>

            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label className={`${cx.checkboxlabel}`}>
                  Value (SAR)
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}></Tooltip>
                      }
                    >
                      <span
                        className={`${cx.tooltips} ms-2`}
                        style={{ top: "1px" }}
                      >
                        <AiOutlineInfoCircle />
                      </span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label className={`${cx.checkboxlabel}`}>
                  Applies on Order Types
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}></Tooltip>
                      }
                    >
                      <span
                        className={`${cx.tooltips} ms-2`}
                        style={{ top: "1px" }}
                      >
                        <AiOutlineInfoCircle />
                      </span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
                <FilterDropdown options={ordertypefilter} />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label className={`${cx.checkboxlabel}`}>
                  Tax Group
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}></Tooltip>
                      }
                    >
                      <span
                        className={`${cx.tooltips} ms-2`}
                        style={{ top: "1px" }}
                      >
                        <AiOutlineInfoCircle />
                      </span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
                <FilterDropdown options={taxFilter} />
              </Form.Group>
            </Col>

            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label className={`${cx.checkboxlabel}`}>
                  <input type="radio" name ="branch" className={`${cx.radioinput}`} />{" "}
                  Automatically apply on all existing and new branches
                </Form.Label>
              </Form.Group>
            </Col>

            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label className={`${cx.checkboxlabel} `}>
                  <input type="radio" name ="branch" className={`${cx.radioinput}`} />
                  Branch
                </Form.Label>
                <FilterDropdown options={filterinventory} />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Label className={`${cx.checkboxlabel}`}>
                <input type="checkbox" className={`${cx.checkboxinput}`} />
                Auto Apply Charge on Orders
                {["top"].map((placement) => (
                  <OverlayTrigger
                    key={placement}
                    overlay={<Tooltip id={`tooltip-${placement}`}></Tooltip>}
                  >
                    <span
                      className={`${cx.tooltips} ms-2`}
                      style={{ top: "1px" }}
                    >
                      <AiOutlineInfoCircle />
                    </span>
                  </OverlayTrigger>
                ))}
              </Form.Label>
            </Col>
            <Col md={12} lg={12}>
                <Form.Label className={`${cx.checkboxlabel}`}>
                  <input type="checkbox" className={`${cx.checkboxinput}`} />
                  Apply the charges to the order subtotal

                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      overlay={<Tooltip id={`tooltip-${placement}`}>Apply the charges to the order subtotal
                      </Tooltip>}
                    >
                      <span
                        className={`${cx.tooltips} ms-2`}
                        style={{ top: "1px" }}
                      >
                        <AiOutlineInfoCircle />
                      </span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
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
              Close
            </Button>
            <Button className={`${cx.btnSubmit}`}>Save</Button>
          </div>
        </Modal.Footer>
      </Modal>
      )}
    </>
  );
};

export default Modals;
