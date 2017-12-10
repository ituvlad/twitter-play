import axios from "axios";
import { ACTIONS_LIST } from './Actions.js'

export function fetchTweets(query, max_id, count, dispatch, store) {        
    
    return (dispatch, getState, subscribe) => {
        const action = type => dispatch({type});
        const actionWithData = (type, data) => dispatch({type, data});

        action(ACTIONS_LIST.WATCH_REQUEST_TWEETS);

        var url = "http://localhost:3000/tweets/"+query+"/"+max_id+"/"+count;            
        axios.get(url)
            .then(res => {
                //dispatch(self.receiveTweets(res.data));
                console.log('!!!!!!!!!!!!!!!!!!!!dispatching receive');    
                action(ACTIONS_LIST.WATCH_RECEIVE_TWEETS);
                //actionWithData({type: ACTIONS_LIST.WATCH_RECEIVE_TWEETS, data: true });
            })
            .catch(err => {
                //dispatch(self.failFetchingTweets());
                action(ACTIONS_LIST.WATCH_FAIL_FETCHING_TWEETS);
            });
    }
}