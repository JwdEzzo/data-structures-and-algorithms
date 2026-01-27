//To fix this: Either use pure slicing (no mutation) or use a while loop with shift() operations without relying on index-based access. The while loop approach would be: "While array has elements, take the first N elements via multiple shifts and form a chunk."

// Your sequential loop structure conflicts with the dynamic nature of array mutation. You need one strategy or the other, not a combination that fights against itself.
function arrayChunk(array: number[], size: number) {
  function createSubarrays(n: number): number[][] {
    return Array(n)
      .fill(null)
      .map(() => []);
  }
  const subarrays = createSubarrays(3);
  console.log(subarrays);
  for (let i = 0; i < size; i++) {
    subarrays[i].push(array[i]);
    array.shift();
    if (array.length === 0) {
      break;
    }
    subarrays[i].push(array[i]);
    array.shift();
    if (subarrays[i].length === size) {
      break;
    }
  }
  return subarrays;
}
console.log(arrayChunk([1, 2, 3, 4, 5], 2));
function Test() {
  return <div>test</div>;
}

export default Test;
