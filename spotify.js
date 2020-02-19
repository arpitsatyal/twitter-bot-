const fetch = require("node-fetch")
let { userAccessToken } = require('./spotifyConfig')

function getArtists() {
    // let bands = []
    for (let i = 2000; i < 2020; i++) {
        fetch(`https://api.spotify.com/v1/search?q=year%3A${i}&type=artist&market=US`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${userAccessToken}`
            } 
        })
    .then(async response => {
            let data = await response.json()
            let allItems = data.artists.items
           let newArr = allItems.map(item => {
           return item.name
            })
            console.log(newArr)
        }).catch(e => console.log(e))
}
}
getArtists()


// token has expired, get a new one