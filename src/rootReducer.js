import products from './products.json';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes';

function rootReducer(state = { items: products.items, cart: [] }, action) {
  console.log("reducer ran; state & action:", state, action);

  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, cart: [...state.cart, action.item] };

    case REMOVE_PRODUCT:
      return { ...state, cart: state.cart.filter(item => item.id !== action.id) };

    default:
      return state;
  }
}

export default rootReducer