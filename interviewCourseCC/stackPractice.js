class Stack {
    constructor(){
        this._array = [];
    }
    push(data){
        this._array.push(data);
    }
    pop(){
        return this._array.pop();
    }
}

let stack = new Stack;

stack.push(15);
stack.push(10);
stack.push(1);
stack.push(6);
stack.pop();

console.log(stack);
console.log(stack.pop());
console.log(stack._array.includes(15), stack._array.includes(400));

