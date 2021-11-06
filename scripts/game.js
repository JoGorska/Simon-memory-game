
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
    addTurn();
}

function showScore () {
    document.getElementById("score").innerText = game.score
}

function addTurn() {
    
    game.playerMoves = []
    
    let newMove = game.choices[Math.floor(Math.random()*game.choices.length)];
    game.currentGame.push(newMove)
    //showTurn();
}

function lightsOn (circ) {
    document.getElementById("circ").classList.add("light");
    setTimeout(() => {
        document.getElementById("circ").classList.remove("light");
    }, 400);
}

// exports the object, curly braces are needed because more than will be exported

module.exports = {game, newGame, showScore, addTurn, lightsOn };