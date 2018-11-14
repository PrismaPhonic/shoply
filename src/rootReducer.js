import products from './products.json';
import { ADD_PRODUCT, REMOVE_PRODUCT, APPLY_DISCOUNT } from './actionTypes';

function rootReducer(
  state = { items: products.items, cart: [], discount: 1 },
  action
) {
  console.log('reducer ran; state & action:', state, action);

  switch (action.type) {
    //if item is not in cart, add to cart - otherwise increment quantity by +1
    case ADD_PRODUCT:
      let idx = state.cart.findIndex(product => product.id === action.item.id);
      if (idx !== -1) {
        // now we increment item
        let newCart = [...state.cart];
        newCart[idx].quantity++;
        return { ...state, cart: newCart };
      }
      action.item.quantity = 1;
      return { ...state, cart: [...state.cart, action.item] };

    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.id)
      };

    case APPLY_DISCOUNT:
      return {
        ...state,
        discount: action.discount
      };

    default:
      return state;
  }
}

export default rootReducer;
