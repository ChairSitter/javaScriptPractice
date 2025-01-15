const reverseArray = (arr) => {
    let array = [...arr];
    let newArray = [];
    for(let i = array.length-1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray(["Do", "Rats", "Live", "On", "Some", "Evil", "Star"]));