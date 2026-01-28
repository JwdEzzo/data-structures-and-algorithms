import Queue from "../queue/queue";
// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new , third queue.
// The third queue should contain the *alterating* content
// of the two queues.  Make sure that your function works for
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//  const queueOne = new Queue();
//  queueOne.add(1);
//  queueOne.add(2);
//  const queueTwo = new Queue();
//  queueTwo.add('Hi');
//  queueTwo.add('There');
//  const q = weave(queueOne, queueTwo);
//  q.remove() // 1
//  q.remove() // 'Hi'
//  q.remove() // 2
//  q.remove() // 'There'

function weave2(queue1: Queue, queue2: Queue): Queue {
  const combinedQueue = new Queue();
  const largerQueue =
    queue1.data.length >= queue2.data.length ? queue1 : queue2;
  const smallerQueue =
    queue1.data.length >= queue2.data.length ? queue2 : queue1;
  const smallerLength = smallerQueue.data.length;
  const largerLength = largerQueue.data.length;
  //
  //
  if (largerQueue === queue1) {
    for (let i = 0; i <= largerLength; i++) {
      if (i <= smallerLength) {
        if (!smallerQueue.peek()) {
          combinedQueue.add(largerQueue.peek());
          largerQueue.remove();
        } else {
          combinedQueue.add(largerQueue.peek());
          largerQueue.remove();
          combinedQueue.add(smallerQueue.peek());
          smallerQueue.remove();
        }
      } else if (i > smallerLength && i < largerLength) {
        combinedQueue.add(largerQueue.peek());
        largerQueue.remove();
      }
    }
  } else {
    if (largerQueue === queue2) {
      for (let i = 0; i <= largerLength; i++) {
        if (i <= smallerLength) {
          if (!smallerQueue.peek()) {
            combinedQueue.add(largerQueue.peek());
            largerQueue.remove();
          } else {
            combinedQueue.add(smallerQueue.peek());
            smallerQueue.remove();
            combinedQueue.add(largerQueue.peek());
            largerQueue.remove();
          }
        } else if (i > smallerLength && i < largerLength) {
          combinedQueue.add(largerQueue.peek());
          largerQueue.remove();
        }
      }
    }
  }
  return combinedQueue;
}

function weave(queue1: Queue, queue2: Queue): Queue {
  const combinedQueue = new Queue();
  while (queue1.peek() || queue2.peek()) {
    if (queue1.peek()) {
      combinedQueue.add(queue1.remove());
    }
    if (queue2.peek()) {
      combinedQueue.add(queue2.remove());
    }
  }
  return combinedQueue;
}

const q1 = new Queue();
q1.add(1);
q1.add(3);
q1.add(3);
q1.add(5);
console.log();
const q2 = new Queue();
q2.add(2);
q2.add(2);
q2.add(2);
q2.add(2);
q2.add(2);
q2.add(2);
q2.add(2);
q2.add(2);
const q3 = new Queue();
q3.add(1);
q3.add(3);
q3.add(3);
q3.add(5);
console.log();
const q4 = new Queue();
q4.add(2);
q4.add(2);
q4.add(2);
q4.add(2);
q4.add(2);
q4.add(2);
q4.add(2);
q4.add(2);

const q5 = weave2(q1, q2);
const q6 = weave(q3, q4);

console.log(q5);
console.log(q6);

function Weave() {
  return <div>Weave</div>;
}

export default Weave;
