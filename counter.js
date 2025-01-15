//Make a counter function 
const createCounter = (n) => {
    return counter = () => {
        return n++;
    }
}

createCounter(1);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


