import React, { Component } from 'react';

class TweetFeed extends Component {
  render() {
    return (
      <div>
        <p>This is the tweet feed component for {this.props.name}</p>
      </div>
    );
  }
}

export default TweetFeed;
