// const addBinary = (a, b) => {
//     let aRev = "";
//     let bRev = "";
//     let aDecimal = 0;
//     let bDecimal = 0;
//     for(let i = a.length-1; i >= 0; i--){
//         aRev = aRev + a[i];
//     }
//     for(let i = b.length-1; i >= 0; i--){
//         bRev = bRev + b[i];
//     }
//     for(let i = 0; i < aRev.length; i++){
//         aDecimal = aDecimal + ((aRev[i]*1) * 2 ** i);
//     }
//     for(let i = 0; i < bRev.length; i++){
//         bDecimal = bDecimal + ((bRev[i]*1) * 2 ** i);
//     }
//     let decimalTotal = aDecimal + bDecimal;
//     let counter = 0;
//     let exponentCounter;
//     let answer = "";
//     while(decimalTotal > 0){
//         exponentCounter = 2 ** counter;
//         if(decimalTotal - exponentCounter >= 0){
//             decimalTotal = decimalTotal - exponentCounter;
//             answer[counter] = '1';
//         } else {
//             answer[counter] = '0';
//         }
//         counter++;
//     }
//     return answer;
// }



const addBinary = (a, b) => {
    let c = [];
    for(let i = a.length-1; i >= 0; i--){
        while(a[i] && b[i]){
            c[i] = a[i] + b[i];
            if(c[i] > 1){
                c[i] = 0;
                
            }
        }
    }
}

addBinary("110", "1010")