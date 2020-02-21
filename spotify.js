const fetch = require("node-fetch")
let { userAccessToken } = require('./spotifyConfig')

async function getArtists() {
        try {
        	const result = []
    for (let i = 1960; i < 2020; i++) {
            let data = await fetch(`https://api.spotify.com/v1/search?q=year%3A${i}&type=artist&market=US`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${userAccessToken}`
                }
            })
          let actualData = await data.json()
                    var allItems = actualData.artists.items
                	var x = allItems.map(item => item.name)
                // console.log(x) => inside loop; will return a new value for each iteration
            		result.push(x)
            } 

            // console.log(result) => consist of all the iteration's results in a single array
            // console.log(x) => returns the result of the last iteration only

            let flattedResult = result.flat()
            let finalResults = []
            flattedResult.forEach(res => {
            	if(!finalResults.includes(res)) finalResults.push(res)
            })
            return finalResults
        } catch (e) { console.log (e) }
}
getArtists().then(res => console.log(res))

