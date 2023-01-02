const leaderboard = await fetchLeaderBoard()
console.log(leaderboard)

// don't touch below this line

async function fetchLeaderBoard() {
  const response = await fetch('https://fantasyquest.servers')
  return response.json()
}
