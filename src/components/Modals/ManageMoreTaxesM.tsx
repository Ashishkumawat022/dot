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
import { AiFillInfoCircle, AiOutlineInfoCircle } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import food from "../../images/edit-images.png";

import { FilterDropdown } from "../Dropdown/Dropdowns";

import {
    choosefilter,daysFilter,filtertagoptions,
    SelectallFilter,timefilter,ordertypefilter
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

{/* Create Tax  */}
{props.modalName === "Create Tax" && (
        <Modal
          scrollable
          className={`${cx.ctsModal}`}
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Tax </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Name {["top"].map((placement) => (
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
                    Name Localized{["top"].map((placement) => (
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
                  Rate(%)*
                  </Form.Label>
                  <Form.Control type="text"/>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                  Applies On 
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
                  <FilterDropdown options={ordertypefilter}/>
                </Form.Group>
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

    {/* Edit Tax  */}
    {props.modalName === "Edit Tax" && (
        <Modal
          scrollable
          className={`${cx.ctsModal}`}
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Tax </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Name {["top"].map((placement) => (
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
                  <Form.Control type="text" placeholder="22"/>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Name Localized{["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>Name Localized</Tooltip>
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
                  <Form.Control type="text" placeholder="2w"/>
                </Form.Group>
              </Col>
             
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                  Rate(%)*
                  </Form.Label>
                  <Form.Control type="text" placeholder="11%"/>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                  Applies On 
                  {["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}> Applies On </Tooltip>
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
                  <FilterDropdown options={ordertypefilter}/>
                </Form.Group>
              </Col>
             
            </Row>
          </Modal.Body>
          <Modal.Footer>
          <div>
              <NavLink to="#" className={`${cx.rightOption} ${cx.rightRed}`}>
                Delete tax
              </NavLink>
            </div>
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
    {/* Create Tax Group  */}


{props.modalName === "Create Tax group" && (
        <Modal
          scrollable
          className={`${cx.ctsModal}`}
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Tax Group </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Name {["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>Name </Tooltip>
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
                    Name Localized{["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>Name Localized</Tooltip>
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
                  Taxes
                  </Form.Label>
                  <FilterDropdown options={choosefilter}/>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                  Reference
                  {["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>Taxes</Tooltip>
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

{/* Edit Tax Group  */}

{props.modalName === "Edit Tax group" && (
        <Modal
          scrollable
          className={`${cx.ctsModal}`}
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Tax Group </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Name {["top"].map((placement) => (
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
                  <Form.Control type="text" placeholder="15 % tax group"/>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                    Name Localized{["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>Name Localized</Tooltip>
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
                  <Form.Control type="text" placeholder="15 % tax group"/>
                </Form.Group>
              </Col>
             
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                  Taxes
                  </Form.Label>
                  <FilterDropdown options={choosefilter}/>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className={`${cx.checkboxlabel}`}>
                  Reference
                  {["top"].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}> Reference</Tooltip>
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
                  <Form.Control type="text" placeholder="15%"/>
                </Form.Group>
              </Col>
             
            </Row>
          </Modal.Body>
          <Modal.Footer>
          <div>
              <NavLink to="#" className={`${cx.rightOption} ${cx.rightRed}`}>
                Delete tax group
              </NavLink>
            </div>
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


{props.modalName ==="remove to branches" && (
         <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Remove to Branches</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Row>
             <Col md={12} lg={12}>
               <Form.Group className={`${cx.formField}`}>
                 {inventoryItems ?
                   <Form.Label className="d-block">
                     Branch
                     
                   {['top'].map((placement) => (
                     <OverlayTrigger key={placement} overlay={
                       <Tooltip id={`tooltip-${placement}`}>
                        Tags
                       </Tooltip>}>
                       <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                     </OverlayTrigger>
                   ))}
                     <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(false) }}>Select branch?</NavLink>
                   </Form.Label> :
                   <Form.Label className="d-block">
                     Branch
                     
                   {['top'].map((placement) => (
                     <OverlayTrigger key={placement} overlay={
                       <Tooltip id={`tooltip-${placement}`}>
                       Branches
                       </Tooltip>}>
                       <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                     </OverlayTrigger>
                   ))}
                     <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(true) }}>Select by tags?</NavLink>
                   </Form.Label>
                 }
                 <FilterDropdown options={filtertagoptions} />
               </Form.Group>
             </Col>
           </Row>
         </Modal.Body>
         <Modal.Footer>
           <div></div>
           <div>
             <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
               Close
             </Button>
             <Button className={`${cx.btnSubmit}`}>
               Apply
             </Button>
           </div>
         </Modal.Footer>
       </Modal>
      )}
  {props.modalName ==="add to branches" && (
      <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add to Branches</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={12} lg={12}>
            <Form.Group className={`${cx.formField}`}>
              {inventoryItems ?
                <Form.Label className="d-block">
                  Branch
                  
                {['top'].map((placement) => (
                  <OverlayTrigger key={placement} overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                     Tags
                    </Tooltip>}>
                    <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                  </OverlayTrigger>
                ))}
                  <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(false) }}>Select branch?</NavLink>
                </Form.Label> :
                <Form.Label className="d-block">
                  Branch
                  
                {['top'].map((placement) => (
                  <OverlayTrigger key={placement} overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                    Branches
                    </Tooltip>}>
                    <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                  </OverlayTrigger>
                ))}
                  <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(true) }}>Select by tags?</NavLink>
                </Form.Label>
              }
              <FilterDropdown options={filtertagoptions} />
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <div></div>
        <div>
          <Button className={`${cx.btnClose}`} onClick={() => { props.handleClose(); setOrderType('') }}>
            Close
          </Button>
          <Button className={`${cx.btnSubmit}`}>
            Apply
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
      )}

{props.modalName ==="remove from product" && (
        <Modal
        className={`${cx.ctsModal}`}
        show={props.show}
        onHide={props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Remove From Product </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                  Product
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}> Product</Tooltip>
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
             <FilterDropdown options={SelectallFilter}/>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer  className= {`${cx.bottomRight}`}>
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
  {props.modalName ==="add to product" && (
        <Modal
          className={`${cx.ctsModal}`}
          show={props.show}
          onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add To Product </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Product
                    {["top"].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}> Product</Tooltip>
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
               <FilterDropdown options={SelectallFilter}/>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer  className= {`${cx.bottomRight}`}>
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

{props.modalName ==="remove to modifers" && (
         <Modal
         className={`${cx.ctsModal}`}
         show={props.show}
         onHide={props.handleClose}
       >
         <Modal.Header closeButton>
           <Modal.Title>Remove From Modifers Options </Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Row>
             <Col md={12} lg={12}>
               <Form.Group className={`${cx.formField}`}>
                 <Form.Label>
                   Option
                   {["top"].map((placement) => (
                     <OverlayTrigger
                       key={placement}
                       overlay={
                         <Tooltip id={`tooltip-${placement}`}> Option</Tooltip>
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
              <FilterDropdown options={SelectallFilter}/>
               </Form.Group>
             </Col>
           </Row>
         </Modal.Body>
         <Modal.Footer  className= {`${cx.bottomRight}`}>
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
  {props.modalName ==="add to modifers" && (
       <Modal
       className={`${cx.ctsModal}`}
       show={props.show}
       onHide={props.handleClose}
     >
       <Modal.Header closeButton>
         <Modal.Title>Add To Modifers Options</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <Row>
           <Col md={12} lg={12}>
             <Form.Group className={`${cx.formField}`}>
               <Form.Label>
                 Option
                 {["top"].map((placement) => (
                   <OverlayTrigger
                     key={placement}
                     overlay={
                       <Tooltip id={`tooltip-${placement}`}> Option</Tooltip>
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
            <FilterDropdown options={SelectallFilter}/>
             </Form.Group>
           </Col>
         </Row>
       </Modal.Body>
       <Modal.Footer  className= {`${cx.bottomRight}`}>
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
