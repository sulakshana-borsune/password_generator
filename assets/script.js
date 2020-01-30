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
  var person = parseInt(prompt("How long would you like the password?"))
  var person2 = confirm("Would you like a uppercase?:")
  var person3 = confirm("Would you like a lowercase?:")
  var person4 = confirm("Would you like a number?:")
  var person5 = confirm("Would you like a special char?:")
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var num = '0123456789';
  var sym = '!#$%^&*=-_';
  var password = ''
  if (person2)
    password += upperCase
  if (person3)
    password += lowerCase
  if (person4)
    password += num
  if (person5)
    password += sym
  var pwd = ''
  for (var i = 0; i < person; i++) {
    var char = password.charAt(Math.floor(Math.random() * password.length));
    pwd += char
  }
  return pwd;
}





