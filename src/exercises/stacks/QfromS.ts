// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'queue'
// class.  The queue should have an 'add', 'remove',
// and 'peek' method similar to a standard queue.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//  const q = new Queue();
//  q.add(1);
//  q.add(2);
//  q.peek();  // returns 1
//  q.remove(); // returns 1
//  q.remove(); // returns 2

import { Stack } from "./stack";

class Queue {
  stack1: Stack;
  stack2: Stack;
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(record: unknown) {
    this.stack1.push(record);
  }

  remove() {
    while (this.stack1.peek()) {
      const record1 = this.stack1.pop();
      this.stack2.push(record1);
    }

    const record2 = this.stack2.pop();
    while (this.stack2.peek()) {
      this.stack2.push(record2);
    }
    return record2;
  }

  // peek returns the first record that was added to the queue
  peek() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    const record = this.stack2.peek();
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    return record;
  }
}

export default Queue;
