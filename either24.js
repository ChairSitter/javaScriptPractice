function either24(nums){
    let arr = [...nums];
    let hasTwos = false;
    let hasFours = false;
    for (let i = 0; i < arr.length-1; i++) {
        console.log(arr[i], arr[i+1])
        if(arr[i] === 2 && arr[i+1] === 2){
            hasTwos = true;
        }
        if(arr[i] === 4 && arr[i+1] === 4){
            hasFours = true;
        }
    }
    console.log(hasTwos, 'hasTwos', hasFours, 'hasFours');
    if(hasTwos && hasFours){
        return false;
    }
    if(hasTwos || hasFours){
        return true;
    }
    return false;
}

either24([4, 4, 1, 2, 2])
either24([4, 4, 3, 5, 6])
either24([4, 5, 6, 7, 2, 2])
either24([4, 1, 2])
either24([4, 8, 1, 5, 2])
