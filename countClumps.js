function countClumps(nums) {
    let array = [...nums];
    let currentClump = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === array[i+1]){
            currentClump++;
        } else if(currentClump > 0){
            count++;
            currentClump = 0;
        }
    }
    return count;
}

console.log(countClumps([1, 1, 2, 2, 3]));
  