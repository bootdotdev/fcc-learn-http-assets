const craftingCompleteWait = 2000
const combiningMaterialsWait = 1000
const smeltingIronBarsWait = 500
const shapingIronWait = 1500

// Don't touch below this line

setTimeout(() => console.log('Iron Longsword Complete!'), craftingCompleteWait)
setTimeout(() => console.log('Combining Materials...'), combiningMaterialsWait)
setTimeout(() => console.log('Smelting Iron Bars...'), smeltingIronBarsWait)
setTimeout(() => console.log('Shaping Iron...'), shapingIronWait)

console.log('Firing up the forge...')

await sleep(2500)
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
