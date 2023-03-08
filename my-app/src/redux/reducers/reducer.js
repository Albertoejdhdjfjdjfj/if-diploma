import { SET_SHOP_CATEGORY } from '../actions/actionsTypes';

const initialState = { category: '' };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SHOP_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
}
