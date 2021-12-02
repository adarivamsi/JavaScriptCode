console.clear();
console.log("Binary Heap - Min");

class BinaryHeap {
  constructor() {
    this.size = 0;
    this.items = [];
  }

  getLeftChildIndex = (parentIndex) => 2 * parentIndex + 1;
  getRightChildIndex = (parentIndex) => 2 * parentIndex + 2;
  getParentIndex = (childIndex) => (childIndex - 1) / 2;

  hasLeftChild = (index) => this.getLeftChildIndex(index) < this.size;
  hasRightChild = (index) => this.getRightChildIndex(index) < this.size;
  hasParent = (index) => this.getParentIndex(index) >= 0;

  leftChild = (index) => this.items[this.getLeftChildIndex(index)];
  rightChild = (index) => this.items[this.getRightChildIndex(index)];
  parent = (index) => this.items[this.getParentIndex(index)];

  swap = (indexOne, indexTwo) => {
    const temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  };

  peek = () => {
    if (this.size === 0) return null;
    return this.items[0];
  };

  poll = () => {
    if (this.size === 0) return null;
    let item = this.items[0];
    this.items[0] = this.items[this.size - 1];
    this.size--;
    this.heapifyDown();

    return item;
  };

  add = (item) => {
    this.items[this.size] = item;
    this.size++;
    this.heapifyUp();
  };

  heapifyUp = () => {
    let index = this.size - 1;
    while (this.hasParent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  };

  heapifyDown = () => {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.items[index] < this.items[smallerChildIndex]) break;
      else this.swap(index, smallerChildIndex);

      index = smallerChildIndex;
    }
  };
}

const bheap = new BinaryHeap();
console.log(bheap);
bheap.add(10);
bheap.add(15);
bheap.add(20);
bheap.add(17);
bheap.add(25);

console.log(bheap.peek());
console.log(bheap);

bheap.poll();
console.log(bheap);
console.log(bheap.peek());
