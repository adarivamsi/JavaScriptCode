console.clear();
console.log("Priority Queue");

class PriorityQueue {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  queueSize() {
    return this.size;
  }

  enqueue(element, priority = 0) {
    priority = Math.max(Number(priority), 0);
    const item = { element, priority };
    if (this.size === 0 || item.priority >= this.list[this.size - 1].priority) {
      this.list.push(item);
    } else {
      for (let idx in this.list) {
        if (item.priority < this.list[idx].priority) {
          this.list.splice(idx, 0, item);
          break;
        }
      }
    }
    this.size++;
  }

  dequeue() {
    let removed = this.list.shift();
    this.size--;
    return removed;
  }
}

const pq = new PriorityQueue();

pq.enqueue("dog", 2);
pq.enqueue("cat", 0);
pq.enqueue("whale", 1);
console.log(pq.queueSize());
console.log(pq);

console.log(pq.dequeue());
console.log(pq);

console.log(pq.dequeue());
console.log(pq);

console.log(pq.queueSize());
