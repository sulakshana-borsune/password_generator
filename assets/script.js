// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");  //length 8-128

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var pwLength = parseInt(prompt('What length of password do you want to select?','llength from 8 to 128'))
 var upperCase = confirm('Do you want uppercase?: ')
 var lowerCase = confirm('Do you want lowercase?: ')
 var number = confirm('Do you want number?: ')
 var specialChar = confirm('Do you want specialChar?: ')

pwdChars = ['specialChar','upperCase','lowerCase','number']
 specialChar = ['!','@','#','$','%','&','*','-','_']
 upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z']
 lowerCase = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','r','s','t','u','v','w','x','y','z']
 number = [0,1,2,3,4,5,6,7,8,9]
 let pwC
 //let pW
 
 function genratePassword(){

  if(upperCase != null)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password)
 // pwC = pwC.concat(upperCase)

if(lowerCase != null)
pwC = pwC.concat(lowerCase)

if(number != null)
pwC = pwC.concat(number)

if(specialChar != null)
pwC = pwC.concat(specialChar)




for(var i=0;i<=pwdChars.length;i++){
  let pW = pwdChar.Math.floor(Math.random(pwdChars.length))
    
  // pW.join(randomPass)

}
//return(pW)
 }
 alert(pW)



   