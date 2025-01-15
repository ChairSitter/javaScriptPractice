const triangle = (num) => {
    let output = "";
    for(let i = 0; i < num; i++){
        output = output + (i+1).toString() + " ";
        console.log(output);
    }
}

triangle(7);