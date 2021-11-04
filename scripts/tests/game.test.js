/**
 * @jest-environment jsdom
 */



// import functions...

const { game } = require("../game")

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
}) 