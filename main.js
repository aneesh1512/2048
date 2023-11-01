//let grid = [[0, 0, 0, 0], [2, 2, 2, 2], [0, 0, 0, 0], [0, 0, 0, 0]];
let grid = [[4, 0, 0, 0], [4, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];


function render() {
    console.log(grid);
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            let ele = document.getElementsByClassName("grid")[r * 4 + c];
            if (grid[r][c] !== 0) {
                ele.innerHTML = grid[r][c];
            } else {
                ele.innerHTML = null;
            }
        }
    }
}


let intializegrid = () => {
    let r1 = Math.floor(Math.random() * 16);
    let r2 = Math.floor(Math.random() * 16);

    while (r1 === r2) {
        r2 = Math.floor(Math.random() * 16);
    }
    console.log(grid[Math.floor(r1 / 4)][r1 % 4])
    console.log(grid[Math.floor(r2 / 4)][r2 % 4])
    grid[Math.floor(r1 / 4)][r1 % 4] = 2;
    grid[Math.floor(r2 / 4)][r2 % 4] = 2;
    render();
}
intializegrid();



function clickUp() {
    console.log("UP");
    for (let c = 0; c < 4; c++) {
        val = 0;
        curr = 0;
        for (let r = 0; r < 4; r++) {
            if (grid[r][c] === 0) continue;
            else {
                if (val === 0) {
                    val = grid[r][c];
                    grid[r][c] = 0;
                } else if (val === grid[r][c]) {
                    grid[curr][c] = val + grid[r][c];
                    grid[r][c] = 0;
                    val = 0;
                    curr++;
                } else {
                    grid[curr][c] = val;
                    val = grid[r][c];
                    grid[r][c] = 0;
                    curr++;
                }
            }

            // if (val !== 0) grid[curr][c] = val;

        }
        if (val !== 0) grid[curr][c] = val;
    }
}

function clickDown() {
    console.log("Down");
    for (let c = 0; c < 4; c++) {
        val = 0;
        curr = 3;
        for (let r = 3; r >= 0; r--) {
            if (grid[r][c] === 0) continue;
            else {
                if (val === 0) {
                    val = grid[r][c];
                    grid[r][c] = 0;
                } else if (val === grid[r][c]) {
                    grid[curr][c] = val + grid[r][c];
                    grid[r][c] = 0;
                    val = 0;
                    curr--;
                } else {
                    grid[curr][c] = val;
                    val = grid[r][c];
                    grid[r][c] = 0;
                    curr--;
                }
            }

            //if (val !== 0) grid[curr][c] = val;

        }
        if (val !== 0) grid[curr][c] = val;
    }
}

function clickLeft() {
    console.log("Left");
    for (let r = 0; r < 4; r++) {
        val = 0;
        curr = 0;
        for (let c = 0; c < 4; c++) {
            if (grid[r][c] === 0) continue;
            else {
                if (val === 0) {
                    val = grid[r][c];
                    grid[r][c] = 0;
                } else if (val === grid[r][c]) {
                    grid[r][curr] = val + grid[r][c];
                    grid[r][c] = 0;
                    val = 0;
                    curr++;
                } else {
                    grid[r][curr] = val;
                    val = grid[r][c];
                    grid[r][c] = 0;
                    curr++;
                }
            }
        }
        if (val !== 0) grid[r][curr] = val;
    }
}

function clickRight() {
    console.log("Right");
    for (let r = 0; r < 4; r++) {
        val = 0;
        curr = 3;
        for (let c = 3; c >= 0; c--) {
            if (grid[r][c] === 0) continue;
            else {
                if (val === 0) {
                    val = grid[r][c];
                    grid[r][c] = 0;
                } else if (val === grid[r][c]) {
                    grid[r][curr] = val + grid[r][c];
                    grid[r][c] = 0;
                    val = 0;
                    curr--;
                } else {
                    grid[r][curr] = val;
                    val = grid[r][c];
                    grid[r][c] = 0;
                    curr--;
                }
            }
        }
        if (val !== 0) grid[r][curr] = val;
    }
}


function randomValue() {
    let empty_val = []
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            if (grid[r][c] === 0) {
                empty_val.push([r, c]);
            }
        }
    }

    if (empty_val.length === 0) return false;
    let ran_index = Math.floor(Math.random() * empty_val.length);
    grid[empty_val[ran_index][0]][empty_val[ran_index][1]] = 2;
}

document.getElementsByTagName('body')[0].addEventListener("keydown", (e) => {
    let oldg = JSON.stringify(grid);

    if (e.key === 'ArrowUp') clickUp();
    if (e.key === 'ArrowDown') clickDown();
    if (e.key === 'ArrowLeft') clickLeft();
    if (e.key === 'ArrowRight') clickRight();

    if (oldg === JSON.stringify(grid)) {
        return;
    }

    let generateV = randomValue();

    if (!generateV) {
        console.log("lose");
    }

    render();
})





console.log("hello");