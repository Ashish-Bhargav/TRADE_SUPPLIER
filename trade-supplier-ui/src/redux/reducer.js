import * as ActionTypes from './action';
import {BUYERS} from '../components/pages/BuyerInvite/buyers';
import {PURCHASES} from '../components/pages/PurchaseOrderEntry/purchases';
import {INVOICES} from '../components/pages/InvoiceEntry/invoices';
import {INVITE_NEW_BUYER} from './action';
import {ADD_PURCHASE_ORDER} from './action';
import {ADD_INVOICE_ENTRY} from './action';

export const Buyers = (state=BUYERS, action) => {
    switch(action.type) {
        case INVITE_NEW_BUYER:
            var buyer = action.payload;
            buyer.id = state.length;
            return state.concat(buyer);
        default: 
            return state;
    }
}

export const Purchases = (state=PURCHASES, action) => {
    switch(action.type) {
        case ADD_PURCHASE_ORDER:
            var purchaseOrder = action.payload;
            purchaseOrder.id = state.length;
            purchaseOrder.date=new Date().toISOString();
            return state.concat(purchaseOrder)
        default: return state;
    }
}

export const Invoices = (state = INVOICES, action) => {
    switch(action.type){
        default: return state;
    }
}