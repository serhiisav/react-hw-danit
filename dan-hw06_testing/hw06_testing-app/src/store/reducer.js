
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
        case 'REMOVE_ITEMS_CART_LIST': {
            return { ...state, itemsCartList: [] }
        }
        case 'REMOVE_CART_LIST': {
            return { ...state, cartList: [] }
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
        case 'SET_IS_ACTIVE_ORDER_FORM': {
            return { ...state, isActiveOrderForm: action.payload.isActive }
        }
        case 'SET_ORDER_INFO': {
            return { ...state, orderInfo: { ...action.payload.values, totalSum: state.totalsOrder, orderList: state.itemsCartList } }
        }
        case 'SET_TOTALS_ORDER': {
            return { ...state, totalsOrder: action.payload.orderSum }
        }
        default: {
            return state;
        }
    }
}

export default reducer;