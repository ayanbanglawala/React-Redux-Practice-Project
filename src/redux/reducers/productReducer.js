import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products: [
        {
            id: 1,
            name: "Product 1",
            price: 10.99,
            category: "Product"
        }
    ]
}

export const productReducer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
            break;
        default:
            return state
            break;
    }
}