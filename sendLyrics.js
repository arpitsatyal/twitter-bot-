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
    let lyrics = await geniusLyrics()
    let random = Math.floor(Math.random() * lyrics.length)
    let r = Math.floor(Math.random() * 100)
    let tweet = {
        status: `${r}: ${toSend.substr(random, 20)}`
    }
    // console.log(tweet)

    T.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response) {
        if (err) {
            console.log('something went wrong..', err)
        } else {
            console.log('tweet sent!')
        }
    }
}