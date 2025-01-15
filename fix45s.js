function fix45(nums){
    let array = [...nums];
    let fiveLocation;
    for(let i = 0; i < array.length; i++){
        if(array[i] === 5){
            fiveLocation = i;
        }
    }

}