var plusOne = function(digits) {
    for(let i = digits.length-1; i >= 0; i--){
        if(digits[i] !== 9){
            digits[i]++;
            if(i === 0){
                digits.unshift(1);
            }
            return digits;
        } else {
            digits[i] = 0;
            if(i === 0){
                digits.unshift(1);
                return digits;
            }
        }
    }
};

console.log(plusOne([0]));