function checkAB(num) {
    var locationA = [];
    var locationB = [];  
    for(x = 0; x <num.length; x++ ){
      if(num[x] === 'a'){
        locationA.push(x)
      }else if(num[x] === 'b'){
        locationB.push(x)
      } 
    }if (locationB.length === 0 || locationA.length === 0 ){
      return false
    }
    for(b = 0; b < locationA.length;b++){
      for(z = 0; z < locationB.length; z++ ){
        if((Math.abs(locationA[b] - locationB[z]) === 4)){
          return true;
        }
        // return Math.abs(locationA[b] - locationB[z] === 4)
      }
    }
    return false;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false