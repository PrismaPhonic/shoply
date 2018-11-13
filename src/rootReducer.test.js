import rootReducer from './rootReducer';
import products from './products.json';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes';



describe('ADD_PRODUCTswitch case', () => {
  it('adds new item to cart and is pure function', () => {
    let action = {
      type: ADD_PRODUCT, item: {
        "id": 7,
        "name": "banana",
        "price": 599.99,
        "image_url": "https://testimage.com/banana.jpg"
      }
    };
    let state = {
      items: products.items, cart: []
    };

    // run the reducer and make sure our cart has updated with new item
    expect(rootReducer(state, action)).toEqual({ items: state.items, cart: [action.item] });

    // run the reducer and check tthat our input has not mutated
    rootReducer(state, action);
    expect(state.cart.length).toEqual(0);
  })
})

describe('REMOVE switch case', () => {
  it('removes new item to cart and is pure function', () => {

    let addAction = {
      type: ADD_PRODUCT, item: {
        "id": 7,
        "name": "banana",
        "price": 599.99,
        "image_url": "https://testimage.com/banana.jpg"
      }
    };

    let removeAction = {
      type: REMOVE_PRODUCT, id: 7
    };

    let state = {
      items: products.items, cart: []
    };

    // add to cart before we can remove
    rootReducer(state, addAction);

    // run the reducer and make sure our cart has updated with new item
    expect(rootReducer(state, removeAction)).toEqual({ items: state.items, cart: [] });
  })
});