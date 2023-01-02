const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

// don't touch below this line
const apiKey = generateKey()
const response = await fetch(url, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'X-API-Key': apiKey,
    'Content-Type': 'application/json'
  }
})

const responseData = await response.json()

logLocations(responseData)

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
function logLocations(locations) {
  for (const location of locations) {
    console.log(`Location: ${location.name}, Recommended Character Level: ${location.recommendedLevel}`)
  } 
}
