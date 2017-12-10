
import { call, put, takeEvery, fork, take, all } from 'redux-saga/effects'
import * as actions from "./Actions.js"
import {getTweets} from "./Fetchers.js"

 function* requestTweets(req) {
    const resp = yield call(getTweets,req.payload.query, req.payload.max_id, req.payload.count);
    const action = yield actions.receiveTweets(resp.data);    
    yield put(action);
}

 function* watchRequestTweets() { 
    while (true) {
        const action = yield take(actions.ACTIONS_LIST.REQUEST_TWEETS)                    
        yield requestTweets(action);
    }       
}

 function* resetTweets() {     
    yield put(actions.resetTweets())
}

function* watchResetTweets(action) {
  while (true) {
    yield take(actions.ACTIONS_LIST.RESET_TWEETS)    
    resetTweets();
  }
}

 function* receiveTweets(action) {    
    yield put(actions.receiveTweets(action.data));
}

 function* watchReceiveTweets() {    
    yield takeEvery(actions.ACTIONS_LIST.WATCH_RECEIVE_TWEETS, receiveTweets)
}

 function* failFetchingTweets() {
    yield put(actions.failFetchingTweets())
}

 function* watchFailFetchingTweets() {
    yield takeEvery(actions.ACTIONS_LIST.WATCH_FAIL_FETCHING_TWEETS, failFetchingTweets)
}


export default function* rootSaga() {
    yield all([
        fork(watchRequestTweets),
        fork(watchResetTweets),
        watchReceiveTweets(),
        watchFailFetchingTweets()
    ])
}
