import * as ACTION from "../../constants/constants";
import { takeLatest } from "redux-saga/effects";

function* rootSaga() {
  yield takeLatest([ACTION.SIGNIN, ACTION.SIGNUP]);
}

export default rootSaga;
