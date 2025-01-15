const isEverywhere = (nums, val) => {
    let array = [...nums];
    for(let i = 0; i < array.length-1; i++){
        if(array[i] !== val && array[i+1] !== val){
            console.log(array[i], array[i+1])
            return false;
        }
    }
    return true;
}

console.log(isEverywhere([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 4], 2))