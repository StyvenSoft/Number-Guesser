let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Se llamará a esta función al comienzo de cada nueva 
//ronda para generar el nuevo número objetivo secreto.
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// determinar qué suposición es la más cercana al número objetivo
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

// aumentar correctamente la puntuación del ganador después de cada ronda
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// actualizar el número de ronda después de cada ronda.

const advanceRound = () => currentRoundNumber++;