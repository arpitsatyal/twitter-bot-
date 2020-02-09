let Twit = require('twit')
let config = require('./config')
let geniusLyrics = require('./genius')
var T = new Twit(config)

async function read2 () {
    let lyrics = await geniusLyrics()
    setInterval(tweetIt, 5000, lyrics)
}
read2()

async function tweetIt(toSend) {
    let random = Math.floor(Math.random() * 180)
    let tweet = {
        status: `${toSend.substr(random, Math.min(random))}`
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