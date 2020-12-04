import React, { Component } from 'react'
import PurchaseForm from '../../modals/Purchases.js';
import './styles.css';
import {Button, Form, FormGroup, Label, Input, Col, Row
, Card, CardText, CardBody, CardTitle} from 'reactstrap';
import { addPurchaseOrder } from '../../../redux/action.js';

function RenderPurchaseOrders({purchase, addPurchaseOrder}){
    const subTotal = (purchase.price*purchase.quantity);
    const total = (parseInt(purchase.other)+subTotal);
    const grandTotal = (total + (subTotal*purchase.taxPercent)/100);
    return(
            <Card className='purchase-card mb-3'>
                <CardBody>
                    <CardTitle className='purchase-title' heading><h4>{purchase.companyName}</h4></CardTitle>
                    <CardText>
                        <ul className='purchase-details list-unstyled'>
                            <li>Order Number: {purchase.orderNumber}</li>
                            <li>Date: { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(purchase.date))) }</li>
                            <li>Billing Address: {purchase.billingAddress}</li>
                            <li>Vendor Name: {purchase.vendorName}</li>
                            <li>Vendor Address: {purchase.vendorAddress}</li>
                            <li>Shipping Address: {purchase.shipAddress}</li>
                            <li>Shipping Terms: {purchase.shippingTerms}</li>
                            <li>Special Instructions: {purchase.specialInstructions}</li>
                            <li>Item #: {purchase.itemNumber}</li>
                            <li>Item Description: {purchase.itemDescription}</li>
                            <li>Quantity: {purchase.quantity}</li>
                            <li>Price Per Unit: {purchase.price}</li>
                            <li>Sub Total: {subTotal}</li>
                            <li>Tax Percent: {purchase.taxPercent}</li>
                            <li>Other: {purchase.other}</li>
                            <li>grandTotal: {grandTotal}</li>
                        </ul>
                        <Row>
                            <Col>
                                <span></span>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>
    );
}

class PurchaseOrderEntry extends Component {
    
    render() {
        const purchase = this.props.purchases.map((purchase)=>{
            return(
                <div key = {purchase.id} className='col-12 col-md-6'>
                    <RenderPurchaseOrders purchase = {purchase}
                        addPurchaseOrder={this.props.addPurchaseOrder}
                    />
                </div>
            );
        })
        return (
            <div className='container mt-5 text-left'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Purchases</h3>
                    </div>
                </div>
                <div className='row mt-3'>
                    {purchase}
                </div>
                <div className='row mt-5'>
                    <div className='col-12 col-md-5'>
                        <PurchaseForm addPurchaseOrder={this.props.addPurchaseOrder}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default PurchaseOrderEntry
