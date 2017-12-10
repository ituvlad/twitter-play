import React, { Component } from 'react';

export default class Tweet extends Component {
    constructor() {
        super();
        this.style = {
            container: {
                display: "flex",
                flexDirection: "row",
                paddingBottom: "20px",
                paddingTop : "5px",
                width:"50%",
                margin:"0 auto"
            },
            avatar : {
                width : "100px",
                height : "auto",
                flex: "none",
                alignSelf : "flex-start"
                       
            },
            tweet : {
                textAlign:"left",
                padding:"10px",
                display:"flex",
                flexDirection:"column"
            },
            tweetTitle : {
                marginBottom:"10px"
            }
        }
    }
    render() {
        return (
            <div style={this.style.container}>
                <img style={this.style.avatar} src={this.props.tweet.user.profile_image_url} alt="Tweet avatar"/>
                <div style={this.style.tweet}>                    
                    <div style={this.style.tweetTitle}>{this.props.tweet.user.name} at {this.props.tweet.created_at}</div>
                    {this.props.tweet.text}
                </div>
            </div>
        );
    }
}