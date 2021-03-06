function cariMedian(arr) {
  var medianIndex = (arr.length-1) / 2;
  var storeMedian = 0;
  return (arr[Math.floor(medianIndex)] + arr[Math.ceil(medianIndex)])/2;
  // you can only write your code here!
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5