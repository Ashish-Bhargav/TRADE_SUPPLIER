import React from 'react';
import InvoiceForm from '../../modals/Invoices.js';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import { addInvoiceEntry } from '../../../redux/action.js';

function RenderPurchase({purchase, addInvoiceEntry}){
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
                        </CardText>
                </CardBody>
            </Card>
    );
}

const InvoiceEntry = (props) => {
    
    if(props.purchase != null){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderPurchase purchase={props.purchase}
                                        addInvoiceEntry={props.addInvoiceEntry}
                        />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <InvoiceForm addInvoiceEntry={props.addInvoiceEntry}/>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>

            </div>
        );
    }
}

export default InvoiceEntry;