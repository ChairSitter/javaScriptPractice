class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(data){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        } else {
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log("The list is empty.")
        } else {
            let curr = this.head;
            let listValues = "";
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
           console.log(listValues); 
        }
    }
}

const list = new LinkedList();
console.log("list is empty?", list.isEmpty());
console.log("list size", list.getSize());
list.print();
list.append(10);
list.print();
list.append(20);
list.append(30);
list.print();

