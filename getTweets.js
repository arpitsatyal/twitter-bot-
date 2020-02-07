let Twit = require('twit')
let config = require('./config')
var T = new Twit(config)
let fs = require('fs')

let params = {
    q: 'boring james milner',
    count: 5
}
T.get('search/tweets', params, gotData)

function gotData(err, data, response) {
    let tweets = data.statuses
    let allTexts= tweets.map(tweet => {
        console.log(tweet.text)
        return tweet.text
    })
    fs.writeFile(__dirname+'/details.txt', allTexts, function(err, done) {
        if(err) console.log(err)
    })
}