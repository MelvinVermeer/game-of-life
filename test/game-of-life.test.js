const {gameOfLife} = require("../src/game-of-life")

test("blinker period 2", () => {
    const input = [
        [
            0,0,0,0,0
        ],
        [
            0,0,1,0,0
        ],
        [
            0,0,1,0,0
        ],
        [
            0,0,1,0,0
        ],
        [
            0,0,0,0,0
        ]
    ];
    const horizontalBlinker = [
        [
            0,0,0,0,0
        ],
        [
            0,0,0,0,0
        ],
        [
            0,1,1,1,0
        ],
        [
            0,0,0,0,0
        ],
        [
            0,0,0,0,0
        ]
    ];;

    const intermediate = gameOfLife(input);
    expect(intermediate).toEqual(horizontalBlinker)
    
    const final = gameOfLife(intermediate);
    expect(final).toEqual(input);
})

test("block", () => {
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
    expect(output).toEqual(input)
})