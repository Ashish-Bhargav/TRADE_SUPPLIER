import {createStore, combineReducers} from 'redux';
import {Buyers, Purchases, Invoices} from './reducer';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            buyers: Buyers,
            purchases: Purchases,
            invoices: Invoices
        }),
    );
    return store;
};