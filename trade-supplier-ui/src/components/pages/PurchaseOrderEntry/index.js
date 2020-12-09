import React, { Component } from 'react'
import PurchaseForm from '../../modals/Purchases.js';
import './styles.css';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPurchaseOrders({buyer, purchases, buyerId, addPurchaseOrder}){
    
    const purchase = purchases.map((pur, index)=>{
        const subTotal = (pur.price*pur.quantity);
        const total = (parseInt(pur.other)+subTotal);
        const grandTotal = (total + (subTotal*pur.taxPercent)/100);
        return(
            <div key={index}>
                <Card className='purchase-card mb-3'>
                    <Link to={`/invoices/${pur.id}`} style={{textDecoration: 'none', color: "black"}}>
                        <CardBody>
                                <CardTitle className='purchase-title' heading><h4>Order Number: {pur.orderNumber}</h4></CardTitle>
                                <CardText>
                                    <ul className='purchase-details list-unstyled'>
                                        <li>Order Number: {pur.orderNumber}</li>
                                        <li>Date: { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(pur.date))) }</li>
                                        <li>Billing Address: {pur.billingAddress}</li>
                                        <li>Vendor Name: {pur.vendorName}</li>
                                        <li>Vendor Address: {pur.vendorAddress}</li>
                                        <li>Shipping Address: {pur.shipAddress}</li>
                                        <li>Shipping Terms: {pur.shippingTerms}</li>
                                        <li>Special Instructions: {pur.specialInstructions}</li>
                                        <li>Item #: {pur.itemNumber}</li>
                                        <li>Item Description: {pur.itemDescription}</li>
                                        <li>Quantity: {pur.quantity}</li>
                                        <li>Price Per Unit: {pur.price}</li>
                                        <li>Sub Total: {subTotal}</li>
                                        <li>Tax Percent: {pur.taxPercent}</li>
                                        <li>Other: {pur.other}</li>
                                        <li>grandTotal: {grandTotal}</li>
                                    </ul>
                                    
                                </CardText>
                        </CardBody>
                    </Link>
                </Card>
            </div>
        );
    });
    return(
        <div>
            <h3>
                {buyer.companyName}
            </h3>
            {purchase}
            <PurchaseForm addPurchaseOrder={addPurchaseOrder} buyerId={buyerId}/>
        </div>
    );
    
}

class PurchaseOrderEntry extends Component {
    
    render() {
        console.log(this.props.purchases);
        
        return (
            <div className='container mt-5 text-left'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Purchases</h3>
                    </div>
                </div>
                
                <div className='row mt-5'>
                    <div className='col-12 col-md-5'>
                        <RenderPurchaseOrders purchases = {this.props.purchases}
                            addPurchaseOrder={this.props.addPurchaseOrder}
                            buyer = {this.props.buyer}
                            buyerId = {this.props.buyer.id}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default PurchaseOrderEntry
