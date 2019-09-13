export default (state,action) => {
    switch(action.type){
        case "ADD_CART":
            let finalStateAdd = Object.values(state).map(data=>{
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
            
            return { ...finalStateAdd };

        case "REMOVE_CART":
                let finalStateRem = Object.values(state).map(data=>{
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
                
                return { ...finalStateRem };
        default:
            return state;
    }
}