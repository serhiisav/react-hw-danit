import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const initialState = {
    products: [],
    favoritesList: [],
    cartList: [],
    isOpenedModal: false,
    isLoading: false,
    error: null,
    itemsFavoriteList: [],
    itemsCartList: [],
    isActiveOrderForm: false,
    orderInfo: {},
    totalsOrder: null,
    dataModal: {
        header: 'Modal',
        closeButton: true,
        text: 'Are you sure you want to delete it',
        btnActionOk: 'OK',
        backgroundColor: '#b46c7b',
        btnActionCancel: 'CANCEL',
    }
}
const store = createStore(
    reducer,
    // initialState,
    composeWithDevTools(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;