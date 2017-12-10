var Twitter = require('twitter');
var config = require('./config.js');
const express = require('express');
const socketIo = require("socket.io");
const app = express()

var twitterClient = new Twitter(config.twitter);

console.log(twitterClient);

app.get('/', (req, res) => res.sendFile('./public/index.html', { "root": __dirname }))

app.get('/tweets/:name/:max_id/:count', (req, res) => {
    var name = req.params.name;
    var max_id = req.params.max_id;
    var params = {
        q: name,
        lang: "en",
        count: req.params.count ? req.params.count : 10
    };
    if (max_id && max_id != "0") {
        params.max_id = max_id;
    }
    console.log(params);
    twitterClient.get("search/tweets", params, (error, tweets, response) => {
        res.json(tweets);
    })
})

var server = app.listen(3001, () => console.log('Example app listening on port 3001!'))

var io = require('socket.io')(server);
io.on('connection', function(client) {  
    console.log('Client connected...');
    var stream = twitterClient.stream('statuses/filter', {track: 'Donald Trump'});

    client.on('join', function(data) {
        console.log(data);
        client.emit('messages', 'Hello from server');

        stream.on('data', function(event) {
            client.emit('messages', event);
        });

        stream.on('error', function(error) {
            console.log(error);
        });
    })
});