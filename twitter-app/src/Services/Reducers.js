import { combineReducers } from "redux"

import { ACTIONS_LIST } from "./Actions.js"

function tweetsReducer(
  state = {
    tweets: [],
    max_id: null,
    loading: false,
    error: null
  },
  action
) {
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  switch (action.type) {
    case ACTIONS_LIST.RESET_TWEETS:
      return Object.assign({}, state, {
        loading: true,
        error: null,
        tweets: [],
        max_id: null
      })
    case ACTIONS_LIST.REQUEST_TWEETS:
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case ACTIONS_LIST.RECEIVE_TWEETS:
    console.log('!!!!!!!!!!!!!!!!!!!!reducer receive tweets');    
      return Object.assign({}, state, {
        loading: false,
        error: null,
        tweets: state.tweets.concat(action.data.statuses),
        max_id: getParameterByName("max_id",action.data.search_metadata.next_results)
      })
    case ACTIONS_LIST.FAIL_FETCHING_TWEETS:
      return Object.assign({}, state, {
        loading: false,
        tweets: state.tweets.concat([]),
        max_id: null,
        error: action.data
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  tweetsReducer
});

export default rootReducer;