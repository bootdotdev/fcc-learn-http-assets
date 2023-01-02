async function getResources(path) {
  const fullURL = `https://api.boot.dev`

  const response = await fetch(fullURL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': generateKey(),
      'Content-Type': 'application/json'
    }
  })
  const resources = await response.json()
  return resources
}

// don't touch below this line

const locations = await getResources('/v1/courses_rest_api/learn-http/locations')
console.log('Locations:')
logResources(locations)
console.log(' --- ')

const items = await getResources('/v1/courses_rest_api/learn-http/items')
console.log('Items:')
logResources(items)
console.log(' --- ')

const users = await getResources('/v1/courses_rest_api/learn-http/users')
console.log('Users:')
logResources(users)

function logResources(resources) {
  for (const resource of resources) {
    console.log(` - ${JSON.stringify(resource)}`)
  }
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
