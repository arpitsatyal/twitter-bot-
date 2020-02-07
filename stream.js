let Twit = require('twit')
let config = require('./config')

var T = new Twit(config)

// stream is used for events like followed, likes etc
// fucking twitter api 
// stream is deprecated now :/
let stream = T.stream('statuses/filter', { track: '@iKanteee' })
stream.on('follow', followed)

function followed(event) {
    console.log('follow event')
    let name = event.source.name
    let screenName = event.source.screen_name
    tweetIt(`@ ${screenName} do you like King Crimson? ${name}`)
}

function tweetIt(txt) {
    let tweet = {
        status: txt
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