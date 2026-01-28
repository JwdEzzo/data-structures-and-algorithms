// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

function combinationSum(candidates: number[], target: number): number[][] {
  const results: number[][] = [];
  let sum = 0;
  let isum = 0;
  let jsum = 0;
  for (let i = 0; i < candidates.length; i++) {
    sum = sum + candidates[i];
  }
  for (let i = 0; i < candidates.length; i++) {
    isum = isum + candidates[i];
    for (let j = 0; j < candidates.length; j++) {
      jsum = jsum + candidates[j];
      if (isum + jsum === target) {
        results.push;
      }
    }
  }
  return results;
}

console.log(combinationSum([1, 2, 3, 4], 5));

function CombinationSum() {
  return <div>CombinationSum</div>;
}

export default CombinationSum;
