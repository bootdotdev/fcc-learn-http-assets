async function lootTreasure(baseURL, rarity) {

  const fullURL = `${baseURL}`
  return await getItems(fullURL, apiKey)
}

// don't touch below this line

const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'
const apiKey = generateKey()

const commonLoot = await lootTreasure(url, "Common")
console.log("Looting common treasure chest...")
for (const item of commonLoot) {
  console.log(`Acquired a ${item.name} with quality score: ${item.quality}`)
}
console.log("---")

const rareLoot = await lootTreasure(url, "Rare")
console.log("Looting rare treasure chest...")
for (const item of rareLoot) {
  console.log(`Acquired a ${item.name} with quality score: ${item.quality}`)
}
console.log("---")

console.log("Looting legendary treasure chest...")
const legendaryLoot = await lootTreasure(url, "Legendary")
for (const item of legendaryLoot) {
  console.log(`Acquired a ${item.name} with quality score: ${item.quality}`)
}

async function getItems(url, apiKey) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey
    }
  })
  return response.json()
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
