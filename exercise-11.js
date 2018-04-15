function changeMe(arr) {
  if(arr.length === 0){
    return "\"";
  }
var display =[
  
  { 
    firstName: arr[0][0],
    lastName: arr[0][1],
    gender: arr[0][2],
    age: 2018 - arr[0][3]
  },
    {
    
    firstName: arr[1][0],
    lastName: arr[1][1],
    gender: arr[1][2],
    age: arr[1][3]
  }
  ]
  
  for(x = 0; x< display.length; x++){
    if (display[x].age === undefined || display[x].age > 2018){
      display[x].age = 'Invalid Birth Year'
    }
  }
  
// for(var key in display){
//   console.log('1 Christ Evans: ')
//   console.log(display[key])
// }
console.log('1 Christ Evans: ');
console.log(display[0]);
console.log('2 Robert Downey')
console.log(display[1]);


}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""