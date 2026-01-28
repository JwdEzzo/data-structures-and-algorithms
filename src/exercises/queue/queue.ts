// --- Description
// Create a Queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store a value until it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1

// Implement a 'peek' method in this Queue class
// Peek should return the last element (the next
// one to be returned) from the queue *without* removing it

class Queue {
  data: unknown[];
  constructor() {
    this.data = [];
  }

  add(record: unknown) {
    this.data.unshift(record); // unshift adds to the beginning
  }

  remove() {
    return this.data.pop(); // pop removes from the end
  }

  // peek returns the first record that was added to the queue
  peek() {
    return this.data.slice(-1);
  }
}

export default Queue;

// shift removes from the beginning
// unshift adds to the beginning
// pop removes from the end
// push adds to the end
