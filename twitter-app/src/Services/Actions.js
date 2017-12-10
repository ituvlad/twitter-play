import axios from "axios";

const ACTIONS_LIST =
    {
        RESET_TWEETS : "reset_tweets",
        REQUEST_TWEETS: "request_tweets",
        RECEIVE_TWEETS: "receive_tweets",
        FAIL_FETCHING_TWEETS: "fetch_tweets_fail"
    };
class Actions {
    requestTweets() {
        return {
            type: ACTIONS_LIST.REQUEST_TWEETS
        }
    }
    resetTweets(){
        return {
            type : ACTIONS_LIST.RESET_TWEETS
        }
    }
    fetchTweets(query, max_id, count, dispatch) {        
        var self = this;
        return (dispatch, getState, subscribe) => {
            dispatch(self.requestTweets());
            var url = "http://localhost:3000/tweets/"+query+"/"+max_id+"/"+count;            
            axios.get(url)
                .then(res => {
                    dispatch(self.receiveTweets(res.data));
                })
                .catch(err => {
                    dispatch(self.failFetchingTweets());
                });
        }
    }
    receiveTweets(data) {
        return {
            type: ACTIONS_LIST.RECEIVE_TWEETS,
            data: data
        };
    }
    failFetchingTweets() {
        return {
            type: ACTIONS_LIST.FAIL_FETCHING_TWEETS,
            data: "There was an error retrieving profile data."
        }
    }
}

export {
    ACTIONS_LIST,
    Actions
}