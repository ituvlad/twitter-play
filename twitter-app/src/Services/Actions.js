
const ACTIONS_LIST =
{
    WATCH_RESET_TWEETS : "watch_reset_tweets",
    RESET_TWEETS : "reset_tweets",

    WATCH_REQUEST_TWEETS: "watch_request_tweets",
    REQUEST_TWEETS: "request_tweets",

    WATCH_RECEIVE_TWEETS: "watch_receive_tweets",
    RECEIVE_TWEETS: "receive_tweets",

    WATCH_FAIL_FETCHING_TWEETS: "watch_fetch_tweets_fail",
    FAIL_FETCHING_TWEETS: "fetch_tweets_fail",

    WATCH_FETCH_TWEETS: "watch_fetch_tweets",
    FETCH_TWEETS: "fetch_tweets"
};


export function requestTweetsAction() {
    return {
        type: ACTIONS_LIST.REQUEST_TWEETS
    }
}
export function resetTweets(){
    return {
        type : ACTIONS_LIST.RESET_TWEETS
    }
}
export function receiveTweets(data) {    
    return {
        type: ACTIONS_LIST.RECEIVE_TWEETS,
        data: data
    };
}

export function failFetchingTweets() {
    return {
        type: ACTIONS_LIST.FAIL_FETCHING_TWEETS,
        data: "There was an error retrieving profile data."
    }
}

export {ACTIONS_LIST};