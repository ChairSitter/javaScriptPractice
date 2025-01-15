class Node {
    constructor(data){
        this._data = data;
        this._next = null;
    }
    setNext(node){
        if(!(node instanceof Node)){
            throw new Error('Next node must be a member of the Node class');
        }
        this._next = node;
    }
    getNext(){
        return this._next;
    }
}

class LinkedList {
    constructor(head){
        this._head = head;
    }
    getLength(){
        let length = 0;
        let current = this._head;
        while(current){
            length++;
            current = current.getNext();
        }
        return length;
    }
    getCitiesArray(){
        let current = this._head;
        let citiesArray = [];
        while(current){
            citiesArray.push(current._data);
            current = current.getNext();
        }
        return citiesArray;
    }
    addToFront(node){
        node.setNext(this._head);
        this._head = node;
    }
    addToBack(node){
        let current = this._head;
        while(current.getNext()){
            current = current.getNext();
        }
        current.setNext(node);
    }
    deleteNode(node){
        let findLast = this._head;
        while(findLast.getNext()){
            findLast = findLast.getNext();
        }
        let findNextToLast = this._head;
        while(findNextToLast.getNext().getNext()){
            findNextToLast = findNextToLast.getNext();
        }
        if(node === this._head){
            this._head = node.getNext();
        } else if(node === findLast){
            findNextToLast.setNext(null);
        } else {
            let findPrev = this._head;
            while(findPrev.getNext() !== node){
                findPrev = findPrev.getNext();
            }
            findPrev.setNext(findPrev.getNext().getNext());
        }
    }
}
let node1 = new Node('Allentown');
let node2 = new Node('Northampton');
let node3 = new Node('California');
let node4 = new Node('Pittsburgh');
let node5 = new Node('Bethlehem');
let node6 = new Node('Warrington');
let node7 = new Node('Cary');

let citiesList = new LinkedList(node1);

node1.setNext(node2);
node2.setNext(node3);
node3.setNext(node4);
node4.setNext(node5);
node5.setNext(node6);
node6.setNext(node7);

let node0 = new Node('Not Born Yet');
citiesList.addToFront(node0);
let node8 = new Node('Who Knows?');
citiesList.addToBack(node8);
let node9 = new Node('Death!');
citiesList.addToBack(node9);

console.log(citiesList);
console.log(citiesList.getCitiesArray());
console.log(citiesList.getLength());