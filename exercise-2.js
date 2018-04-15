function fpb(angka1, angka2) {
    var storeAngka = [angka1,angka2]
    var storeDivision = [];
    var max = Math.max.apply( null, storeAngka );
    for(i = max; i >= 0; i--){
      if (storeAngka[0]%i === 0 && storeAngka[1]%i === 0){
        storeDivision.push(i)
      }
    }return Math.max.apply( null, storeDivision );
    
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1