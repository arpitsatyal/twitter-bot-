let gConfig = require('./geniusConfig')
const genius = require("genius-lyrics")
const Genius = new genius.Client(gConfig.clientAccessToken)

// const search = Genius.findTrack('starless').then(data => console.log(data.response.hits[0]))
let r = Math.floor(Math.random() * 10)
console.log(r)
if(r != 0) {
Genius.findArtistByID(r).then(band => {
    console.log(band)
    console.log(band.response.artist.name)
}).catch(e => console.log(e))
}


async function getLyric() {
    const search = await Genius.findTrack('is this it the strokes')
    // console.log(typeof(search))
    const url = await Genius.getUrl(search)
    const lyricsJSON = await Genius.getLyrics(url)
    const lyrics = lyricsJSON.lyrics
    // console.log(lyrics)
    // let res = lyrics.split(' ')
    return lyrics
}

// NEXT TASK
// 1 find artist
// 2 find song of the artist
// 3 find lyrics of that song

module.exports = getLyric


