import React from 'react';
import InvoiceForm from '../../modals/Invoices.js';
import './styles.css'
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import { addInvoiceEntry } from '../../../redux/action.js';

function RenderInvoice({purchase, addInvoiceEntry, invoice, purchaseId}){
    const subTotal = (purchase.price*purchase.quantity);
    const total = (parseInt(purchase.other)+subTotal);
    const grandTotal = (total + (subTotal*purchase.taxPercent)/100);
    const item = invoice.map((invoice)=>{
        return(
            <Card className='invoice-card mb-3'>
                <CardBody>
                        <CardTitle className='invoice-title' heading><h3>{invoice.companyName}</h3></CardTitle>
                        <CardText>
                            <ul className='invoice-details list-unstyled'>
                                <li>Invoice Number: {invoice.invoiceNumber}</li>
                                <li>Order Number: {invoice.orderNumber}</li>
                                <li>Order Date: {purchase.date}</li>
                                <li>Date: { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(purchase.date))) }</li>
                                <li>Billing Address: {invoice.billingAddress}</li>
                                <li>Vendor Name: {invoice.vendorName}</li>
                                <li>Vendor Address: {invoice.vendorAddress}</li>
                                <li>Shipping Address: {invoice.shipAddress}</li>
                                <li>Shipping Terms: {invoice.shippingTerms}</li>
                                <li>Special Instructions: {invoice.specialInstructions}</li>
                                <li>Sub Total: {subTotal}</li>
                                <li>Tax Percent: {invoice.taxPercent}</li>
                                <li>Other: {invoice.other}</li>
                                <li>grandTotal: {grandTotal}</li>
                            </ul>
                        </CardText>
                </CardBody>
            </Card>
        );
    });
    return(
        <div className='container'>
            <div className='row'>
                <h2>Invoice</h2>
            </div>
            <div className='row'>
                    {item}
                    <InvoiceForm addInvoiceEntry={addInvoiceEntry}
                        purchase = {purchase}
                        purchaseId = {purchaseId}
                    />
            </div>
        </div>
    );
}

const InvoiceEntry = (props) => {
    
    if(props.purchase != null){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderInvoice purchase={props.purchase}
                                        addInvoiceEntry={props.addInvoiceEntry}
                                        invoice={props.invoice}
                                        purchaseId={props.purchase.id}
                        />
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