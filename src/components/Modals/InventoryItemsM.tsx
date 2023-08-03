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
 ######################## INVENTORY ITEMS MODALS ########################### */}

      {/* START create item */} 
      {
        props.modalName === 'create item' &&
        <Modal scrollable className={`${cx.ctsModal} ${advanceOptions ? cx.ctsModalSize : ''}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Name
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The name of the address.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Name Localized
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Enter the localized name in a 2nd language of your choice.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Row>

                  <Col md={7} lg={7}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Label>
                        SKU
                        {['top'].map((placement) => (
                          <OverlayTrigger key={placement} overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              Stock keeping unit, a unique code for your item.
                            </Tooltip>}>
                            <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                          </OverlayTrigger>
                        ))}
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>

                  <Col md={5} lg={5}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Label className={`${cx.labelHide}`}>
                        .
                      </Form.Label>
                      <button type="button" className="form-control">Generate SKU</button>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Category
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          You can add an item to a category, like vegetables.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <SingleFilterDropdown options={itemoption} />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Storage Unit
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          How this item is stored, example: Box or KG.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Ingredient Unit
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          How this item is used in your products ingredients, example: GRAM or ML.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Storage To Ingredient
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The conversion factor between storage unit and ingredient unit, example: 1000.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>


              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Costing Method
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          If you donʼt have a fixed cost for this item it will be calculated from purchase transactions.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Fixed</option>
                    <option value="1">From Transition</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {advanceOptions && <Fragment>
                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Barcode
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            Unique barcode to identify with barcode scanners.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Fragment>}

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Cost
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Fixed cost per storage unit.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>


              {advanceOptions && <Fragment>
                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Minimum Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The minimum level allowed in the branch or warehouse.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>

                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Par Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The Initial quantity when you create a purchase order or transfer order.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>


                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Maximum Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The maximum level allowed in the branch or warehouse.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
              </Fragment>}


            </Row>
          </Modal.Body>
          <Modal.Footer>
            {advanceOptions ? <div><NavLink to="#" className={`${cx.rightOption}`} onClick={() => { setadvanceOptions(false) }}>Basic Options</NavLink></div> : <div><NavLink to="#" className={`${cx.rightOption}`} onClick={() => { setadvanceOptions(true) }}>Advanced Options</NavLink></div>}
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
      {/* END create item */}


      {/* START edit item */} 
      {
        props.modalName === 'edit item' &&
        <Modal scrollable className={`${cx.ctsModal} ${advanceOptions ? cx.ctsModalSize : ''}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Name
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The name of the address.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Name Localized
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Enter the localized name in a 2nd language of your choice.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Row>

                  <Col md={7} lg={7}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Label>
                        SKU
                        {['top'].map((placement) => (
                          <OverlayTrigger key={placement} overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              Stock keeping unit, a unique code for your item.
                            </Tooltip>}>
                            <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                          </OverlayTrigger>
                        ))}
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>

                  <Col md={5} lg={5}>
                    <Form.Group className={`${cx.formField}`}>
                      <Form.Label className={`${cx.labelHide}`}>
                        .
                      </Form.Label>
                      <button type="button" className="form-control">Generate SKU</button>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Category
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          You can add an item to a category, like vegetables.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <SingleFilterDropdown options={itemoption} />
                </Form.Group>
              </Col>
              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Storage Unit
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          How this item is stored, example: Box or KG.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Ingredient Unit
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          How this item is used in your products ingredients, example: GRAM or ML.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Storage To Ingredient
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The conversion factor between storage unit and ingredient unit, example: 1000.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>


              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Costing Method
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          If you donʼt have a fixed cost for this item it will be calculated from purchase transactions.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Fixed</option>
                    <option value="1">From Transition</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {advanceOptions && <Fragment>
                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Barcode
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            Unique barcode to identify with barcode scanners.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Fragment>}

              <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Cost
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Fixed cost per storage unit.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>


              {advanceOptions && <Fragment>
                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Minimum Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The minimum level allowed in the branch or warehouse.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>

                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Par Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The Initial quantity when you create a purchase order or transfer order.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>


                <Col md={sizeadvanceoptions} lg={sizeadvanceoptions}>
                  <Form.Group className={`${cx.formField}`}>
                    <Form.Label>
                      Maximum Level
                      {['top'].map((placement) => (
                        <OverlayTrigger key={placement} overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            The maximum level allowed in the branch or warehouse.
                          </Tooltip>}>
                          <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                        </OverlayTrigger>
                      ))}
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
              </Fragment>}


            </Row>
          </Modal.Body>
          <Modal.Footer>
            {advanceOptions ? <div><NavLink to="#" className={`${cx.rightOption}`} onClick={() => { setadvanceOptions(false) }}>Basic Options</NavLink></div> : <div><NavLink to="#" className={`${cx.rightOption}`} onClick={() => { setadvanceOptions(true) }}>Advanced Options</NavLink></div>}
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
      {/* END edit item */}



      {/* START Items Filter */}
      {
        props.modalName === 'item filter' &&
        <Modal scrollable className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>SKU</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Barcode</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Tag</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Category</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Supplier</Form.Label>
                  <FilterDropdown options={customertagoptions} />
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Costing Method
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Fixed</option>
                    <option value="1">From Transition</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Stock Product
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Yes</option>
                    <option value="1">No</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Deleted
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Yes</option>
                    <option value="1">No</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>Updated After</Form.Label>
                  <Form.Control type="date" />
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
      {/* END Items Filter */}


      {/* START items add tags */}
      {
        props.modalName === 'items add tags' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Tags</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Tags
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select the needed tags.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <FilterDropdown options={tagoptions} />
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
      {/* END items add tags */}


      {/* START item suppliers */}
      {
        props.modalName === 'item suppliers' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Suppliers</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label className="d-block">
                    Suppliers
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select the needed suppliers.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <FilterDropdown options={ingredientsoptions} />
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
      {/* END item suppliers */}

      {/* START item ingredients */}
      {
        props.modalName === 'item ingredients' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Items</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  {inventoryItems ? <Form.Label className="d-block">
                    Items by Tags
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select a tag contains the Items.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}

                    <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(false) }}>Select Items?</NavLink>
                  </Form.Label> : <Form.Label className="d-block">
                    Items
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select the Items.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                    <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(true) }}>Select by tags?</NavLink>
                  </Form.Label>
                  }

                  <FilterDropdown options={ingredientsoptions} />
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
      {/* END item ingredients */}



      {/* START item branches */}
      {
        props.modalName === 'item branches' &&
        <Modal className={`${cx.ctsModal}`} show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Select Branches</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  {inventoryItems ? <Form.Label className="d-block">
                    Branches
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select the needed branches.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}

                    <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(false) }}>Select by Tags?</NavLink>
                  </Form.Label> : <Form.Label className="d-block">
                    Tags
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          To select a tag that contains branches.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                    <NavLink className={`${cx.rightLabel}`} to="#" onClick={() => { setinventoryItems(true) }}>Select by branches ?</NavLink>
                  </Form.Label>
                  }
                  <FilterDropdown options={ingredientsoptions} />
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Minimum Level (kg)
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The minimum level allowed in the selected branch or warehouse.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Par Level (kg)
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The Initial quantity when you create a purchase order or transfer order.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>

              <Col md={12} lg={12}>
                <Form.Group className={`${cx.formField}`}>
                  <Form.Label>
                    Maximum Level (kg)
                    {['top'].map((placement) => (
                      <OverlayTrigger key={placement} overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          The maximum level allowed in the selected branch or warehouse.
                        </Tooltip>}>
                        <span className={`${cx.tooltips} ms-2`} style={{ top: '1px' }}><AiOutlineInfoCircle /></span>
                      </OverlayTrigger>
                    ))}
                  </Form.Label>
                  <Form.Control type="number" />
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
      {/* END item branches */}


    </>
  );
};

export default Modals;
