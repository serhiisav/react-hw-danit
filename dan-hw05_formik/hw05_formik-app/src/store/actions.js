import {
    ADD_ALL_ITEMS,
    ADD_ITEMS_FAV_LIST,
    ADD_ITEMS_CART_LIST,
    ADD_ITEMS_FAILURE,
    ADD_ITEMS_STARTED,
    CHANGE_FAV_LIST,
    CHANGE_CART_LIST,
    SET_FAV_LIST,
    SET_CART_LIST,
    REMOVE_CART_LIST,
    SET_IS_ACTIVE_ORDER_FORM,
    SET_ORDER_INFO,
    REMOVE_ITEMS_CART_LIST,
    SET_TOTALS_ORDER

} from './types'

export const addAllItemsSuccess = (items) => {
    return {
        type: ADD_ALL_ITEMS,
        payload: items
    }
}
export const addItemsFavList = (itemsFavoriteList) => {
    return {
        type: ADD_ITEMS_FAV_LIST,
        payload: itemsFavoriteList,
    }
}
export const addItemsCartList = (itemsCartList) => {
    return {
        type: ADD_ITEMS_CART_LIST,
        payload: itemsCartList,
    }
}
export const addItemsFailure = (error) => {
    return {
        type: ADD_ITEMS_FAILURE,
        payload: error
    }
}
export const addItemsStarted = () => {
    return {
        type: ADD_ITEMS_STARTED,
    }
}
export const setFavList = (starList) => {
    return {
        type: SET_FAV_LIST,
        payload: starList,
    }
}
export const setCartList = (cartList) => {
    return {
        type: SET_CART_LIST,
        payload: cartList,
    }
}
export const changeFavListAction = (id) => {
    return {
        type: CHANGE_FAV_LIST,
        payload: id,
    }
}
export const changeCartListAction = (id) => {
    return {
        type: CHANGE_CART_LIST,
        payload: id,
    }
}
export const removeCartList = () => {
    return {
        type: REMOVE_CART_LIST,
    }
}
export const removeItemsCartList = () => {
    return {
        type: REMOVE_ITEMS_CART_LIST,
    }
}
export const setIsActiveOrderForm = (isActive) => {
    return {
        type: SET_IS_ACTIVE_ORDER_FORM,
        payload: { isActive },
    }
}
export const setOrderInfo = (values) => {
    return {
        type: SET_ORDER_INFO,
        payload: { values },
    }
}
export const setTotalsOrder = (orderSum) => {
    return {
        type: SET_TOTALS_ORDER,
        payload: { orderSum },
    }
}