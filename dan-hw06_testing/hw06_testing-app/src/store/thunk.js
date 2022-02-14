import { getItems } from '../api/getItems';
import { addAllItemsSuccess, addItemsFailure, addItemsStarted, changeCartListAction, changeFavListAction } from "./actions"


export const addAllItems = () => (dispatch, getState) => {
    const { products } = getState();
    if (products.length === 0) {
        dispatch(addItemsStarted());
        getItems()
            .then(response => dispatch(addAllItemsSuccess(response.data)))
            .catch(error => dispatch(addItemsFailure(error.message)));
    }
}

export const changeFavoritesList = (id) => (dispatch, getState) => {
    dispatch(changeFavListAction(id));
    const { favoritesList } = getState();
    localStorage.setItem('starList', JSON.stringify(favoritesList));
}

export const changeCartList = (id) => (dispatch, getState) => {
    dispatch(changeCartListAction(id));
    const { cartList } = getState();
    localStorage.setItem('cartList', JSON.stringify(cartList));
}