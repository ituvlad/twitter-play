
import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'

import * as actions from "./Actions.js"

export function* requestTweets() {
    yield* put(actions.requestTweetsAction());
}

export function* watchRequestTweets() {
    yield* takeEvery(actions.WATCH_REQUEST_TWEETS, requestTweets);
}

export function* resetTweets() {
    yield put(actions.resetTweets())
}

export function* watchResetTweets() {
    yield* takeEvery(actions.WATCH_RESET_TWEETS, resetTweets)
}

export function* receiveTweets(action) {
    console.log('!!!!!!!!!!!!!!!!!!!!receive tweets' + JSON.stringify(action));    
    yield put(actions.receiveTweets(action.data));
}

export function* watchReceiveTweets() {
    console.log('!!!!!!!!!!!!!!!!!!!!watch receive tweets');    
    yield* takeEvery(actions.WATCH_RECEIVE_TWEETS, receiveTweets)
}

export function* failFetchingTweets() {
    yield put(actions.failFetchingTweets())
}

export function* watchFailFetchingTweets() {
    yield* takeEvery(actions.WATCH_FAIL_FETCHING_TWEETS, failFetchingTweets)
}


export default function* rootSaga() {
    yield all([
        watchRequestTweets(),
        watchResetTweets(),
        watchReceiveTweets(),
        watchFailFetchingTweets()
    ])
}
