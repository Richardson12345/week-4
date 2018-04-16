function changeMe(arr) {
  var obj = {}
  
  
  for(x = 0; x< arr.length; x++){
    var fullName = x+1 +'.' + ' ' + arr[x][0] + ' ' + arr[x][1];
    if(arr[x][3] === undefined){
      arr[x].push('Invalid birth year')
    } else(arr[x][3] = 2018 - arr[x][3])
   
    obj[fullName] = {
          firstName : arr[x][0],
          lastName : arr[x][1],
          gender : arr[x][2],
          age: arr[x][3]
    }
  }
  
  
return obj

  
    // you can only write your code here!
}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
console.log(changeMe([])); // ""