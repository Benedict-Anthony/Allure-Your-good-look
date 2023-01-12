// STATES AND REDUCERS INTERFACES

// PRODUCT INTERFACE AND CART INTERFACE
export interface productInterface {
    id?: number,
    name?:string,
    product_price?: number,
    price?:number,
    slug?: string,
    image_url?: string,
    thumbnail_url?: string
    description?: string,
    product_discount?:number
}

export interface initialProductInterface{
    products: productInterface[],
    lessonAssets:productInterface[]
    product:productInterface
    isFetching: boolean,
    cartQuantity:number,
    rest:any
}

// ACTION FUNCTION INTERFACE
export interface actionInterface{
    type:string,
    payload?:any
    rest?:any
    lessonAssets?:any
}


// LESSON INTERFCACE
export interface lessonInterface {
    id?: number
    title?: string
    description?:string
    image?:string
}

export interface initialLessonInterface {
    lessons: lessonInterface[]
    count: number
    lesson:lessonInterface | any
}

// UTILS INTERFACE

// export const 
