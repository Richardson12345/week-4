function digitPerkalianMinimum(angka) {
    var factors = ''
    for(i = angka; i > 0; i--){
      var remainder = angka % i;
      if(remainder === 0 ){
        factors += i + ','
      }
    }var factorArray = factors.split(',');
    factorArray.pop()
    // return factorArray;
    var multiple = []
    for (x = 0; x< factorArray.length; x++){
      multiple.push([]);
    }
    for(z = 0 ; z < factorArray.length;z++){
      multiple[z].push(angka / factorArray[z])
    }
     var factorial = []
    for (x = 0; x< factorArray.length; x++){
      factorial.push([]);
    }for(j = 0; j < factorial.length; j++){ 
      factorial[j].push(factorArray[j] + '*' +multiple[j] )
    }var final = [];
    for(o = 0; o < factorial.length; o++){
      final.push([])
    }
    // final[0].push(factorial[0][0].length-1);
    // return final;
    for(k = 0 ; k<= final.length-1;k++){
      final[k].push(factorial[k][0].length-1)
    }  return Math.min.apply( null, final )
    
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2