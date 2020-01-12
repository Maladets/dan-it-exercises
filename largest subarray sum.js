/*

*/

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
// const arr = [-2, -3, 4];

getMaxSubSumArr = function (arr) {
  let max = -Infinity;
  max = Math.max(max, arr[0]);
  max = Math.max(max, arr[0] + arr[1]);
  max = Math.max(max, arr[0] + arr[1] + arr[2]);  
  max = Math.max(max, arr[1]);  
  max = Math.max(max, arr[1] + arr[2]);    
  max = Math.max(max, arr[2]);  
  return max;
};
getMaxSubSumArr = function (arr) {
  let max = -Infinity;
  max = Math.max(max, arr.slice(0, 1).reduce((a, b) => a + b, 0));
  max = Math.max(max, arr.slice(0, 2).reduce((a, b) => a + b, 0));
  max = Math.max(max, arr.slice(0, 3).reduce((a, b) => a + b, 0));
  max = Math.max(max, arr.slice(1, 2).reduce((a, b) => a + b, 0));
  max = Math.max(max, arr.slice(1, 3).reduce((a, b) => a + b, 0));
  max = Math.max(max, arr.slice(2, 3).reduce((a, b) => a + b, 0));
  return max;
};
getMaxSubSumArr = function (arr) {
  let max = -Infinity;
  for (let from = 0; from < arr.length; ++from) {
   for (let to = from + 1; to <= arr.length; ++to) {
     max = Math.max(max, arr.slice(from, to).reduce((a, b) => a + b, 0));
   } 
  }
  return max;
};
console.log(getMaxSubSumArr(arr));
