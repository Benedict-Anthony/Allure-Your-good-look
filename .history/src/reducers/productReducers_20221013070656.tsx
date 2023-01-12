import { actionInterface, initialProductInterface } from "../types/reducerTypes";
export const ProductType = {
    LOAD_PRODUCTS: "LOAD_PRODUCTS",
    LOAD_PRODUCT_DETAIL:"LOAD_PRODUCT_DATAIL"
}
export const productReducer = (state:initialProductInterface, action:actionInterface) => {
    switch (action.type) {
        case ProductType.LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                isFetching:false,   
            }
        case ProductType.LOAD_PRODUCT_DETAIL:
            return {
                ...state,
                product: action.payload,
                rest:action.rest
            }
            
        default:
            return state
    }
}