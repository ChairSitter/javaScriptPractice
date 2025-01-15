function last2(str){
    let count = 0;
    let lastLetters = str.substring(str.length-2);
    for(let i = 0; i < str.length-2; i++){
        console.log(str.substring(i, i+2) === lastLetters)
      if(str.substring(i, i+1) === lastLetters){
           count++;
       }
    }
    console.log(count)
    return count;
}

last2('gnhnaohnghn');