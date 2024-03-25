function points(games) {
  
  let finalPoints = 0

  for (let i = 0; i < games.length; i++) {
    
    if ( games[i].charAt(0) === games[i].charAt(2) ) {
      finalPoints++
    }

    if ( games[i].charAt(0) > games[i].charAt(2) ) {
      finalPoints+= 3
    }
    
  }

  return finalPoints
}


console.log(points(['1:1', '2:1', '3:2']))

// params: games    // a string in the format x:y
// return: finalPoints    // our teams total championships points
// e.g. points(['1:1', '2:1', '3:2'])
// results in 7

// declare a variable finalPoints and set it to 0
// loop through the games array
  // if games[i].charAt(0) === games[i].charAt(2) add and reassign 1 to finalPoints
  // if games[i].charAt(0) > games[i].charAt(2) add and reassign 3 to finalPoints
  // end loop
// return finalPoints


