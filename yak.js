function stringYak(str){
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i++){
      if(strArr[i] === 'y' && strArr[i+2] === 'k'){
        console.log('hi')
        strArr.splice(i, 3);
      }
    }
    return strArr.join('');
}

console.log(stringYak('yakpak'))
console.log(stringYak('pakyak'))
console.log(stringYak('yak123ya'))
console.log(stringYak('xxxyakyyyakzzz'))