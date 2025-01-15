const vowelsCount = (string) => {
    let vowelArray = ["a", "e", "i", "o", "u"];
    let lowerCaseString = string.toLowerCase();
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(vowelArray.includes(lowerCaseString[i])){
            count++;
        }
    }
    return count;
}

console.log(vowelsCount("Cornelius Washingthorpe"));