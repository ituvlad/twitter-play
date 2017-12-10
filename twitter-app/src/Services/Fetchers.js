import axios from "axios";

export function getTweets(query, max_id, count, dispatch, store) {        
    var url = "http://localhost:3000/tweets/"+query+"/"+max_id+"/"+count;
    return axios.get(url);    
}