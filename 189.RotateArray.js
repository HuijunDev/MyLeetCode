/**
 * 【problem 189: rotate array】
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* Time complexity: O(n) */
var rotate = function(nums, k) {
  const n = nums.length;
  k = k % n;   // Get the effective rotation steps (If the rotation steps k are greater than the array length n, rotating n times is equivalent to no rotation)   // Time complexity: O(1)
  const rotated = new Array(n).fill(0);   // Define a new array of length n, and initialize all its elements to 0

  for (let i = 0; i < n; i++) {   // Iterate through each element of the original array nums   // Time complexity: O(n)
    rotated[(i+k) % n] = nums[i];   // Place each element in its new position in the rotated array
  }

  for (let i = 0; i < n; i++) {   // Time complexity: O(n)
    nums[i] = rotated[i];   // Copy the elements from the rotated array back to the original nums array
  }
};
