import { ADD_PRODUCT, REMOVE_PRODUCT, APPLY_DISCOUNT } from './actionTypes';

export function addProduct(item) {
  return { type: ADD_PRODUCT, item };
}

export function removeProduct(id) {
  return { type: REMOVE_PRODUCT, id };
}

export function applyDiscount(discount) {
  return { type: APPLY_DISCOUNT, discount };
}
