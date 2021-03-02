console.log("Hello World");

const {gameOfLife} = require("../src/game-of-life")

const input = [
    [
        0,0,0,0
    ],
    [
        0,1,1,0
    ],
    [
        0,1,1,0
    ],
    [
        0,0,0,0
    ],
];

const output = gameOfLife(input);

console.log(output)