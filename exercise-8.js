function urutkanAbjad(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var numString = ''
    var newString = ''
    for(i = 0; i < str.length; i++){
      numString += alphabet.indexOf(str[i]) + ',';
    }numString = numString.split(',');
    numString.pop();
    numString.sort(function (a, b) {  return a - b;  })
    for (z = 0; z < numString.length; z++ ){
      newString += alphabet[numString[z]]
    }return newString; 
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'