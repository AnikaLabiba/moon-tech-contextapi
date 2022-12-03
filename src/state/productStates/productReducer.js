import { actiontypes } from "./productActionTypes"

export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart: [],
    wishlist: []
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case actiontypes.FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case actiontypes.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false,
            };
        case actiontypes.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case actiontypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case actiontypes.ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }
        default:
            return state
    }

}