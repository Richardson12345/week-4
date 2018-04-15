function angkaPrima(angka) {
  var countDivision = 0;
  for(i = 1; i <= angka; i ++){
    if(angka % i === 0){
      countDivision++
    }
  }if (countDivision === 2){
    return true;
  } else {return false;}
  // you can only write your code here!
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false