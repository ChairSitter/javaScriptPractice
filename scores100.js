function scores100(scores){
    let array = [...scores];
    for(let i = 0; i < array.length; i++){
        if(array[i] === 100){
            if(array[i-1] === 100 || array[i+1] === 100){
                return true
            }
        }
    }
    return false;
}