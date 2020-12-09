import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Col, Row} from 'reactstrap';
import {Control, LocalForm} from 'react-redux-form';

 

class PurchaseForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
            this.state={
                isModalOpen: false,
            }
        this.toggleModal=this.toggleModal.bind(this);

    
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal();
        this.props.addPurchaseOrder(this.props.buyerId, values.orderNumber, values.companyName, values.billingAddress, values.vendorName, values.vendorAddress, values.shipAddress, values.shippingTerms, values.specialInstructions, values.itemNumber, values.itemDescription, values.quantity, values.price, values.subTotal, values.taxPercent, values.other, values.grandTotal);
        
    }

    render(){
        return(
            <React.Fragment>
                        <Button className='btn-lg mb-4' onClick={this.toggleModal} style={{backgroundColor:'#00872d'}}>
                            Add Purchase Order
                        </Button>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                            <div className="modal-comment">
                                <ModalHeader toggle={this.toggleModal}>
                                    Add Purchase Order
                                </ModalHeader>
                                <ModalBody >
                                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <   Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".orderNumber" id="orderNumber" name="orderNumber"
                                                        placeholder="Order Number"
                                                        className="form-control"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".companyName" id="companyName" name="companyName"
                                                        placeholder="Company Name"
                                                        className="form-control"
                                                        
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".billingAddress" id="billingAddress" name="billingAddress"
                                                        placeholder="Billing Address"
                                                        className="form-control"
                                                      
                                                />
                                               
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".vendorName" id="vendorName" name="vendorName"
                                                        placeholder="Vendor Name"
                                                        className="form-control"
                                                        
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".vendorAddress" id="vendorAddress" name="vendorAddress"
                                                        placeholder="Vendor Address"
                                                        className="form-control"
                                                        
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".shipAddress" id="shipAddress" name="shipAddress"
                                                        placeholder="Shipping Address"
                                                        className="form-control"
                                                        
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.textarea model=".shippingTerms" id="shippingTerms" name="shippingTerms"
                                                        placeholder="Shipping Terms"
                                                        className="form-control"
                                                        
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.textarea model=".specialInstructions" id="specialInstructions" name="specialInstructions"
                                                        placeholder="Special Instructions"
                                                        className="form-control"
                                                        
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".itemNumber" id="itemNumber" name="itemNumber"
                                                        placeholder="Item #"
                                                        className="form-control"
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.textarea model=".itemDescription" id="itemDescription" name="itemDescription"
                                                        placeholder="Item Description"
                                                        className="form-control"
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={3}>
                                                <Control.text type='number' model=".price" id="price" name="price"
                                                        placeholder="Unit Price"
                                                        className="form-control"
                                                />
                                                
                                            </Col>
                                            <Col md={3}>
                                                <Control.text type='number' model='.quantity' id='quantity' name='quantity'
                                                        placeholder='Quantity' className='form-control'
                                                />
                                            </Col>
                                            <Col md={3}>
                                                <Control.text type='number' model='.taxPercent' id='taxPercent' name='taxPercent'
                                                        placeholder='Tax Percent' className='form-control'
                                                />
                                            </Col>
                                            <Col md={3}>
                                                <Control.text type='number' model='.other' id='other' name='other'
                                                        placeholder='other' className='form-control'
                                                />
                                            </Col>
                                        </Row>
                                        
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Button className="btn-block" color="success"  type="submit">Add Order</Button>
                                            </Col>
                                        </Row>
                                    </LocalForm>
                                </ModalBody>
                            </div>
                            
                        </Modal>
            </React.Fragment>
        );
    }
}

export default PurchaseForm;