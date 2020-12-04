import React, { Component } from 'react';
import TopBar from './navigation/TopBar';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addPurchaseOrder, inviteNewBuyer} from '../redux/action';
import BuyerInvite from './pages/BuyerInvite/index';
import PurchaseOrderEntry from './pages/PurchaseOrderEntry/index';
import InvoiceEntry from './pages/InvoiceEntry/index';

const mapStateToProps = state => {
    return {
        buyers: state.buyers,
        purchases: state.purchases,
        invoices: state.invoices
    }
};

const mapDispatchToProps = (dispatch) => ({
    inviteNewBuyer: (companyName, companyId, companyMail, companyMobile, companyContactPerson) => dispatch(inviteNewBuyer(companyName, companyId, companyMail, companyMobile, companyContactPerson)),
    addPurchaseOrder: (orderNumber, companyName, billingAddress,vendorName, vendorAddress, shipAddress, shippingTerms, specialInstructions, itemNumber, itemDescription, quantity, price, subTotal, taxPercent, other, grandTotal) => dispatch(addPurchaseOrder(orderNumber, companyName, billingAddress,vendorName, vendorAddress, shipAddress, shippingTerms, specialInstructions, itemNumber, itemDescription, quantity, price, subTotal, taxPercent, other, grandTotal))
})

class Dashboard extends Component {

    
    render() {
        return (
            <div>
                <TopBar/>
                <Switch>
                    <Route exact path="/buyerInvite" component={()=><BuyerInvite buyers={this.props.buyers} inviteNewBuyer={this.props.inviteNewBuyer}/>}/>
                    <Route exact path="/purchaseOrderEntry" component = {()=><PurchaseOrderEntry purchases={this.props.purchases} addPurchaseOrder={this.props.addPurchaseOrder}/>}/>
                    <Route exact path = "/invoiceEntry" component={()=><InvoiceEntry invoices={this.props.invoices}/>}/>
                    <Redirect to="/buyerInvite" component={Dashboard}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));