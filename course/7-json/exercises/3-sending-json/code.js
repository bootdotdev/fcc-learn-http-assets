async function updateLocationById(id, locationObj) {
  const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`
  const response = await fetch(path, {
    method: 'PUT',
    mode: 'cors',
    headers: getHeaders(),
    body: locationObj
  })
  return response.json()
}

// Don't touch below this line

const apiKey = generateKey()
const locationID = '0194fdc2-fa2f-4cc0-81d3-ff12045b73c8'

const location = await getLocationById(locationID)
console.log(`Location '${location.name}' fetched. Data: ${JSON.stringify(location)}`)

location.discovered = true
await updateLocationById(locationID, location)
console.log(`Location '${location.name}' was discovered!`)

const updatedLocation = await getLocationById(locationID)
console.log(`Location '${updatedLocation.name}' fetched. Data: ${JSON.stringify(updatedLocation)}`)

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

async function getLocationById(id) {
  const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`
  const response = await fetch(path, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

function getHeaders() {
  return {
    'X-API-Key': apiKey,
    'Content-Type': 'application/json'
  }
}
