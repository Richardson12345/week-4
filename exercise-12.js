function shoppingTime(memberId, money) {
  
  if(memberId === '' || memberId === undefined){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }

  if (money < 50000){
    return 'Mohon maaf, uang tidak cukup'
  }
  var item =  [['sepatu Stacattu', 1500000],['baju brand zoro', 500000],["baju brang H&N" , 250000],['sweater brand Uniklooh', 175000],['casing handphone', 50000]]
  
  var change = money
  var shoppingList = []
  for(z = item.length-1; z >= 0; z --){
        if(change - item[z][1] >= 0 ){
        shoppingList.push(item[z][0])
        change -= item[z][1]
       }
   }
  

  
  var shoppingTime = {
    memberId: memberId,
    money: money,
    listPurchased: shoppingList,
    changeMoney: change
  }
  
  return shoppingTime;
  
  // you can only write your code here!
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja