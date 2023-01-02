async function fetchIPAddress(domain) {
  const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
    headers: {
      'accept': 'application/dns-json'
    }
  })
  const respObject = await resp.json()

  console.log(respObject)
}

// don't touch below this line

const domain = 'api.boot.dev'
const ipAddress = await fetchIPAddress(domain)
if (!ipAddress) {
  console.log('something went wrong in fetchIPAddress')
} else {
  console.log(`found IP address for domain ${domain}: ${ipAddress}`)
}
