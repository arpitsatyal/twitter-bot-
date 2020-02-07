let Twit = require('twit')
let config = require('./config')
let fs = require('fs')
let getLyrics = require('./lyrics')

var T = new Twit(config)

// function read() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('lyrics.txt', 'utf-8', function (err, done) {
//             if (err) console.log(err)
//             resolve(done)
//         })
//     })
// }
// read()
// .then(data => setInterval(tweetIt, 5000, data.toString()))

function read2 () {
    let lyrics = getLyrics().split('.')
    lyrics.forEach(lyric => {
        setInterval(tweetIt, 5000, lyric)
    })

}
read2()

function tweetIt(toSend) {
    let r = Math.floor(Math.random() * 100)
    let tweet = {
        status: `${r}: ${toSend}`
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

