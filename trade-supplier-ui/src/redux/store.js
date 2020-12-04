import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Buyers, Purchases, Invoices} from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

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