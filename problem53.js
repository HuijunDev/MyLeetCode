/**
 * 【problem 53: maximum subarray】
 * @param {number[]} nums
 * @return {number}
 */

/** 
* 【solution 1】 Time complexity: O(n)
* Greedy algorithm: At each step, it takes the current optimal solution.
* i.e., keeping the largest cumulative sum of subarrays at each step.
* It outputs the largest subarray sum in the array. 
*/ 

/* 
var maxSubArray = function (nums) {
  let res = nums[0];   // Stores the maximum subarray sum found so far
  let total = 0;   // Used to accumulate the current subarray sum

  for (let n of nums) {
    if (total < 0) {   // If the current accumulated sum is less than 0, the previous sum does not contribute to the future result.
        total = 0;   // Reset 'total' to 0 and start a new subarray sum calculation. 
    }

    total += n;
    res = Math.max(res, total);   // Update 'res' to store the maximum subarray sum at each step.
  }

  return res;   // Return the maximum subarray sum.
};
*/



/** 
* 【solution 2】 Time complexity: O(n)
* An optimization to the greedy algorithm: When choosing to start a new subarray, ensure that the first element of this subarray is positive. 
* This avoids starting directly with a negative number, which increases the potential sum of the subarray. 
* Limitation: This strategy won't significantly change the time complexity, but it may lead to some performance improvements for certain input data.
* In general, Kadane's Algorithm (the original greedy algorithm) is already highly efficient.
*/ 

var maxSubArray = function(nums) {
  let res = nums[0]; // Stores the maximum subarray sum found so far
  let total = 0;     // Used to accumulate the current subarray sum

  for (let n of nums) {
    // If the current element is negative and total is 0, skip starting a new subarray
    if (total === 0 && n < 0) {
      continue;
    }

    total += n;
    
    // If total is less than 0, reset total to 0 and continue
    if (total < 0) {
      total = 0;
    }
    
    // Update the result with the maximum subarray sum found
    res = Math.max(res, total);
  }

  return res; // Return the maximum subarray sum
};