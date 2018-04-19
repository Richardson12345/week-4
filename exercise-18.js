function kaliTerusRekursif(angka) {
  angkaString = angka.toString();
  var result= 1
  if(angkaString.length === 1 ){
    return angka
  }else{
    for(k = angkaString.length-1; k >= 0;k--){
      result  *= (Number(angkaString[k])) 
    }return kaliTerusRekursif(result)
  }
  // you can only write your code here!
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
