let Twit = require('twit')
let config = require('./config')

var T = new Twit(config)

tweetIt()
setInterval(tweetIt, 1000*20)

function tweetIt(txt) {
    let r = Math.floor(Math.random() * 100)
    let tweet = {
        status: `plz ignore, this account is on development mode: ${r}`
    }
    
    T.post('statuses/update', tweet, tweeted)
    
    function tweeted(err, data, response) {
        if (err) { 
        console.log('something went wrong..', err)
        } else {
        console.log('tweet sent!')
        }
    }
}
