
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame () {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
}

function showScore () {
    document.getElementById("score").innerText = game.score
}

function addTurn() {
    
    let newMove = game.choices[Math.floor(Math.random()*game.choices.length)];
    game.currentGame.push(newMove)
        
    
}

// exports the object, curly braces are needed because more than will be exported

module.exports = {game, newGame, showScore, addTurn};