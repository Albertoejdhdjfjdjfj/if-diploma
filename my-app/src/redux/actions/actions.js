import {
  SET_SHOP_CATEGORY,
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_ERROR,
  REQUEST_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS,
  SET_SEARCH_TEXT
} from './actionsTypes';
import { createAction } from 'redux-actions';

export const setShopCategory = createAction(SET_SHOP_CATEGORY);

export const requestProducts = createAction(REQUEST_PRODUCTS);

export const requestProductsError = createAction(REQUEST_PRODUCTS_ERROR);

export const requestProductsSuccess = createAction(REQUEST_PRODUCTS_SUCCESS);

export const fetchProducts = createAction(FETCH_PRODUCTS);

export const setSearchText = createAction(SET_SEARCH_TEXT);
