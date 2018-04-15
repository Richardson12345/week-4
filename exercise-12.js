function shoppingTime(memberId, money) {
  
    if(memberId === '' || memberId === undefined){
      return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
   var price =  [50000, 175000, 250000, 500000, 1500000]
   var changeMoney = money;
    for(x = 0; x < price.length ; x++){
      if (changeMoney - price[x] < 0){
        break;
      }
       changeMoney -= price[x]
    }
   var shoppingList = []
   if(money >= 50000 && money < 50000 + 175000   ){
     shoppingList.push('Casing Handphone ')
   } if(money >= 50000 + 175000 && money < 50000 + 175000 + 250000){
     shoppingList.push('Casing Handphone ' + 'Sweater Uniklooh ')
    }if (money >= 50000 + 175000 + 250000 && money < 50000 + 175000 + 250000 + 500000){ shoppingList.push('Casing Handphone ' + 'Sweater Uniklooh ' + 'Baju H&N ')
    }if (money >= 50000 + 175000 + 250000 + 500000 && money < 50000 + 175000 + 250000 + 500000 + 1500000){
      shoppingList.push('Casing Handphone ' + 'Sweater Uniklooh ' + 'Baju H&N ' + 'Baju Zoro ')
    }if(money >=  50000 + 175000 + 250000 + 500000 + 1500000 ){
      shoppingList.push('Casing Handphone ' + 'Sweater Uniklooh ' + 'Baju H&N ' + 'Baju Zoro '+ 'sepatu Stacattu ')
    }
    
    if (money < 50000){
      return 'Mohon maaf, uang tidak cukup'
    }
    
    var shoppingTime = {
      memberId: memberId,
      money: money,
      listPurchased: shoppingList,
      changeMoney: changeMoney
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