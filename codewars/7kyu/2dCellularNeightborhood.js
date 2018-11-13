function get_neighbourhood(type, arr, coordinates) {
    if (arr.length === 0 || arr[0].length === 0 || (coordinates[0] < 0 || coordinates[1] < 0) ||
        (!(arr[coordinates[0]] instanceof Array) || isNaN(arr[coordinates[0]][coordinates[1]]) || arr[coordinates[0]][coordinates[1]] < 0)) {
        return [];
    }
    if (type === "moore") {
        return processMooreNeighbors(arr, coordinates);
    }
    if (type === "von_neumann") {
        return processVonNeumannNeighbors(arr, coordinates);
    }
}

function processMooreNeighbors(arr, coordinates) {
    var x = coordinates[0];
    var y = coordinates[1];
    var res = [];
    for (var i = x - 1; i <= x + 1; i++) {
        if (arr[i] instanceof Array && arr[x] instanceof Array) {
            for (var j = y - 1; j <= y + 1; j++) {
                if (isFinite(arr[x][y]) && arr[x][y] >= 0 && isFinite(arr[i][j]) && arr[i][j] >= 0 && arr[i][j] !== arr[x][y]) {
                    res.push(arr[i][j]);
                }
            }
        }
    }
    return res;
}

function processVonNeumannNeighbors(arr, coordinates) {
    var x = coordinates[0];
    var y = coordinates[1];
    var res = [];
    for (var i = x - 1; i <= x + 1; i++) {
        if (i >= 0 && arr[i] && arr[i][y] >= 0 && i !== x) {
            res.push(arr[i][y]);
        }
    }
    for (var j = y - 1; j <= y + 1; j++) {
        if (arr[x] && j >= 0 && arr[x][j] >= 0 && j !== y) {
            res.push(arr[x][j]);
        }
    }
    return res;
}
console.log(get_neighbourhood('moore', [[1,2,3],[4,5,6],[7,8,9]], [1,1])); //[1,2,3,4,6,7,8,9]
console.log(get_neighbourhood('von_neumann', [[1,2,3],[4,5,6],[7,8,9]], [1,1])); //[2,8,4,6]
