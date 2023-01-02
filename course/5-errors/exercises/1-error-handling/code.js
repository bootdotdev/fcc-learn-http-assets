printCharacterStats(4)
printCharacterStats('ten')
printCharacterStats(10)

// don't touch below this line

function printCharacterStats(level) {
  if (isNaN(level)) {
    throw 'Parameter is not a number!'
  }
  console.log(`Your character is level ${level}!`)
}
