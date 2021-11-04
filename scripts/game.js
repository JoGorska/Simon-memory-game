
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame () {
    game.score = 0;
}

// exports the object, curly braces are needed because more than will be exported

module.exports = {game, newGame};