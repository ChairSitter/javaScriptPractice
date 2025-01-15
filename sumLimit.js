const sumLimit = (a, b) => {
    let sum = a + b;
    let sumLength = sum.toString().length;
    let aLength = a.toString().length;
    console.log(sumLength, 'sumLength', aLength, 'aLength');
    if(sumLength > aLength){
        return a;
    }
    return sum;
}

sumLimit(20, 3)