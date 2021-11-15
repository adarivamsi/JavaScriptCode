console.clear();
console.log("Double Linked List");

class DoubleLinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  // Add at the end of the List / tail
  append(value) {
    // If tail is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  // Add at the beginning of the list / head
  prepend(value) {
    // If head is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  // Add at the particular location in the list
  appendAt(value, index) {
    let currentNode = this.head;
    if (index < this.sizeOfList()) {
      for (let i = 0; i <= index; i++) {
        if (i === index) {
          let oldHead = currentNode;
          let previousNode = currentNode.prev;
          currentNode = new Node(value);
          oldHead.prev = currentNode;
          currentNode.next = oldHead;
          previousNode.next = currentNode;
          currentNode.prev = previousNode;
        }
        currentNode = currentNode.next;
      }
    } else {
      console.log("Invalid Input!");
    }
  }

  // Delete head
  deleteHead() {
    //   If List if empty
    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      return removedHead.value;
    }
  }

  // Delete Tail
  deleteTail() {
    // If list if empty
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }

      return removedTail.value;
    }
  }

  // Search
  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  // Size of List
  sizeOfList() {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  // Print List
  printList() {
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
      str += `<- ${currentNode.value} ->`;
      currentNode = currentNode.next;
    }

    return console.log(str);
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

let list = new DoubleLinkedList();

list.append(1);
list.printList();

list.append(2);
list.printList();

list.append(3);
list.printList();

list.prepend(0);
list.printList();

list.append(4);
list.printList();

list.appendAt(7, 2);
console.log(list);
list.printList();

list.append(5);
list.printList();

console.log(list.sizeOfList());

console.log(list.search(3));

console.log(list.deleteHead());
list.printList();

console.log(list.deleteTail());
list.printList();
console.log(list.deleteTail());
console.log(list.deleteTail());
console.log(list.deleteTail());
console.log(list.deleteTail());
list.printList();
