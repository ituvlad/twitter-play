import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from 'Components/Home'
import TweetFeed from 'Components/TweetFeed'
import Menu from 'Components/Menu'
import Logout from 'Components/Logout'
import 'App.css';

class App extends Component {
  componentWillMount () {
    this.setState({
      token : "twitter_token"
    });
  }
  render() {
    return (      
      <div className="App">
        <BrowserRouter>
          <div>
            {this.state.username}
            <Menu/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/DonaldTrump" component={()=><TweetFeed token={this.state.token} name="Donald Trump"></TweetFeed>}/>
              <Route path="/HillaryClinton" component={()=><TweetFeed token={this.state.token}  name="Hillary Clinton"></TweetFeed>}/>
              <Route path="/Logout" component={() => <Logout/>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
