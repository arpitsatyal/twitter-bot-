let Twit = require('twit')
let config = require('./config')
var T = new Twit(config)
let getArtists = require('./spotify')

let bestOrWorst = ['Best', 'worst']
let isBetter = ['better', 'worse']
let isBommer = ['Boomers', 'Zoomers']

async function read2() {
    setInterval(tweetIt, 5000)
}
read2()

createRandom = value => Math.floor(Math.random() * value.length)

async function tweetIt() {
    try {
        let allBands = await getArtists()
        let random = createRandom(allBands)
        let randomTwo = createRandom(allBands)
        let randomThree = createRandom(bestOrWorst)
        let randomFour = createRandom(bestOrWorst)

        let tweetsArr = [`the ${bestOrWorst[randomThree]} ${allBands[random]} album is ${isBetter[randomThree]} than the ${bestOrWorst[randomFour]} ${allBands[randomTwo]} album`,
        `${allBands[random]} is literally just ${allBands[randomTwo]}`,
        `${allBands[random]} is just ${allBands[randomTwo]} for ${isBommer[randomThree]}`,
        `${allBands[randomTwo]} is for people who dont get invited to parties`]

        let toSendRandom = createRandom(tweetsArr)
        let tweet = {
            status: tweetsArr[toSendRandom]
        }

        T.post('statuses/update', tweet, tweeted)

        function tweeted(err, response) {
            if (err) {
                console.log('something went wrong..', err)
            } else {
                console.log('tweet sent!')
            }
        }
    } catch (e) { console.log(e) }
}



