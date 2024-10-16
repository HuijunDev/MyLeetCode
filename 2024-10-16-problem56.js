/**
 * 【problem 56: merge intervals】
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/* Time complexity: O(n log n), determined by sorting */ 
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);  // Sort the intervals by their starting point (interval[0])   // Time complexity: O(n log n)
  const merged = [];   // Initialize an empty array to store the merged intervals
  let prev = intervals[0];  // Start by setting the 'prev' interval as the first interval in the sorted list

  for (let i = 1; i < intervals.length; i++) {   // Loop through the intervals starting from the second one (i = 1)   // Time complexity: O(n)
    let interval = intervals[i];
    if (interval[0] <= prev[1]) {   // If there is an overlap, merge the intervals 
      prev[1] = Math.max(prev[1], interval[1]);  // by updating 'prev[1]' to the maximum of the end points of 'prev' and 'interval'
      // merged.push(prev);   // Do not push 'prev' into 'merged' here, as the interval is still being merged. For example, after merging two intervals, you need to check if the third interval can also be merged. If you push 'prev' at this point, the result will be incorrect
    } else {
      merged.push(prev);   // If there is no overlap, push 'prev' into the 'merged' array 
      prev = interval;   // Update 'prev' to the current 'interval'
    }
  }

  merged.push(prev);   // After the loop, push the last 'prev' interval into the 'merged' array
  return merged;
};