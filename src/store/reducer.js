import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR } from "./action";

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
        default:
            return state;
    }
};
