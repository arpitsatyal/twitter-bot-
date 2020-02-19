let Twit = require('twit')
let config = require('./config')
var T = new Twit(config)

let bands = ['radiohead', 'green day','taylor swift', 'one direction']
let bestOrWorst = ['Best', 'worst']
let isBetter = ['better', 'worse']

async function read2 () {
    setInterval(tweetIt, 5000)
}
read2()

function createRandom(value) {
    if(typeof(value) === 'number') {
    return Math.floor(Math.random() * value)
    } 
    return Math.floor(Math.random() * value.length)
}

function tweetIt() {
    let r = createRandom(100)
    let random = createRandom(bestOrWorst)
    let randomTwo =  createRandom(bands)
    let randomThree = createRandom(bestOrWorst)

    let tweet = {
       status: `${r} the ${bestOrWorst[random]} ${bands[random]} album is ${isBetter[random]} than the ${bestOrWorst[randomThree]} ${bands[randomTwo]} album`
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



