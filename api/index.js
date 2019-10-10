const options = [
	'https://www.gapminder.org/dollar-street/family?place=54b91e7b472e93d62d926470',
	'https://www.gapminder.org/dollar-street/family?place=5cb657013332a100107a8c46',
	'https://www.gapminder.org/dollar-street/family?place=592c1bda5504ea7890b4a47e',
	'https://www.gapminder.org/dollar-street/family?place=55646e1512d20a701a1e19eb',
	'https://www.gapminder.org/dollar-street/family?place=5ae623f643b906000ea46217',
	'https://www.gapminder.org/dollar-street/family?place=5ae1c6e07634de002a245206',
	'https://www.gapminder.org/dollar-street/family?place=5d07859b40de090010b9737f',
	'https://www.gapminder.org/dollar-street/family?place=5cd5dcf940de090010b90d15',
	'https://www.gapminder.org/dollar-street/family?place=54b3d468a5a3d7566eb00470'
]

const getRandomOption = function() {
	let randomNum = Math.floor(Math.random() * options.length)

	return options[randomNum]
}

module.exports = (req, res) => {
	option = getRandomOption()

	return res.status(200).send(option)
}