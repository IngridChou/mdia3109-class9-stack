class StackNode {
    public data: number;
    public next: StackNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    public head: StackNode | null;

    constructor(head: any) {
        this.head = head;
    }

    public print(): void {
        let temp = this.head;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    // pop
    public pop(): void {
        if(this.head !== null) {
            this.head = this.head.next;
        }
    }

    // push
    public push(data: number): void {
        if(this.head === null) {
            this.head = new StackNode(data);
        } else {
            let temp = new StackNode(data);
            temp.next = this.head;
            this.head = temp;
        }
    }
}

let nodeOne = new StackNode(5);
let stack = new Stack(nodeOne);

stack.print(); // ts-node Stack.ts
/**
 * 5
 */

console.log();
stack.push(3);
stack.print();
/**
 * 3
 * 5
 */

console.log();
stack.pop();
stack.print();
/**
 * 5
 */