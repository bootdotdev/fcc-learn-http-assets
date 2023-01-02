const { crawlPage } = require('./crawl.js')

async function main(){
  if (process.argv.length < 3){
    console.log('no website provided')
  }
  if (process.argv.length > 3){
    console.log('too many arguments provided')
  }

  const baseURL = process.argv[2]

  console.log(`starting crawl of: ${baseURL}...`)

  const pages = await crawlPage(baseURL, baseURL, {})

  console.log(pages)
}

main()

