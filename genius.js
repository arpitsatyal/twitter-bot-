let gConfig = require('./geniusConfig')
const genius = require("genius-lyrics")
const Genius = new genius.Client(gConfig.clientAccessToken)

// const search = Genius.findTrack('starless').then(data => console.log(data.response.hits[0]))

async function getLyric() {
    const search = await Genius.findTrack('born under punches talking heads')
    // console.log(typeof(search))
    const url = await Genius.getUrl(search)
    const lyricsJSON = await Genius.getLyrics(url)
    const lyrics = lyricsJSON.lyrics 
    // console.log(lyrics)
    // let res = lyrics.split(' ')
    return lyrics
}

// getLyric()


// NEXT TASK
// 1 find artist
// 2 find song of the artist
// 3 find lyrics of that song

module.exports = getLyric


