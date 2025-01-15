const isArray = (array) => {
    return typeof array;
}

console.log(isArray([1, 2, 3, 4]))

// person = {
//     name: 'Bryan', 
//     DOB: '5/30/1991', 
//     location: 'Cary, NC'
// }

// console.log(person.DOB)

class Person {
    #name
    #age
    #location
    constructor(name, age, location){
        this.#name = name;
        this.#age = age;
        this.#location = location;
    }
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }
    getLocation(){
        return this.#location;
    }
    setName(name){
        this.#name = name;
    }
    setAge(age){
        this.#age = age;
    }
    setLocation(location){
        this.#location = location;
    }
    incrementAge(){
        this.#age++;
    }
}

let bryan = new Person('Bryan', 33, 'Cary, NC')

console.log(bryan.getName(), bryan.getAge(), bryan.getLocation())
bryan.incrementAge();
console.log(bryan.getName(), bryan.getAge(), bryan.getLocation())

