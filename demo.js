function getLyrics() {
    return 'in an interstellar burst. i am back to save the universe. in a deep deep sleep of the innocence. an airbag saved by life. in a fast german car. im amazed im still alive.'
}

	function read() {
		let lyrics = getLyrics().split('.')
		setInterval(toTweet, 5000, lyrics)
	}

	read()

	function toTweet(txt) {
		let lyrics = getLyrics().split('.')
		let r = Math.floor(Math.random() * lyrics.length)
		console.log(txt[r])
}


