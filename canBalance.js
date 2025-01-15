function canBalance(nums){
    let array = [...nums];
    let total = 0;
    let value = 0;
    for(let i = 0; i < array.length; i++){
        total = total + array[i];
    }
    let halfTotal = total / 2;
    for(let j = 0; j < array.length; j++){
        value = value + array[j];
        console.log(value, halfTotal);
        if(value === halfTotal){
            return true;
        }
    }
    return false;
}

canBalance([1, 1, 1, 2, 1, 1, 1])