// arrayChunk([1,2,3,4,5],2) = [[1,2],[3,4],[5]]
function arrayChunk1(array: number[], size: number) {
  const result: number[][] = [];

  // While original array has elements
  while (array.length > 0) {
    const chunk: number[] = []; // Create new empty chunk

    // Take first 'size' elements from remaining array
    // Remove first 'size' elements from original array and add to chunk
    for (let i = 0; i < size && array.length > 0; i++) {
      const removedElement = array.shift()!; // Remove ONE element
      chunk.push(removedElement); // Add it to chunk
      console.log(
        `${i}th iteration, pushed: ${removedElement}`, // Show what was actually removed
        "Remaining array:",
        array,
        "Chunk is:",
        chunk,
      );
    }

    result.push(chunk); // Add completed chunk to result
  }
  // Repeat until original array is empty
  return result;
}

function arrayChunk2(array: number[], size: number) {
  const result: number[][] = [];
  while (array.length > 0) {
    const chunk: number[] = [];
    for (let i = 0; i < size && array.length > 0; i++) {
      const removedElement = array.shift()!;
      chunk.push(removedElement);
    }
    result.push(chunk);
  }
  return result;
}

function chunkWithSlicing(array: number[], size: number) {
  const result: number[][] = [];
  let startIndex = 0;

  while (startIndex < array.length) {
    const chunk = array.slice(startIndex, startIndex + size);
    result.push(chunk);
    startIndex += size; // Move to next chunk position
  }
  return result;
}

function arrayChunk3(array: number[], size: number) {
  const chunked: number[][] = [];
  for (let index = 0; index < array.length; index += size) {
    chunked.push(array.slice(index, index + size));
  }
  return chunked;
}

function arrayChunk4(array: number[], size: number) {
  const chunked: number[][] = [];
  for (const element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

function ArrayChunk() {
  return <div>Hi</div>;
}

export default ArrayChunk;

// function arrayChunk(array: number[], size: number) {
//   const subarray1: number[] = [];
//   const subarray2: number[] = [];
//   const subarray3: number[] = [];
//   for (let i = 0; i < size; i++) {
//     subarray1.push(array[i]);
//     array.shift();
//     subarray1.push(array[i]);
//     array.shift();
//     if (subarray1.length === size) {
//       break;
//     }
//   }
//   for (let i = 0; i < size; i++) {
//     subarray2.push(array[i]);
//     array.shift();
//     subarray2.push(array[i]);
//     array.shift();
//     if (subarray2.length === size) {
//       break;
//     }
//   }
//   for (let i = 0; i < size; i++) {
//     subarray3.push(array[i]);
//     array.shift();
//     if (array.length === 0) {
//       break;
//     }
//     subarray3.push(array[i]);
//     array.shift();
//     if (subarray3.length === size) {
//       break;
//     }
//   }
//   return [subarray1, subarray2, subarray3];
// }
