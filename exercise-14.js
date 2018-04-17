
function changeVocals (str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var alphabetUpper = alphabet.toUpperCase()
     var changeVocal = ''
     for(a = 0; a < str.length; a++){
     if(str[a] === 'a' ||str[a] === 'i' ||str[a] === 'u' ||str[a] === 'e' ||str[a] === 'o'){
       var i  = alphabet.indexOf(str[a])
       changeVocal += alphabet[i+1] 
     }else if(str[a] == 'A' ||str[a] == 'I' ||str[a] == 'U' ||str[a] == 'E' ||str[a] == 'O'){
       var g = alphabetUpper.indexOf(str[a])
       changeVocal += alphabetUpper[g+1]
     }
     else{
       changeVocal += str[a]
     }
     
     }
   return changeVocal    
   //code di sini
 }
 
 function reverseWord (str) {
   var reversed = ''
   for(b = str.length - 1; b >= 0; b--){
     reversed += str[b]
   }
   return reversed
   //code di sini
 }
 
 function setLowerUpperCase (str) {
   var oppositecase = '';
   var lower = str.toLowerCase();
   var upper = str.toUpperCase();
   
   for(c = 0; c < str.length; c++){
     if(str[c] === upper[c]){
       oppositecase += lower[c]
     }else{
       oppositecase += upper[c]
     }
   }
   return oppositecase
   //code di sini
 }
 
 function removeSpaces (str) {
   str = str.replace(/\s/g, '')
   return str
   //code di sini
 }
 
 function passwordGenerator (name) {
   
  if(name.length < 5){
    return 'minimal karakter yang diinputkan adalah 5 karakter'
  }
   var changeVocal = changeVocals(name)
   var oppositecase = setLowerUpperCase(changeVocal)
   var reversed = reverseWord(oppositecase);
   var finalString = removeSpaces(reversed)
   
   return finalString
    
   
   //code di sini
 }
 
 console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
 console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
 console.log(passwordGenerator('Alexei')); // 'JFXFLb'
 console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'