const squareItems = arr => arr.map((item) => item * item);

const returnALot = (arr) => {
    const arrOfArrays = [];
    for(let i = 0; i < arr.length; i++){
        let innerArray = [];
        for(let j = 0; j < arr[i]; j++){
            
            innerArray.push(j + 1);
        }
        arrOfArrays.push(innerArray);
    }
    return arrOfArrays;
}
console.log(returnALot(squareItems([1, 2, 3, 4, 5, 6, 7, 8, 9])));