import { initialState } from "./store"

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEMS_STARTED': {
            return { ...state, isLoading: true }
        }
        case 'ADD_ALL_ITEMS': {
            return { ...state, products: action.payload, isLoading: false, error: null }
        }
        case 'ADD_ITEMS_FAV_LIST': {
            return { ...state, itemsFavoriteList: action.payload, isLoading: false, error: null }
        }
        case 'ADD_ITEMS_CART_LIST': {
            return { ...state, itemsCartList: action.payload, isLoading: false, error: null }
        }
        case 'ADD_ITEMS_FAILURE': {
            return { ...state, isLoading: false, error: action.payload }
        }
        case 'SET_FAV_LIST': {
            return { ...state, favoritesList: action.payload }
        }
        case 'SET_CART_LIST': {
            return { ...state, cartList: action.payload }
        }
        case 'CHANGE_FAV_LIST': {
            return {
                ...state,
                favoritesList: state.favoritesList.includes(action.payload) ?
                    state.favoritesList.filter(el => el !== action.payload) :
                    [...state.favoritesList, action.payload]
            }
        }
        case 'CHANGE_CART_LIST': {
            return {
                ...state,
                cartList: state.cartList.includes(action.payload) ?
                    state.cartList.filter(el => el !== action.payload) :
                    [...state.cartList, action.payload]
            }
        }
        case 'SET_IS_OPENED_MODAL': {
            return { ...state, isOpenedModal: action.payload }
        }
        case 'SET_DATA_MODAL': {
            return { ...state, dataModal: action.payload }
        }
        default: {
            return state;
        }
    }
}

export default reducer;