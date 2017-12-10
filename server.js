var Twitter = require('twitter');
var config = require('./config.js');
const express = require('express');
const app = express()

var client = new Twitter(config.twitter);

console.log(client);

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
    client.get("search/tweets", params, (error, tweets, response) => {
        res.json(tweets);
    })
})

var stream = client.stream('statuses/filter', {track: 'Donald Trump'});
stream.on('data', function(event) {
  console.log(event.id +"   -   " + event.text);
  console.log("");
});
 
stream.on('error', function(error) {
  throw error;
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))
