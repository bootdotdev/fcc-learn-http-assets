const apiKey = generateKey()
const url = getURL()
const settings = getSettings()

const response = await fetch(url, settings)
const responseData = await response.json()

logItems(responseData)

// don't touch below this line


function getSettings() {
  return {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  }
}

function getURL() {
  return 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

function logItems(items) {
  for (const item of items) {
    console.log(item.name)
  } 
}
