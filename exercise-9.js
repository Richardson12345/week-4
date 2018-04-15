function tukarBesarKecil(kalimat) {
    var capital = kalimat.toLowerCase();
    var notCapital = kalimat.toUpperCase();
    var finalString = '';
    for(i = 0; i < kalimat.length; i++){
      if (kalimat[i] !== capital[i]){
        finalString += capital[i];
      }else{
        finalString += notCapital[i]
      }
    }return finalString;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"