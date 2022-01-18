/** @format */

import * as types from "./actionTypes";
import { takeLates, all, put, call } from "redux-saga/effects";
import { getRecipies } from "./api";

export function* onLoadRecipeAsync({ payload: query }) {
	try {
		console.log("query", query);
		const response = yield call(getRecipies, query);
		yield put({ type: types.FETCH_RECIPE_SUCCESS, payload: response.data });
	} catch (error) {
		yield put({ type: types.FETCH_RECIPE_FAIL, payload: error });
	}
}

export function* onLoadRecipe() {
	yield takeLates(types.FETCH_RECIPE_START, onLoadRecipeAsync);
}

const recipeSaga = [fork(onLoadRecipe)];

export default function* rootSaga() {
	yield all([...recipeSaga]);
}
