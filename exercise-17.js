function totalDigitRekursif(angka) {
  var angkaString = angka.toString()
  var angkaSlice = angkaString.slice(-1)
  var angkaNew = angkaString.slice(0,angkaString.length-1);
  if(angkaString.length === 1){
    return angka;
  }else{
    return Number(angkaSlice) + totalDigitRekursif(Number(angkaNew))
  }
  // you can only write your code here!
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5