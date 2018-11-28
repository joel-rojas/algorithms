// Complete the encryption function below.
function encryption(s) {
    const sL = s.length;
    const calculate = Math.sqrt(sL);
    let row = Math.floor(calculate);
    let column = Math.ceil(calculate);
    const grid = [];
    let gridL = row * column;
    if (gridL < sL) {
        const min = Math.min(row, column);
        while (gridL <= sL) {
            if (row === min) {
                row++;
            } else if (column === min) {
                column++;
            }
            gridL = row * column;
        }
    }
    let i = 0;
    while (i <= gridL - 1) {
        grid.push(s.slice(i, i + column));
        i += column;
    }
    i = 0;
    let j = 0;
    let text = '';
    const res = [];
    while (j < column) {
        if (grid[i][j]) {
            text += grid[i][j];
        } 
        if (i === row - 1) {
            res.push(text);
            i = 0;
            j++;
            text = '';
        } else {
            i++;
        }
    }
    return res.join(' ');
}