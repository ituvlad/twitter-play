import React, { Component } from 'react';
import { Actions } from "Services/Actions.js"
import { connect } from "react-redux";
import Tweet from "Components/TweetFeed/Tweet";
import { ACTIONS_LIST } from "Services/Actions.js"
import { fetchTweets } from "Services/Fetchers.js"

class TweetFeed extends Component {
  componentDidMount() {
    this.reset();
    this.loadMore();    
  }
  reset() {
    const action = type => this.props.dispatch({type});
    action(ACTIONS_LIST.RESET_TWEETS);
  }
  loadMore() {    
    if(this.props.loading){
      return;
    }    
    console.log("Loading more");
    this.props.dispatch(fetchTweets(this.props.name, this.props.max_id, 10));
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
