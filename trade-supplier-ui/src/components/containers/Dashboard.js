import React, { Component } from 'react';
import TopBar from '../navigation/TopBar';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addPurchaseOrder, inviteNewBuyer, addInvoiceEntry} from '../../redux/action.js';
import BuyerInvite from '../pages/BuyerInvite/index';
import PurchaseOrderEntry from '../pages/PurchaseOrderEntry/index';
import InvoiceEntry from '../pages/InvoiceEntry/index';

const mapStateToProps = state => {
    return ({
        buyers: state.buyers,
        purchases: state.purchases,
        invoices: state.invoices
        
    });
    
};

const mapDispatchToProps = (dispatch) => ({
    inviteNewBuyer: (companyName, companyId, companyMail, companyMobile, companyContactPerson) => dispatch(inviteNewBuyer(companyName, companyId, companyMail, companyMobile, companyContactPerson)),
    addPurchaseOrder: (buyerId, orderNumber, companyName, billingAddress,vendorName, vendorAddress, shipAddress, shippingTerms, specialInstructions, itemNumber, itemDescription, quantity, price, subTotal, taxPercent, other, grandTotal) => dispatch(addPurchaseOrder(buyerId, orderNumber, companyName, billingAddress,vendorName, vendorAddress, shipAddress, shippingTerms, specialInstructions, itemNumber, itemDescription, quantity, price, subTotal, taxPercent, other, grandTotal)),
    addInvoiceEntry: (purchaseDate, purchaseId, invoiceNumber, companyContactPerson, orderNumber, companyName, billingAddress,vendorName, vendorAddress, shipAddress, shippingTerms, specialInstructions, subTotal, taxPercent, other, grandTotal)=>dispatch(addInvoiceEntry(purchaseDate, purchaseId, invoiceNumber, companyContactPerson, orderNumber, companyName, billingAddress,vendorName, vendorAddress, shipAddress, shippingTerms, specialInstructions, subTotal, taxPercent, other, grandTotal))
})



class Dashboard extends Component {
  

    render() {
        console.log(this.props.purchases);
        const InvoiceWithId = ({match}) => {
            return (
                <InvoiceEntry 
                    //later, pass buyer info from purchases
                    purchase={this.props.purchases.filter((purchase)=>purchase.id===parseInt(match.params.purchaseId,10))[0]}
                    addInvoiceEntry = {this.props.addInvoiceEntry}
                    invoice = {this.props.invoices.filter((invoice)=>invoice.id===parseInt(match.params.purchaseId,10))}
                    // buyer = {this.props.buyers.filter((buyer)=>buyer.id===parseInt(match.params.buyerId))}
                />
            );
        };
        const PurchaseWithId = ({match}) => {
            return (
                <PurchaseOrderEntry 
                    buyer={this.props.buyers.filter((buyer)=>buyer.id===parseInt(match.params.buyerId,10))[0]}
                    purchases={this.props.purchases.filter((purchase)=>purchase.buyerId===parseInt(match.params.buyerId,10))}
                    addPurchaseOrder={this.props.addPurchaseOrder}
                />
            );
        };
        return (
            <div>
                <TopBar/>
                <Switch>
                    <Route exact path="/buyer-invite" component={()=><BuyerInvite buyers={this.props.buyers} inviteNewBuyer={this.props.inviteNewBuyer}/>}/>
                    <Route path="/purchases/:buyerId" component = {PurchaseWithId}/>
                    <Route path = "/invoices/:purchaseId" component={InvoiceWithId}/>
                    <Redirect to="/buyer-invite" component={Dashboard}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));