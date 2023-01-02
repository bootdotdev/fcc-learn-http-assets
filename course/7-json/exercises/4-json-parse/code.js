function parseLocation(locationString) {
  // ?
}

// don't touch below this line

function printLocationObj(parsed) {
  console.log(`id: ${parsed.id}`)
  console.log(`discovered: ${parsed.discovered}`)
  console.log(`name: ${parsed.name}`)
  console.log(`recommendedLevel: ${parsed.recommendedLevel}`)
}

parseLocation(`
{
	"discovered": false,
	"id": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",
	"name": "Bandit Camp",
	"recommendedLevel": 14
`)

console.log('---')

parseLocation(`
{
	"discovered": false,
	"id": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",
	"name": "Bandit Camp",
	"recommendedLevel": 14
}
`)
