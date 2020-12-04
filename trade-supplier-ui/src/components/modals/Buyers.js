import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Label, Col, Row} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Buyers } from '../../redux/reducer';

 const required = (val) => val && val.length > 0;
 const maxLength = (len) => (val) => !(val) || (val.length<=len);
 const minLength = (len) => (val) => (val) && (val.length>=len);
 const validEmail = (val) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(val);

class BuyersForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
            this.state={
                isModalOpen: false
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
        this.props.inviteNewBuyer(values.companyName,values.companyId, values.companyMail, values.companyMobile, values.companyContactPerson);
        
    }




    render(){
        return(
            <React.Fragment>
                        <Button className='btn-lg' onClick={this.toggleModal} style={{backgroundColor:'#00872d'}}>
                            Invite Buyer
                        </Button>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                            <div className="modal-comment">
                                <ModalHeader toggle={this.toggleModal}>
                                    Invite New Buyer
                                </ModalHeader>
                                <ModalBody >
                                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".companyName" id="companyName" name="companyName"
                                                        placeholder="Company Name"
                                                        className="form-control"
                                                        validators={{
                                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                                        }}
                                                />
                                                <Errors className="text-danger"
                                                        model=".name"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required ',
                                                            minLength: 'must be atleast 3 characters',
                                                            maxLength: 'must be at most 15 characters',
                                                        }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".companyId" id="companyId" name="companyId"
                                                        placeholder="Company ID"
                                                        className="form-control"
                                                        validators={{
                                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                                        }}
                                                />
                                                <Errors className="text-danger"
                                                        model=".name"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required ',
                                                            minLength: 'must be atleast 3 characters',
                                                            maxLength: 'must be at most 15 characters',
                                                        }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".companyMail" id="companyMail" name="companyMail"
                                                        placeholder="Company Mail"
                                                        className="form-control"
                                                        validators={{
                                                            required, minLength: minLength(10), validEmail
                                                        }}
                                                />
                                                <Errors className="text-danger"
                                                        model=".name"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required ',
                                                            minLength: 'must be atleast 10 characters',
                                                            validEmail: 'invalid email format'
                                                        }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".companyMobile" id="companyMobile" name="companyMobile"
                                                        placeholder="Company Mobile"
                                                        className="form-control"
                                                        validators={{
                                                            required, minLength: minLength(10), maxLength: maxLength(15)
                                                        }}
                                                />
                                                <Errors className="text-danger"
                                                        model=".name"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required ',
                                                            minLength: 'must be atleast 10 characters',
                                                            maxLength: 'must be at most 15 characters',
                                                        }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Control.text model=".companyContactPerson" id="companyContactPerson" name="companyContactPerson"
                                                        placeholder="Company Contact Person"
                                                        className="form-control"
                                                        validators={{
                                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                                        }}
                                                />
                                                <Errors className="text-danger"
                                                        model=".name"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required ',
                                                            minLength: 'must be atleast 3 characters',
                                                            maxLength: 'must be at most 15 characters',
                                                        }}
                                                />
                                            </Col>
                                        </Row>
                                        
                                        <Row className="form-group">
                                            <Col md={12}>
                                                <Button className="btn-block" color="success"  type="submit">Invite</Button>
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

export default BuyersForm;