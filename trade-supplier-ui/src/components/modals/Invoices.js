import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Col, Row} from 'reactstrap';
import {Control, LocalForm} from 'react-redux-form';

export default class InvoiceForm extends Component {
   
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
        this.props.addInvoiceEntry(this.props.purchase.date, this.props.purchaseId,values.invoiceNumber, values.companyContactPerson, values.orderNumber, values.companyName, values.billingAddress, values.vendorName, values.vendorAddress, values.shipAddress, values.shippingTerms, values.specialInstructions, values.subTotal, values.taxPercent, values.other, values.grandTotal);
        console.log(this.props.purchaseId);
        
    }

    render(){
        return(
            <React.Fragment>
                        <Button className='btn-lg mb-4' onClick={this.toggleModal} style={{backgroundColor:'#00872d'}}>
                            Generate Invoice
                        </Button>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                            <div className="modal-comment">
                                <ModalHeader toggle={this.toggleModal}>
                                    Generate Invoice
                                </ModalHeader>
                                <ModalBody >
                                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".invoiceNumber" id="invoiceNumber" name="invoiceNumber"
                                                        placeholder="Invoice Number"
                                                        className="form-control"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".companyContactPerson" id="companyContactPerson" name="companyContactPerson"
                                                        placeholder="Company Contact Person"
                                                        className="form-control"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".orderNumber" id="orderNumber" name="orderNumber"
                                                        defaultValue={this.props.purchase.orderNumber}
                                                        className="form-control"
                                                        readOnly
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".companyName" id="companyName" name="companyName"
                                                        defaultValue={this.props.purchase.companyName}
                                                        readOnly
                                                        className="form-control"
                                                        
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".billingAddress" id="billingAddress" name="billingAddress"
                                                       defaultValue={this.props.purchase.billingAddress}
                                                       readOnly
                                                        className="form-control"
                                                      
                                                />
                                               
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".vendorName" id="vendorName" name="vendorName"
                                                        defaultValue={this.props.purchase.vendorName}
                                                        readOnly
                                                        className="form-control"
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".vendorAddress" id="vendorAddress" name="vendorAddress"
                                                        defaultValue={this.props.purchase.vendorAddress}
                                                        readOnly
                                                        className="form-control"
                                                        
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".shipAddress" id="shipAddress" name="shipAddress"
                                                        defaultValue={this.props.purchase.shipAddress}
                                                        readOnly
                                                        className="form-control"
                                                        
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.textarea model=".shippingTerms" id="shippingTerms" name="shippingTerms"
                                                        defaultValue={this.props.purchase.shippingTerms}
                                                        readOnly
                                                        className="form-control"
                                                        
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.textarea model=".specialInstructions" id="specialInstructions" name="specialInstructions"
                                                        defaultValue={this.props.purchase.specialInstructions}
                                                        readOnly
                                                        className="form-control"
                                                        
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={3}>
                                                <Control.text type='number' model='.taxPercent' id='taxPercent' name='taxPercent'
                                                        defaultValue={this.props.purchase.taxPercent}
                                                        readOnly
                                                        className='form-control'
                                                />
                                            </Col>
                                            <Col md={3}>
                                                <Control.text type='number' model='.other' id='other' name='other'
                                                        defaultValue={this.props.purchase.other}
                                                        readOnly 
                                                        className='form-control'
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".shippedVia" id="shippedVia" name="shippedVia"
                                                        placeholder='Shipped Via'
                                                        className="form-control"
                                                        
                                                />
                                                
                                            </Col>
                                        </Row>
                                        
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Button className="btn-block" color="success"  type="submit">Submit</Button>
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
