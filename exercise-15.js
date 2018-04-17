function sorting(arrNumber) {
 var sorted = arrNumber.sort(function (a, b) {  return b - a;  });
  return sorted
  // code di sini
}

function getTotal(arrNumber) {
  var count = 0;
  for(x = 0; x<arrNumber.length; x++){
      if(arrNumber[0] === arrNumber[x]){
        count++
      }
  }
  return count
  // code di sini
}

function mostFrequentLargestNumbers(arrNumber) {
  if(arrNumber.length === 0){
    return "''";
  }
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return 'anga paling besar adalah ' + listSort[0] +' dan jumlah muncul sebanyak ' + countHighest + ' kali';
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''