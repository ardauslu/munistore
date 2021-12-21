// For Add Item to Cart
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}


// For Delete Item From Cart
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}

export const login = (user) => {
    return {
        type : "LOGIN",
        payload: user
    }
}
export const logout = () => {
    return {
        type : "LOGOUT"
    }
}