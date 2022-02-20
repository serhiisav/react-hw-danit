import reducer from "./reducer";


describe('Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
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
        });
    });

    it('should handle action "CHANGE_CART_LIST"', () => {
        const initialState = {
            cartList: [2, 4, 6],
        }
        expect(reducer(initialState, { type: 'CHANGE_CART_LIST', payload: 2 })).toEqual({ cartList: [4, 6] });
        expect(reducer(initialState, { type: 'CHANGE_CART_LIST', payload: 3 })).toEqual({ cartList: [2, 4, 6, 3] });
    });

    it('should handle action "CHANGE_FAV_LIST"', () => {
        const initialState = {
            favoritesList: [1, 2],
        }
        expect(reducer(initialState, { type: 'CHANGE_FAV_LIST', payload: 2 })).toEqual({ favoritesList: [1] });
        expect(reducer(initialState, { type: 'CHANGE_FAV_LIST', payload: 3 })).toEqual({ favoritesList: [1, 2, 3] });
    });

    it('should handle action "ADD_ITEMS_STARTED"', () => {
        const initialState = {
            isLoading: false,
        }
        expect(reducer(initialState, { type: 'ADD_ITEMS_STARTED' })).toEqual({ isLoading: true })
    });

    it('should handle action "ADD_ALL_ITEMS"', () => {
        const initialState = {
            products: [],
            isLoading: true,
            error: null,
        }
        expect(reducer(initialState, { type: 'ADD_ALL_ITEMS', payload: [{ title: 'item1', price: 200 }, { title: 'item2', price: 2300 }] })).toEqual({
            products: [
                { title: 'item1', price: 200 },
                { title: 'item2', price: 2300 }
            ],
            isLoading: false,
            error: null,
        })
    })
})