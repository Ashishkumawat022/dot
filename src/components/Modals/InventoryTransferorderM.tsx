import React, { Fragment, useState } from "react";
import { Button, Modal, Row, Col, Form, Tooltip, OverlayTrigger } from 'react-bootstrap';
import cx from './Modals.module.scss';
import Select from 'react-select';
import { FilterDropdown, SingleFilterDropdown } from "../Dropdown/Dropdowns";
import { tagoptions, customertagoptions, customertimezone, itemoption, ingredientsoptions } from '../../constants/dropdownconstants'
import { AiFillInfoCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { NavLink } from "react-router-dom";



const Modals = (props: any) => {
  const options = [
    {
      value: '1', label: 'Pick up',
    },
    {
      value: '2', label: 'Delivery',
    },
  ]
  const deliveryzone = [
    {
      value: '1', label: 'Shipping',
    },
    {
      value: '2', label: 'Ordered',
    },
  ]
  const [ordertype, setOrderType] = useState('')
  const [advanceOptions, setadvanceOptions] = useState(false)
  const [inventoryItems, setinventoryItems] = useState(false)
  const orderTypehandler = (event: any) => {
    setOrderType(event.label)
  }

  let sizeadvanceoptions = advanceOptions ? 6 : 12;


  const [subshow, setsubShow] = useState(false);
  const [submodalName, setsubModalName] = useState('');
  const subdeliveryAddress = (modalname: string, status: boolean) => {
    console.log(modalname, status, "handleShow")
    setsubModalName(modalname)
    setsubShow(status);
  }
  const subhandleClose = () => {
    setsubShow(false);
    setsubModalName('');
  };

  return (
    <>
    
 {/* ############################################################
 ######################## INVENTORY TRANSFER ORDER MODALS ########################### */}


      {/* START New Transfer Order */}
      {
        props.modalName === 'new transfer orders' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Transfer Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Warehouse
                  {['top'].map((placement) => (
                    <OverlayTrigger key={placement} overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        Select the warehouse where items will be sent from.
                      </Tooltip>}>
                      <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
              </Form.Group>
            </Col>
            
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Destination
                  {['top'].map((placement) => (
                    <OverlayTrigger key={placement} overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        Branch or Warehouse where items will be sent to.
                      </Tooltip>}>
                      <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                    </OverlayTrigger>
                  ))}
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
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
      }
      {/* END New Transfer Order */}

      
      {/* START Transfer Order Filter */}
      {
        props.modalName === 'transfer orders filter' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Reference
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
               Business  Date
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Status
                </Form.Label>
                <Form.Select>
                  <option value="1">Any</option>
                  <option value="2">Draft</option>
                  <option value="3">Pending</option>
                  <option value="3">Closed</option>
                </Form.Select>
              </Form.Group>
            </Col>
            
            
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Warehouse
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
              </Form.Group>
            </Col>
            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Supplier
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
              </Form.Group>
            </Col>

            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Destination 
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
              </Form.Group>
            </Col>

            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Creator
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
              </Form.Group>
            </Col>

            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Submitter
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
              </Form.Group>
            </Col>

            <Col md={12} lg={12}>
              <Form.Group className={`${cx.formField}`}>
                <Form.Label>
                Updated After 
                </Form.Label>
                <SingleFilterDropdown options={ingredientsoptions} />
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
      }
      {/* END Transfer Order Filter */}

    </>
  );
};

export default Modals;
