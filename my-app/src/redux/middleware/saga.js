import { takeEvery, call, put,all } from 'redux-saga/effects';
import { FETCH_PRODUCTS ,FETCH_BAG} from '../actions/actionsTypes';
import { requestProducts, requestProductsError, requestProductsSuccess } from '../actions/actions';
import { requestBag, requestBagError, requestBagSuccess } from '../actions/actions';

export function* rootSaga(){
  yield all(
    [
        watchRequestProducts() ,
        watchRequestBag() ,      
    ]
  )
}

export function* watchRequestProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsData);
}

export function* watchRequestBag() {
  yield takeEvery(FETCH_BAG, fetchBagData);
}

export function* fetchProductsData() {
  try {
    yield put(requestProducts());
    const data = yield call(() => {
      return fetch(`https://if-modnikky-api.onrender.com/api/catalog`).then((res) => res.json());
    });

    yield put(requestProductsSuccess(data));
  } catch (error) {
    yield put(requestProductsError());
  }
}

export function* fetchBagData(action) {
  try {
    yield put(requestBag());
    const data = yield call(() => {
      return fetch(`http://localhost:3001/bag?userId=${action.payload}`).then((res) => res.json());
    });

    yield put(requestBagSuccess(data));
  } catch (error) {
    yield put(requestBagError());
  }
}
