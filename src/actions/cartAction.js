

export const cartAction = (action) => {
    switch(action.type){
        case "addCart":
            return {
                type: "ADD_CART",
                payload: action.payload
            }
        case "removeCart":
            return {
                type: "REMOVE_CART",
                payload: action.payload
            }
        case "changeLoadingStatus":
                return {
                    type: "CHANGE_LOADING_STATUS",
                    payload: action.payload
                }
        default:
            return null;
    }
}