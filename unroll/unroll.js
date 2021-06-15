//take a square array and return a normal array with all values in order starting fromt he top left of the square array.  
function unroll(squareArray) {
//need to set an array of the arrays so i can flatten it later
    const unrolledArr = [];
//need to traverse the array to get values
    while (squareArray.length) {
        
        //need to get each column and row
        //get the top row
        unrolledArr.push(
            ...squareArray.shift(),

            //now the right column
            ...squareArray.map(row => row.pop()),

            // bottom row but also need to reverse it
            ...(squareArray.pop() || []).reverse(),

            //left column last and reverse
            ...squareArray.map(row => row.shift()).reverse(),
        );
    }
// need to return a new array with the values
    return unrolledArr;
}

module.exports = unroll;
