import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes';

export function addProduct(item) {
  return { type: ADD_PRODUCT, item }
}

export function removeProduct(id) {
  return { type: REMOVE_PRODUCT, id }
}