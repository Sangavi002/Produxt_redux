export const FETCH_PRODUCT_REQUEST = "product_request";
export const FETCH_PRODUCT_SUCCESS = "product_success"
export const FETCH_PRODUCT_ERROR = "product_error"
export const FETCH_PRODUCT_ASEC = "product_asec"
export const FETCH_PRODUCT_DESC = "product_desc"

export const fetchProductRequest = () => {
    return {type: FETCH_PRODUCT_REQUEST};
}

export const fetchProductSuccess = (data) => {
    return {type: FETCH_PRODUCT_SUCCESS,payload: data};
}

export const fetchProductError = () => {
    return {type: FETCH_PRODUCT_ERROR};
}

export const fetchProductAsec = () => {
    return {type: FETCH_PRODUCT_ASEC};
}

export const fetchProductDesc = () => {
    return {type: FETCH_PRODUCT_DESC};
}

export const fetchProduct = () => async(dispatch) => {
    try{
        dispatch(fetchProductRequest())
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        dispatch(fetchProductSuccess(data))
    }catch{
        console.log("Error fetching products:", error);
        dispatch(fetchProductError())
    }
}