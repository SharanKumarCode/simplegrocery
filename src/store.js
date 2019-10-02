import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import dataArr from './data/data';

let initialState = [];

dataArr.map(data=>{
    return initialState.push({
        productDetails: {
            category: data.category,
            productName: data.productName,
            productImg: data.image,
            price: data.price,
            productColor: data.color,
            id: data.id
        },
        cartDetails: {
            quantity: 0,
            cartAdded: false
        }

    })
})

function configureStore(state = initialState){
    return createStore(cartReducer,state,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default configureStore;