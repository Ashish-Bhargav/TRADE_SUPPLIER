export const INVITE_NEW_BUYER = 'INVITE_NEW_BUYER';
export const ADD_PURCHASE_ORDER = 'ADD_PURCHASE_ORDER';
export const ADD_INVOICE_ENTRY = 'ADD_INVOICE_ENTRY';
export const BUYERS_LOADING = 'BUYERS_LOADING';
export const ORDERS_LOADING = 'ORDERS_LOADING';
export const INVOICES_LOADING = 'INVOICES_LOADING';
export const INCREASE_PURCHASE_QUANTITY = 'INCREASE_QUANTITY';

export const inviteNewBuyer = (companyName, companyId, companyMail, companyMobile, companyContactPerson) => ({
    type: INVITE_NEW_BUYER,
    payload: {
        companyName: companyName,
        companyId: companyId,
        companyMail: companyMail,
        companyMobile: companyMobile,
        companyContactPerson: companyContactPerson
    }
});

export const addPurchaseOrder = (orderNumber, companyName, billingAddress,vendorName, vendorAddress, shipAddress, shippingTerms, specialInstructions, itemNumber, itemDescription, quantity, price, subTotal, taxPercent, other, grandTotal)=>({
    type: ADD_PURCHASE_ORDER,
    payload: {
        orderNumber: orderNumber,
        companyName: companyName,
        billingAddress: billingAddress,
        vendorName: vendorName,
        vendorAddress: vendorAddress,
        shipAddress: shipAddress, 
        shippingTerms: shippingTerms,
        specialInstructions: specialInstructions,
        itemNumber: itemNumber,
        itemDescription: itemDescription,
        quantity: quantity,
        price: price,
        subTotal: subTotal,
        taxPercent: taxPercent,
        other: other,
        grandTotal: grandTotal
    }
});

// export const increasePurchaseQuantity = (orderNumber, quantity, price, subTotal, taxPercent, other, grandTotal) => ({
//     type: INCREASE_PURCHASE_QUANTITY,
//     payload: {
//         quantity: 
//     }
// });