import React,{Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import './styles.css';


class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);

    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event){
        this.toggleModal();
        alert('username: ' + this.username.value + " password: " + this.password.value +
            ' remember: ' + this.remember.checked
        );
        event.preventDefault();
        
    }
    render(){
        return(
            <React.Fragment>
                <Navbar className='top-nav' dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/buyerInvite">
                                        <span className="fa fa-home fa-sm"></span>Invite Buyers
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/purchaseOrderEntry">
                                        <span className="fa fa-info fa-sm"></span>Purchases
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/invoiceEntry">
                                        <span className="fa fa-list fa-sm"></span>Invoices
                                    </NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-sm"></span>Contact Us
                                    </NavLink>
                                </NavItem> */}
                            </Nav>
                            {/* <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline className="btn btn-outline-success" onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg">Login</span>
                                    </Button>
                                </NavItem>
                            </Nav> */}
                        </Collapse>
                        
                    </div>
                </Navbar>
                
                {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} 
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} 
                                    />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" value="submit" className=" mt-2 btn-block btn-success">
                                    Login
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal> */}
            </React.Fragment>
        );
    }
}
export default Header;