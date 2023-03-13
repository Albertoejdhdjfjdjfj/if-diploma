import {
  SET_SHOP_CATEGORY,
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_ERROR,
  REQUEST_PRODUCTS_SUCCESS,
  SET_SEARCH_TEXT
} from '../actions/actionsTypes';

const initialState = { category: '', products: false, search: '' };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SHOP_CATEGORY:
      return { ...state, category: action.payload };
    case REQUEST_PRODUCTS:
      return { ...state, products: false };
    case REQUEST_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case REQUEST_PRODUCTS_ERROR:
      return { ...state, products: false };
    case SET_SEARCH_TEXT:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}
