let object = {};
const storeNumber = num => object[num] = true;
const retrieveNumber = num => object[num] === true;

storeNumber(1);
storeNumber(4);
storeNumber(5);

console.log(retrieveNumber(1), retrieveNumber(2), retrieveNumber(3), retrieveNumber(4), retrieveNumber(5));
console.log(object);