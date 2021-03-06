export const INVITE_NEW_BUYER = 'INVITE_NEW_BUYER';
export const ADD_PURCHASE_ORDER = 'ADD_PURCHASE_ORDER';
export const ADD_INVOICE_ENTRY = 'ADD_INVOICE_ENTRY';
export const EDIT_BUYER = 'EDIT_BUYER';

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

export const editBuyer = () => ({
    type: EDIT_BUYER,
    payload: {
        
    }
});

export const addPurchaseOrder = (buyerId, orderNumber, companyName, billingAddress,vendorName, vendorAddress, shipAddress, shippingTerms, specialInstructions, itemNumber, itemDescription, quantity, price, subTotal, taxPercent, other, grandTotal)=>({
    type: ADD_PURCHASE_ORDER,
    payload: {
        buyerId: buyerId,
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

export const addInvoiceEntry = (purchaseId, purchaseDate, orderNumber, companyName, billingAddress, vendorName, vendorAddress, shipAddress, shippingTerms, specialInstructions, invoiceNumber, companyContactPerson, subTotal, taxPercent, other, grandTotal, shippedVia) => ({
    type: ADD_INVOICE_ENTRY,
    payload: {
        purchaseId: purchaseId,
        orderNumber: orderNumber,
        purchaseDate: purchaseDate,
        companyName: companyName,
        billingAddress: billingAddress,
        vendorName: vendorName,
        vendorAddress: vendorAddress,
        shipAddress: shipAddress, 
        shippingTerms: shippingTerms,
        specialInstructions: specialInstructions,
        invoiceNumber: invoiceNumber,
        companyContactPerson: companyContactPerson,
        subTotal: subTotal,
        taxPercent: taxPercent,
        other: other,
        grandTotal: grandTotal,
        shippedVia: shippedVia
    }
});