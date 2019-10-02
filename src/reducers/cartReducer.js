export default (state,action) => {
    switch(action.type){
        case "ADD_CART":
            let finalStateAdd = state.Products.map(data=>{
                if(data.productDetails.id === action.payload.ID){
                    return {
                        productDetails:data.productDetails,
                        cartDetails: {
                            quantity: action.payload.quantity,
                            cartAdded: true
                        }
                    }
                } else {
                    return data
                }
            });
            
            return { 
                Products : finalStateAdd,
                Others: state.Others
            };

        case "REMOVE_CART":
                let finalStateRem = state.Products.map(data=>{
                    if(data.productDetails.id === action.payload.ID){
                        return {
                            productDetails:data.productDetails,
                            cartDetails: {
                                
                                quantity: 0,
                                cartAdded: false
                            }
                        }
                    } else {
                        return data
                    }
                });
                
                return { 
                    Products : finalStateRem,
                    Others: state.Others
                };

        case "CHANGE_LOADING_STATUS":
                return {
                Products : state.Products,
                Others: {
                    isLoading: action.payload.isLoading
                    }
                }
        default:
            return state;
    }
}