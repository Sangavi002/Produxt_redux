import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR,FETCH_PRODUCT_ASEC,FETCH_PRODUCT_DESC } from "./action";

export const productReducer = (state = { isLoading: false, isError: false, product: [] }, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                product: action.payload, 
            };
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case FETCH_PRODUCT_ASEC: 
            return{
                ...state,
                product: state.product.slice().sort((a, b) => a.price - b.price),
            };
        case FETCH_PRODUCT_DESC:
            return{
                ...state,
                product: state.product.slice().sort((a,b) => b.price - a.price), 
            }
        default:
            return state;
    }
};
