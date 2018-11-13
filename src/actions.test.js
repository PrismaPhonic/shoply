import products from './products.json';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes';
import { addProduct, removeProduct } from './actions';



describe('ADD_PRODUCTaction creator', () => {
  it('returns an action object', () => {
    let item: {
      "id": 7,
      "name": "banana",
      "price": 599.99,
      "image_url": "https://testimage.com/banana.jpg"
    }

    // run action creator and make sure they return the right action object
    expect(addProduct(item)).toEqual({ type: ADD_PRODUCT, item });
  })
})

describe('REMOVE action creator', () => {
  it('return an action object', () => {

    let id = 7

    // run action creator and make sure they return the right action object
    expect(removeProduct(id)).toEqual({ type: REMOVE_PRODUCT, id });
  })
});