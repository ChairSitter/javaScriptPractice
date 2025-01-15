const threeSum = (nums) => {
    let arrayOfTriplets = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                if(nums[i] + nums[j] + nums[k] === 0){
                    let array = [nums[i], nums[j], nums[k]];
                    let hasArray = false;
                    array = array.sort(function(a, b){return a-b})
                    for(let m = 0; m < arrayOfTriplets.length; m++){
                        if(arrayOfTriplets[m][0] == array[0] && arrayOfTriplets[m][1] == array[1] && arrayOfTriplets[m][2] == array[2]){
                            hasArray = true;
                        }
                    }
                    if(!hasArray){
                        arrayOfTriplets.push(array);
                    }
                }
            }
        }
    }
    return arrayOfTriplets;
};

console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]))