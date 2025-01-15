function myFunction(a){
    let string = a.toString();
    let array = [];
    for(let i = 0; i < string.length; i++){
        array.push(string[i]*1);
    }
    return array;
}

console.log(myFunction(931));