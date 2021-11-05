/**
 * @jest-environment jsdom
 */



// import functions...

const { game, newGame, showScore} = require("../game")

// this loads DOM before each test is run

beforeAll(() => {
    // installes fs library
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");

    // writes the content of index.html into fileContents
    document.write(fileContents);
    document.close();

});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
}) ;

describe("newGame function clears the values in the keys of the game object", () => {
    beforeAll(() => {

        // sets the keys in the game object to some random values, to test if game function will clear this.
        game.score = 42;
        game.playerMoves = ["button1"];
        game.currentGame = ["button2"];

        // sets the score, that is displayed to the user to 42 to see if newGame function will clear it
        document.getElementById("score").innerText = "42"
        newGame();

    });
    test("expect score to be 0", () => {
        
        expect(game.score).toEqual(0);
    });
    test("expect playerMoves to be empty array", () => {
        expect(game.playerMoves.length).toEqual(0);
    });
    test("expect currentGame to be empty array", () => {
        expect(game.currentGame.length).toEqual(0);
    });
    test("should display 0 for the element with id score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    })
});