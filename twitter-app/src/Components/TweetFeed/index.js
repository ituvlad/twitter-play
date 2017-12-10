import React, { Component } from 'react';
import { connect } from "react-redux";
import Tweet from "Components/TweetFeed/Tweet";
import { ACTIONS_LIST } from "Services/Actions.js"

class TweetFeed extends Component {
  componentDidMount() {
    this.reset();
    this.loadMore();    
  }
  reset() {
    this.props.dispatch({type:ACTIONS_LIST.RESET_TWEETS});
  }
  loadMore() {    
    if(this.props.loading){
      return;
    }
    var actionName = ACTIONS_LIST.REQUEST_TWEETS;
    this.props.dispatch({type: actionName, payload: {query:this.props.name, max_id:this.props.max_id, count:10}})
  }
  render() {    
    return (      
      <div style={{marginBottom : "30px"}}>
        {this.props.name} Tweets:
        {this.props.tweets.map(function (tweet) {
          return <Tweet key={tweet.id} tweet={tweet}></Tweet>;
        })}
        {this.props.loading?<div>Loading</div>:<div></div>}
        
        <input type="button" value="Load More" onClick={this.loadMore.bind(this)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return {
    loading: state.tweetsReducer.loading,
    tweets: state.tweetsReducer.tweets,
    error: state.tweetsReducer.error,
    max_id: state.tweetsReducer.max_id
  }
}

export default connect(mapStateToProps)(TweetFeed)
