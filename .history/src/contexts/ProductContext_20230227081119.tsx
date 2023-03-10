import React from "react"
import { createContext, useReducer, useEffect, useContext } from 'react';
import { childrenProps, ProductContextInterface } from "../types/contextTypes"
import { initialProductInterface } from "../types/reducerTypes"
import { productReducer } from "../reducers/productReducers";
import getData from "../utils/fetchFunc";
import { ProductType } from "../reducers/productReducers";
import { LessonType } from "../reducers/BlogReducer";


const ProductContext = createContext({} as ProductContextInterface)
export const useProductContext = () => useContext(ProductContext)
export const ProductProvider = ({ children }: childrenProps) => {
    const initialState: initialProductInterface = {
        products: [],
        lessonAssets: [],
        product: {},
        isFetching: true,
        rltd: []
    }
    const [state, dispatch] = useReducer(productReducer, initialState)
    const fetchProductData = async () => {
        const data = await getData("products")
        dispatch({ type: ProductType.LOAD_PRODUCTS, payload: data })
    }

    const getSingleProduct = async (slug: number | string | undefined) => {
        const data = await getData("products", slug)
        const rltdData = await getData(`products/${slug}/category`)
        dispatch({ type: ProductType.LOAD_PRODUCT_DETAIL, payload: data, others: rltdData })
    }

    const getLessonAssets = async (slug: string | undefined) => {
        const data = await getData(`lessons/${slug}/assets`)
        dispatch({ type: LessonType.LOAD_LESSON_DETAIL_ASSETS, others: data })
    }

    useEffect(() => {
        fetchProductData()
    }, [])
    return (

        <ProductContext.Provider value={{
            data: state,

            getSingleProduct,
            getLessonAssets,
        }}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductContext