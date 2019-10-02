import { createStore , applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
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

initialState.Products = initialState;
initialState.Others = {
    isLoading: false
}

const middlewares = [thunk];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

function configureStore(state = initialState){
    console.log(state);
    return createStore(cartReducer,state,enhancer);
}


export default configureStore;