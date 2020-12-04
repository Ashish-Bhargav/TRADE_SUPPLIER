import * as ActionTypes from './action';
import {BUYERS} from '../shared//buyers';
import {PURCHASES} from '../shared//purchases';
import {INVOICES} from '../shared//invoices';
// import {INVITE_NEW_BUYER} from './action';
// import {ADD_PURCHASE_ORDER} from './action';
// import {ADD_INVOICE_ENTRY} from './action';

export const Buyers = (state=BUYERS, action) => {
    switch(action.type) {
        case ActionTypes.INVITE_NEW_BUYER:
            var buyer = action.payload;
            buyer.id = state.length;
            return state.concat(buyer);
        default: 
            return state;
    }
}

export const Purchases = (state=PURCHASES, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PURCHASE_ORDER:
            var purchaseOrder = action.payload;
            purchaseOrder.id = state.length;
            purchaseOrder.date=new Date().toISOString();
            return state.concat(purchaseOrder)
        default: return state;
    }
}

export const Invoices = (state = INVOICES, action) => {
    switch(action.type){
        case ActionTypes.ADD_INVOICE_ENTRY:
            var invoiceEntry = action.payload
            invoiceEntry.id = state.length
            invoiceEntry.date = new Date().toISOString();
            return state.concat(invoiceEntry);
        default: 
            return state;
    }
}