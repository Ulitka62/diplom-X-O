let players = ['x', 'o'];
let activePlayer = 0;

let counter = 0;
let field = [
    ['','',''],
    ['','',''],
    ['','','']
];
function startGame(){
    field = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    renderBoard(field);
    counter=0;
};

function click(cell, line){
    console.log(cell,line);

    if(counter %2 == 0){
        activePlayer = 0;
    }else {
        activePlayer = 1;
    }
    field[cell][line] = players[activePlayer];
    renderBoard(field);
    winner()

    counter++;
};

function winner(){
    let hit = players[activePlayer];
    for (let i = 0; i <= 2; i++) {
        for (let y = 0; y <= 2; y++) {
            if(field[i][0] ==hit && field[i][1] == hit && field[i][2] == hit) {
                showWinner(activePlayer);
            }
            else if (field[0][y] ==hit && field[1][y] == hit && field[2][y] == hit) {
                showWinner(activePlayer);
            }
            else if (field[0][0] ==hit && field[1][1] == hit && field[2][2] == hit) {
                showWinner(activePlayer);
            }
            else if (field[0][2] ==hit && field[1][1] == hit && field[2][0] == hit) {
                showWinner(activePlayer); 
            }
        }
    }
}