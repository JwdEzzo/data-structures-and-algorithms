//  --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed
// --- Examples
//     const s = new Stack();
//     s.push(1);
//     s.push(2);
//     s.pop(); // returns 2
//     s.pop(); // returns 1
export class Stack {
  data: unknown[];
  constructor() {
    this.data = [];
  }

  push(record: unknown) {
    this.data.push(record);
  }

  pop(): unknown {
    return this.data.pop();
  }

  peek(): unknown {
    return this.data[this.data.length - 1];
    //  return this.data.slice(-1); same
  }
}
// shift removes from the beginning
// unshift adds to the beginning
// pop removes from the end
// push adds to the end
