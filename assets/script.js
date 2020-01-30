var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  // Password values
  var passwordLength = parseInt(prompt("How long would you like the password?"))
  var upperCase = confirm("Would you like a uppercase?:")
  var lowerCase = confirm("Would you like a lowercase?:")
  var number = confirm("Would you like a number?:")
  var splChar = confirm("Would you like a special char?:")
  var lowerCasearr = 'abcdefghijklmnopqrstuvwxyz';
  var upperCasearr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var num = '0123456789';
  var sym = '!#$%^&*=-_';
  var password = ''
  if (upperCase)
    password += upperCasearr
  if (lowerCase)
    password += lowerCasearr
  if (number)
    password += num
  if (splChar)
    password += sym
  var pwd = ''
  for (var i = 0; i < passwordLength; i++) {
    var char = password.charAt(Math.floor(Math.random() * password.length));
    pwd += char
  }
  return pwd;
}





